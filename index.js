import { getPeriodCards, getSlot } from './cards.js';

const context = globalThis.SillyTavern?.getContext();
const arrow = '<path d="M4 12h15m-6-6 6 6-6 6"/>';
const cross = '<path d="m6 6 12 12M18 6 6 18"/>';

function icon(path) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${path}</svg>`;
}

function start() {
    const settingsArea = document.getElementById('extensions_settings');
    if (!settingsArea || document.getElementById('support-postcard')) return;

    const open = document.createElement('button');
    open.className = 'menu_button support-postcard-open';
    open.type = 'button';
    open.lang = 'ru';
    open.textContent = 'Открытки поддержки';
    open.setAttribute('aria-controls', 'support-postcard');
    open.setAttribute('aria-expanded', 'false');
    settingsArea.append(open);

    const card = document.createElement('aside');
    card.id = 'support-postcard';
    card.lang = 'ru';
    card.hidden = true;
    card.setAttribute('aria-label', 'Открытка поддержки');
    card.innerHTML = `
        <div class="support-postcard-art">
            <img alt="" width="768" height="512" decoding="async">
            <svg class="support-postcard-sparkles" viewBox="0 0 360 240" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                <path d="M36 39q0 9 9 9-9 0-9 9 0-9-9-9 9 0 9-9Zm280 116q0 12 12 12-12 0-12 12 0-12-12-12 12 0 12-12ZM84 192q0 6 6 6-6 0-6 6 0-6-6-6 6 0 6-6Z"/>
            </svg>
        </div>
        <button class="support-postcard-close" type="button" title="Закрыть открытку" aria-label="Закрыть открытку">${icon(cross)}</button>
        <div class="support-postcard-paper">
            <div class="support-postcard-copy" aria-live="polite" aria-atomic="true">
                <p class="support-postcard-greeting"></p>
                <h2></h2>
                <p class="support-postcard-message"></p>
            </div>
            <button class="support-postcard-next" type="button" title="Следующая открытка" aria-label="Следующая открытка">${icon(arrow)}</button>
        </div>
    `;
    document.body.append(card);

    const image = card.querySelector('img');
    const copy = card.querySelector('.support-postcard-copy');
    const sparkles = card.querySelector('.support-postcard-sparkles');
    const greeting = copy.querySelector('.support-postcard-greeting');
    const title = copy.querySelector('h2');
    const message = copy.querySelector('.support-postcard-message');
    const close = card.querySelector('.support-postcard-close');
    const next = card.querySelector('.support-postcard-next');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const decks = new Map();
    let animations = [];
    let shownSlot;
    let timer;
    let openedManually = false;

    function stopEffects() {
        for (const animation of animations) animation.cancel();
        animations = [];
    }

    function animateCard() {
        stopEffects();
        if (reducedMotion.matches) return;
        animations = [
            copy.animate([{ opacity: 0.52, transform: 'translateY(3px)' }, { opacity: 1, transform: 'none' }],
                { duration: 210, easing: 'ease-out' }),
            sparkles.animate([{ opacity: 0 }, { opacity: 0.86, offset: 0.28 }, { opacity: 0 }],
                { duration: 460, easing: 'ease-out' }),
        ];
    }

    function showCard(period) {
        if (!decks.has(period.id)) {
            decks.set(period.id, { remaining: [], seenArt: new Set(), lastArt: '' });
        }
        const deck = decks.get(period.id);
        if (!deck.remaining.length) {
            deck.remaining = getPeriodCards(period);
            deck.seenArt.clear();
        }
        const unseenArt = deck.remaining.filter(item => item.asset !== deck.lastArt && !deck.seenArt.has(item.asset));
        const differentArt = deck.remaining.filter(item => item.asset !== deck.lastArt);
        const choices = unseenArt.length ? unseenArt : differentArt.length ? differentArt : deck.remaining;
        const postcard = choices[Math.floor(Math.random() * choices.length)];
        deck.remaining.splice(deck.remaining.indexOf(postcard), 1);
        deck.seenArt.add(postcard.asset);
        deck.lastArt = postcard.asset;

        card.dataset.period = period.id;
        card.dataset.palette = postcard.palette ?? '';
        const src = new URL(`./assets/${postcard.asset}`, import.meta.url).href;
        if (image.src !== src) image.src = src;
        image.alt = postcard.picture ?? '';
        greeting.textContent = period.greeting;
        title.textContent = postcard.title;
        message.textContent = postcard.message;
        card.hidden = false;
        open.setAttribute('aria-expanded', 'true');
        animateCard();
    }

    function syncTime() {
        window.clearTimeout(timer);
        if (document.visibilityState !== 'visible') {
            stopEffects();
            return;
        }

        const now = new Date();
        const slot = getSlot(now);
        if (shownSlot !== slot.key) {
            shownSlot = slot.key;
            showCard(slot.period);
        }
        timer = window.setTimeout(syncTime, Math.max(1, slot.next - now));
    }

    function showCurrentCard() {
        const slot = getSlot();
        shownSlot = slot.key;
        showCard(slot.period);
    }

    function hideCard() {
        const restoreFocus = openedManually && card.contains(document.activeElement);
        card.hidden = true;
        stopEffects();
        image.removeAttribute('src');
        open.setAttribute('aria-expanded', 'false');
        if (restoreFocus) open.focus();
        openedManually = false;
    }

    open.addEventListener('click', () => {
        openedManually = true;
        showCurrentCard();
        close.focus();
    });
    next.addEventListener('click', showCurrentCard);
    close.addEventListener('click', hideCard);
    card.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            event.stopPropagation();
            hideCard();
        }
        if (event.key === 'ArrowRight' && !event.altKey && !event.ctrlKey && !event.metaKey) {
            event.preventDefault();
            event.stopPropagation();
            next.click();
        }
    });
    document.addEventListener('visibilitychange', syncTime);
    window.addEventListener('focus', syncTime);
    syncTime();
}

if (context?.eventSource && context.event_types?.APP_READY) {
    context.eventSource.on(context.event_types.APP_READY, () => setTimeout(start, 0));
} else if (context && document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
} else if (context) {
    start();
}
