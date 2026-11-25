# Открытки поддержки для SillyTavern

51 открытка с 29 иллюстрациями. Стрелка листает подборку по местному времени устройства. В версии 1.5 добавилось по четыре новых сюжета для каждой части суток.

## Установка из ZIP

1. Распакуйте архив.
2. Перенесите папку `support-postcards` в `SillyTavern/data/<профиль>/extensions/`. Для обычной установки профиль называется `default-user`. Если папки `extensions` ещё нет, создайте её.
3. Проверьте, что `manifest.json` лежит прямо внутри `extensions/support-postcards/`, и обновите страницу SillyTavern.
4. Открытка появится после загрузки интерфейса. Чтобы снова открыть её вручную, нажмите «Открытки поддержки» в меню «Расширения».

Для общей установки папку расширения можно разместить в `SillyTavern/public/scripts/extensions/third-party/`. [Документация SillyTavern по UI-расширениям](https://docs.sillytavern.app/for-contributors/writing-extensions/#manifestjson).

При обновлении замените папку расширения `support-postcards` в том же месте и обновите страницу.

## Когда появляются открытки

| Время | Открытки |
| --- | --- |
| 05:00–11:59 | Утренние |
| 12:00–17:59 | Дневные |
| 18:00–22:59 | Вечерние |
| 23:00–04:59 | Ночные |

Открытка появляется при каждой загрузке SillyTavern и при смене части суток. Если вкладка в фоне, при возвращении показывается открытка для текущего времени. Ночной интервал продолжается через полночь до 05:00.

Крестик останавливает эффекты и снимает текущую картинку. В видимой вкладке работает один таймер до смены части суток. При уходе вкладки в фон таймер отменяется до возвращения.

**Стрелка вправо** листает открытки, крестик закрывает окно. Когда фокус внутри открытки, работают клавиши → и Esc. Кот-телеграфист, вампир, кастрюля и ночной голубь попадаются при обычном листании.

Открытки показываются по центру экрана поверх интерфейса. Расширение использует сигнал готовности SillyTavern, локальное время и файлы из собственной папки. Эффекты учитывают системную настройку уменьшения движения. Тексты лежат в `cards.js`, иллюстрации — в `assets`.

<details>
<summary>Промпты к иллюстрациям v1.1</summary>

Иллюстрации сделаны встроенным ImageGen. Четыре сюжета сохранены как `assets/silly-morning.jpg`, `assets/silly-day.jpg`, `assets/silly-evening.jpg` и `assets/silly-night.jpg`, секретная открытка — как `assets/secret.jpg`.

> Create one landscape 3:2 art sheet of exactly 4 original independent deliberately kitschy 2012 internet greeting card artworks in a precise 2x2 full-bleed grid, no gutters, center dividers exactly 50% of each dimension. Each tile is a different absurd but endearing photomontage: top left MORNING an extremely serious fluffy orange cat in a pink bathrobe hugging a gigantic teal coffee mug nearly the size of the cat, sunrise, glitter effects and little hearts, tacky yellow and fuchsia; top right DAY a serious fluffy white rabbit with a yellow construction hardhat holding exactly one large red brick in its paws, stagy construction site, garish graphic radial yellow sunburst and sparkles in the sky, bold purple accents; bottom left EVENING a red squirrel crowned with dangling tea bags receiving a shiny large gold medal over a colorful plaid blanket, baroque gleaming kitsch deep red and gold, shiny gold stars; bottom right NIGHT a stoic gray cat in a shiny crumpled tinfoil hat holding a retro telephone handset to its ear, the telephone cord and base visible, full moon behind, galaxy glitter, tacky purple and bright cyan. Sharp realistic expressive animal fur paired with intentionally tacky maximalist 2000s internet photo montage, all main subjects large and centered, amusing through visual absurdity and earnestly serious animal faces. NO text, NO letters, NO numerals, NO watermark. Captions are added when the app renders. No border between tiles.

> One original landscape 3:2 illustration for a secret absurd night postcard in a 2012 family chat kitsch photomontage style. Very serious gray pigeon wearing a night-shift dispatcher cap, sitting in a derelict moonlit kitchen behind a comically official rotary telephone and electronic alarm clock, holding one delicious dumpling on a tiny official silver plate as if it is evidence. A full moon with saturn rings peeks through lace curtains. High contrast hyperreal animal portrait as intentionally tacky digital collage, campy emerald and violet neon glows and sparkles, cosmic glitter and tiny hearts, exceptionally silly yet sweet, sharp and readable at small size. No text, no numbers, no watermark. The clock should be blank or turned away. Main character centered.

</details>

<details>
<summary>Промпт к иллюстрациям v1.2</summary>

Встроенный ImageGen. Четыре рисунка внутри архива сохранены как `assets/telegram.jpg`, `assets/pot-closed.jpg`, `assets/pot-open.jpg` и `assets/love-letter.jpg`.

> One landscape 3:2 image split EXACTLY into four 768x512 independent artwork quadrants in a regular 2x2 grid, no gutters, no labels or text. Gloriously tacky glittery 2012 Russian family chat photo collage style, crisp photographic animals and elaborate saturated art backgrounds. TOP LEFT: a stern fluffy tabby little cat in a deep burgundy postal uniform hat and jacket, stamping an envelope with an oversized red wooden rubber stamp at a telegram counter, turquoise and vermillion palette, a few golden sparkles and heart shapes. TOP RIGHT: an opaque large cherry-red enamel cooking pot with white polka dots, fully CLOSED with its matching red lid, on stove, quaint retro pink kitchen with purple and gold glitter and a blue tea towel, humorously suspenseful, pot fully visible and centered. BOTTOM LEFT: same cherry-red white polka-dot pot in same retro pink glitter kitchen, same centered framing, but the lid tipped back and a ridiculously serious gray pigeon wearing a tiny red chef toque peeks up through steam and sparkles. BOTTOM RIGHT: a long-haired cat with a funny elaborate black vampire cape and high collar and stern face, extending an old-fashioned sealed cream envelope, surrounded by overdone pink roses and pink glitter on dark purple vintage background, no text. All four quadrants full bleed, clean straight boundaries at exactly 50% x and y, no letters, no numbers, no logos.

</details>

## Иллюстрации v1.5

16 рисунков созданы встроенным ImageGen. Файлы лежат в папке `assets` внутри архива и распределены по четырём частям суток.

<details>
<summary>Котёнок с блинами, капибара, лисёнок, ёжик</summary>

> Create one landscape 3:2 sheet, ideally 1536x1024, of EXACTLY four independent full-bleed postcard illustrations in a perfectly regular 2x2 grid. Hard cuts precisely at horizontal and vertical center, no margins, no gutters, no border or elements crossing tiles. Each tile is a complete 3:2 image and must make sense after cropping. Main animals large, centered and immediately recognizable on a small card. No text, numerals, logos or watermark. Cohesive lovingly detailed vintage storybook gouache, painterly grain and expressive animals. TOP LEFT morning: sleepy ginger kitten stretching beside blueberry pancakes, sunlit pale blue kitchen, warm golden sun rays, lavender and honey. TOP RIGHT day: smiling capybara halfway immersed in a bath with slices of orange, with a small yellow rubber duck floating beside it, sunny greenhouse, citrus and jade. BOTTOM LEFT evening: tiny red fox crocheting a scarf by a rainy window with a steaming ceramic mug and lamp, amber and wet blue. BOTTOM RIGHT night: a hedgehog asleep under a patchwork quilt beside a small mushroom nightlight, moonlit woodland bedroom, navy and sleepy lilac.

</details>

<details>
<summary>Кот с будильником, хомяк, енот, кот с сачком</summary>

> Create one landscape 3:2 sheet, ideally 1536x1024, of EXACTLY four independent full-bleed postcard illustrations in a perfectly regular 2x2 grid. Hard cuts precisely at horizontal and vertical center, no margins, no gutters, no border or elements crossing tiles. Each tile is a complete 3:2 image and must make sense after cropping. Main animals large, centered and immediately recognizable on a small card. No text, numerals, logos or watermark. Gloriously tacky early-2010s greeting-card photomontage, stern realistic animals, campy sparkles, shiny rich color, no printed lettering. TOP LEFT morning: a fluffy gray cat dismissively pressing an oversized red button atop a clock radio, robe and bedhead fur, strong coral-and-turquoise sunrise bedroom. TOP RIGHT day: a small round hamster in a business tie and miniature reading glasses holding an enormous sesame bagel at an office conference table, saturated blue and apricot radial glitter. BOTTOM LEFT evening: a fat raccoon in a spa headband with cucumber slices on its eyes and a fluffy robe, reclining with a cup of tea at a pink-purple glitter spa. BOTTOM RIGHT night: fluffy black cat dressed as a sleepy wizard trying to catch a shiny moon in a butterfly net, deep indigo cosmos, purple and gold stardust.

</details>

<details>
<summary>Кролик с зонтом, щенок, мышка, кролик с телескопом</summary>

> Create one landscape 3:2 sheet, ideally 1536x1024, of EXACTLY four independent full-bleed postcard illustrations in a perfectly regular 2x2 grid. Hard cuts precisely at horizontal and vertical center, no margins, no gutters, no border or elements crossing tiles. Each tile is a complete 3:2 image and must make sense after cropping. Main animals large, centered and immediately recognizable on a small card. No text, numerals, logos or watermark. Hand-painted vintage gouache, affectionate small still-life details, varied cinematic lighting. TOP LEFT morning: small white rabbit in a yellow raincoat carrying a red umbrella under gentle sunshower among poppies and daisies, mint green with warm sun. TOP RIGHT day: a curious shaggy cream puppy on a picnic blanket showing a little vase of daisies, blue sky and sunny green meadow, buttery yellow and sky blue. BOTTOM LEFT evening: tiny dormouse sitting on a book and reading a miniature open book by an amber lantern inside a warm bookshop, through the window a muted mauve sunset. BOTTOM RIGHT night: floppy-eared white rabbit with a soft sage blanket watching shooting stars from a windowsill and holding a little brass telescope; calm blue-violet moonlight, tiny stars and lace.

</details>

<details>
<summary>Кот с тостом, утёнок, кот с кубком, голубь-диспетчер</summary>

> Create one landscape 3:2 sheet, ideally 1536x1024, of EXACTLY four independent full-bleed postcard illustrations in a perfectly regular 2x2 grid. Hard cuts precisely at horizontal and vertical center, no margins, no gutters, no border or elements crossing tiles. Each tile is a complete 3:2 image and must make sense after cropping. Main animals large, centered and immediately recognizable on a small card. No text, numerals, logos or watermark. Gloriously impractical and endearing early-2010s Slavic family chat greeting-card photo collages with glossy glitter and serious photoreal animal faces. TOP LEFT morning: a grumpy fluffy cream cat in a tiny crown looming over an enormous breakfast toast with raspberry jam, coronation sunrise and overdone gold rays, crimson plus gold. TOP RIGHT day: serious fluffy duckling in a neon-orange crossing-guard vest protecting a single cookie on a small traffic cone, bold sunny lemon and teal setting, a gigantic shiny pastry in the distance. BOTTOM LEFT evening: long-haired cat with a big burgundy bow tie hosting a mock awards show and displaying a giant gold trophy shaped like a house slipper, red stage curtains, gold stars and gleaming magenta. BOTTOM RIGHT night: stern moonlit gray pigeon in a blue officer cap sitting at an old switchboard holding a fluffy feather pillow behind an old style telephone, cyan-magenta galaxy and midnight blue glitter.

</details>

