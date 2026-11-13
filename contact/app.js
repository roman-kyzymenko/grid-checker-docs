(function () {
    'use strict';

    var root = document.documentElement;
    var THEME_KEY = 'gc-theme';
    var APP_STORE = 'https://apps.apple.com/ua/app/grid-checker-%D0%BF%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0/id6755684764';
    var PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.rkapps.gridcheckerpl';

    // ---------- Texts ----------
    // Ukrainian is written in the HTML and read from it on load, English lives here.

    var en = {
        pageTitle: 'Grid Checker - Poltava',
        pageDescription: 'iPhone and Apple Watch widgets with power outage schedules for Poltava and the region. Developer contacts.',
        langGroup: 'Language',
        themeGroup: 'Theme',
        themeSystem: 'Match system',
        themeLight: 'Light',
        themeDark: 'Dark',
        eyebrow: 'Poltava and the region',
        heroTitle: 'Your power outage schedule, always at hand',
        heroLead: 'Widgets for iPhone, Apple Watch and Android show whether your queue has power right now, when it goes off or comes back, and the schedule for today and tomorrow.',
        ctaStore: 'Download on the App Store',
        ctaPlay: 'Google Play',
        ctaWrite: 'Contact',
        featuresTitle: 'What the app does',
        f1Title: 'Home Screen widgets',
        f1Text: 'Three sizes: power status, a timeline and the outage list for today and tomorrow.',
        f2Title: 'Lock Screen',
        f2Text: 'Whether the power is on and when it changes next, at a glance and without unlocking.',
        f3Text: 'An app, Smart Stack widgets and watch face complications.',
        f4Title: 'Any queue',
        f4Text: 'Each widget shows its own queue. Find yours by street name or number.',
        f5Title: 'Updates on its own',
        f5Text: 'The schedule refreshes every 15 minutes and as soon as it changes.',
        f6Title: 'No ads, no tracking',
        f6Text: 'No accounts, ads or analytics. Only public schedule data.',
        iphoneLead: 'Widgets follow the light and dark appearance.',
        'cap-p1': 'Small and medium widgets',
        'cap-p2': 'Large widget',
        'cap-p3': 'The app',
        watchLead: 'An app, Smart Stack widgets and complications for any watch face.',
        'cap-w1': 'Watch face with a widget and complications',
        'cap-w6': 'The watch app',
        'cap-w5': 'Timeline and Full list',
        'cap-w4': 'List in the Smart Stack',
        'cap-w3': '“Timer” and “Change time” corner complications',
        'cap-w2': 'One-line “Status” complication',
        ctaFaq: 'FAQ',
        faqTitle: 'Questions and answers',
        faqLead: 'How to add widgets, choose a queue and what to do if something doesn’t work.',
        q1: 'How do I use Home Screen widgets?',
        a1: '<ol class="steps">' +
            '<li><strong>Add widget to home screen</strong><p>Touch and hold an empty area of the home screen, tap ‘Edit’ and then ‘Add Widget’. Search for ‘Grid Checker’ and choose the widget size you prefer. Widgets can also be added to the widgets page to the left of the home screen.</p></li>' +
            '<li><strong>Select a queue</strong><p>Touch and hold the widget and tap ‘Edit Widget’. Tap ‘Черга’ and pick a queue from the list, or type your street name or queue number in the search field to find it.</p></li>' +
            '<li><strong>Add more widgets</strong><p>Each widget shows its own queue, so you can add several widgets for different addresses. The app’s main screen lists all queues your widgets are watching.</p></li>' +
            '<li><strong>View your schedule</strong><p>The widget shows the current power status and today’s outages for its queue. It updates automatically every 15 minutes and when the schedule changes.</p></li>' +
            '</ol>',
        q2: 'How do I add a widget to the Lock Screen?',
        a2: '<ol class="steps">' +
            '<li><strong>Add widget to lock screen</strong><p>Touch and hold the lock screen, tap ‘Customize’ and choose the lock screen. Tap the widget area under the clock, then select ‘Grid Checker’ from the list.</p></li>' +
            '<li><strong>Select a queue</strong><p>While customizing, tap the widget once to open the widgets list, then tap the widget again to open its settings. Tap ‘Черга’ and pick a queue or search for your street.</p></li>' +
            '<li><strong>Save changes</strong><p>Tap ‘Done’ to save. The lock screen widget shows whether power is on and the time of the current or next outage.</p></li>' +
            '</ol>',
        q3: 'How do I use the Apple Watch app?',
        a3: '<ol class="steps">' +
            '<li><strong>Install the watch app</strong><p>Grid Checker for Apple Watch comes with the iPhone app. If it isn’t on your watch yet, open the Watch app on iPhone, find Grid Checker under ‘Available Apps’ and tap ‘Install’.</p></li>' +
            '<li><strong>Choose your queue</strong><p>Open Grid Checker on the watch and pick your queue. To change it later, scroll down and tap ‘Select queue’.</p></li>' +
            '<li><strong>View your schedule</strong><p>The app shows the current power status, a timeline and all upcoming outages for today and tomorrow. Tap the round button next to the clock to load the latest schedule.</p></li>' +
            '<li><strong>Add widgets to the Smart Stack</strong><p>Turn the Digital Crown on the watch face to open the Smart Stack, touch and hold it, tap ‘+’ and find ‘Grid Checker’. Choose ‘Timeline’ for the status and a timeline, ‘List’ for the status and the next two outages, or ‘Full list’ for the next three outages. These widgets also fit the large slots of some watch faces.</p></li>' +
            '<li><strong>Add complications to the watch face</strong><p>Touch and hold the watch face, tap ‘Edit’ and swipe to the complications. Tap a slot and choose Grid Checker: ‘Timer’ shows how long until the power goes off or comes back, ‘Change time’ shows when that happens, and ‘Status’ is a single line for the top of the face. ‘Timer’ and ‘Change time’ fit round and corner slots.</p></li>' +
            '<li><strong>Choose a queue for each widget</strong><p>Every widget and complication shows its own queue. Choose it when you add one, or later by tapping it while editing the watch face or the Smart Stack.</p></li>' +
            '</ol>' +
            '<div class="note"><svg class="icon"><use href="#i-refresh"/></svg><div><strong>Keep Background App Refresh on</strong><p>Schedule updates reach the watch faster when Background App Refresh is on for Grid Checker. Turn it on both on iPhone and on the watch, in Settings › General › Background App Refresh. With it off, the app and widgets still update, but less often.</p></div></div>',
        q4: 'Apple Watch face or Smart Stack widgets aren’t updating',
        a4: '<p>Open Grid Checker on the watch and tap the round refresh button next to the clock once. The app loads the latest schedule, and the widgets and complications update with it.</p>' +
            '<p>To keep updates arriving on time, make sure Background App Refresh is on for Grid Checker on both iPhone and the watch: Settings › General › Background App Refresh.</p>',
        q5: 'How do I get notified about schedule changes or before the power goes off?',
        a5: '<p>For reliability reasons, the app doesn’t send notifications: the system doesn’t guarantee they arrive on time, and a late warning about a power outage could let you down.</p>' +
            '<p>For notifications, use the Telegram bot <a href="https://t.me/poltava_light_bot" target="_blank" rel="noopener">@poltava_light_bot</a>. It tells you when your queue’s schedule changes and warns you 10 minutes before the power goes off.</p>',
        contactTitle: 'Get in touch',
        contactLead: 'Have a question, found a bug or have an idea? Write to me.',
        emailLabel: 'Email',
        copy: 'Copy',
        copied: 'Copied',
        botLabel: 'Telegram bot',
        policyLabel: 'Privacy Policy',
        policyValue: 'What data the app handles',
        disclaimer: 'Data in the app comes from public sources, including the website of JSC “POLTAVAOBLENERGO”: <a href="https://www.poe.pl.ua/disconnection/power-outages/" target="_blank" rel="noopener">poe.pl.ua</a>. This app is not affiliated with, endorsed by, or representing any government body. Information provided through this app is for general reference only and should not be considered official or authoritative. For official information, please contact JSC “POLTAVAOBLENERGO”.'
    };

    var uk = {
        pageTitle: document.title,
        pageDescription: metaContent('description'),
        langGroup: 'Мова',
        themeGroup: 'Тема',
        themeSystem: 'Як у системі',
        themeLight: 'Світла',
        themeDark: 'Темна',
        copy: 'Скопіювати',
        copied: 'Скопійовано'
    };
    each('[data-i18n]', function (el) { uk[el.dataset.i18n] = el.innerHTML; });

    var texts = { uk: uk, en: en };

    function metaContent(name) {
        var m = document.querySelector('meta[name="' + name + '"]');
        return m ? m.getAttribute('content') : '';
    }

    function each(selector, fn) {
        Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
    }

    // ---------- Language ----------
    // Ukrainian on every load unless the link asks for English (?lang=en)

    var lang = 'uk';
    try {
        if (new URLSearchParams(location.search).get('lang') === 'en') lang = 'en';
    } catch (e) {}

    function applyLanguage(next, updateUrl) {
        lang = next;
        var t = texts[lang];
        root.lang = lang;
        document.title = t.pageTitle;
        var desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute('content', t.pageDescription);

        each('[data-i18n]', function (el) {
            var v = t[el.dataset.i18n];
            if (v != null) el.innerHTML = v;
        });
        each('[data-i18n-aria]', function (el) {
            var v = t[el.dataset.i18nAria];
            if (v != null) el.setAttribute('aria-label', v);
        });
        each('[data-i18n-title]', function (el) {
            var v = t[el.dataset.i18nTitle];
            if (v != null) { el.title = v; el.setAttribute('aria-label', v); }
        });
        each('[data-lang]', function (b) {
            b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
        });

        each('[data-appstore]', function (a) { a.href = APP_STORE + '?l=' + lang; });
        each('[data-play]', function (a) { a.href = PLAY_STORE + '&hl=' + lang; });
        each('[data-policy]', function (a) { a.href = '../privacy-policy/' + lang; });

        updateScreens();

        if (updateUrl) {
            try {
                var url = new URL(location.href);
                if (lang === 'en') url.searchParams.set('lang', 'en');
                else url.searchParams.delete('lang');
                history.replaceState(null, '', url);
            } catch (e) {}
        }
    }

    // ---------- Theme ----------

    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function storedTheme() {
        try {
            var v = localStorage.getItem(THEME_KEY);
            return v === 'light' || v === 'dark' ? v : 'system';
        } catch (e) { return 'system'; }
    }

    function effectiveTheme() {
        var attr = root.getAttribute('data-theme');
        if (attr === 'light' || attr === 'dark') return attr;
        return darkQuery.matches ? 'dark' : 'light';
    }

    function applyTheme(choice, save) {
        if (choice === 'light' || choice === 'dark') root.setAttribute('data-theme', choice);
        else root.removeAttribute('data-theme');

        if (save) {
            try {
                if (choice === 'system') localStorage.removeItem(THEME_KEY);
                else localStorage.setItem(THEME_KEY, choice);
            } catch (e) {}
        }
        each('[data-theme-choice]', function (b) {
            b.setAttribute('aria-pressed', String(b.dataset.themeChoice === choice));
        });
        updateScreens();
    }

    // ---------- Screenshots follow language and theme ----------

    function updateScreens() {
        var theme = effectiveTheme();
        each('img[data-shot]', function (img) {
            var n = img.dataset.shot === 'phone'
                ? (theme === 'dark' ? img.dataset.dark : img.dataset.light)
                : img.dataset.n;
            var src = 'img/' + lang + '/' + img.dataset.shot + '-' + n + '.webp';
            if (img.getAttribute('src') !== src) img.setAttribute('src', src);
        });
    }

    // ---------- Copy email ----------

    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text); });
        }
        return legacyCopy(text);
    }

    function legacyCopy(text) {
        return new Promise(function (resolve, reject) {
            var ta = document.createElement('textarea');
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            var ok = false;
            try { ok = document.execCommand('copy'); } catch (e) {}
            document.body.removeChild(ta);
            ok ? resolve() : reject();
        });
    }

    each('[data-copy]', function (btn) {
        var timer;
        btn.addEventListener('click', function () {
            copyText(btn.dataset.copy).then(function () {
                btn.classList.add('is-done');
                btn.title = texts[lang].copied;
                btn.setAttribute('aria-label', texts[lang].copied);
                clearTimeout(timer);
                timer = setTimeout(function () {
                    btn.classList.remove('is-done');
                    btn.title = texts[lang].copy;
                    btn.setAttribute('aria-label', texts[lang].copy);
                }, 1800);
            }, function () {
                location.href = 'mailto:' + btn.dataset.copy;
            });
        });
    });

    // ---------- FAQ accordion ----------
    // Animates height on open/close, keeps one item open at a time
    // and scrolls the opened item into view. Without JS the native
    // <details name="faq"> behaviour still works.

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var faqItems = Array.prototype.slice.call(document.querySelectorAll('.faq__item'));
    var DURATION = 300;
    var EASING = 'cubic-bezier(.2, .7, .2, 1)';

    function closedHeight(item) {
        var summary = item.querySelector('summary');
        return summary.offsetHeight + (item.offsetHeight - item.clientHeight);
    }

    function runHeight(item, from, to, onDone) {
        if (item._anim) item._anim.cancel();
        if (reduceMotion.matches || !item.animate) { onDone(); return; }
        var anim = item.animate(
            { height: [from + 'px', to + 'px'] },
            { duration: DURATION, easing: EASING }
        );
        item._anim = anim;
        anim.onfinish = function () { item._anim = null; onDone(); };
        anim.oncancel = function () { if (item._anim === anim) item._anim = null; };
    }

    function openItem(item) {
        var from = item.offsetHeight;
        item.open = true;
        item._closing = false;
        var to = item.offsetHeight;

        var answer = item.querySelector('.faq__a');
        if (answer && answer.animate && !reduceMotion.matches) {
            answer.animate(
                { opacity: [0, 1], transform: ['translateY(-6px)', 'none'] },
                { duration: DURATION, easing: EASING }
            );
        }
        // Measure on the next frame, after a sibling's close has also settled
        runHeight(item, from, to, function () {
            requestAnimationFrame(function () { revealItem(item); });
        });
    }

    function closeItem(item) {
        var from = item.offsetHeight;
        item._closing = true;
        runHeight(item, from, closedHeight(item), function () {
            if (item._closing) item.open = false;
            item._closing = false;
        });
    }

    function revealItem(item) {
        var topbar = document.querySelector('.topbar');
        var top = (topbar ? topbar.offsetHeight : 0) + 12;
        var bottom = window.innerHeight - 16;
        var rect = item.getBoundingClientRect();
        var delta = 0;

        if (rect.height > bottom - top || rect.top < top) {
            delta = rect.top - top;            // too tall or hidden above: align its top
        } else if (rect.bottom > bottom) {
            delta = rect.bottom - bottom;      // cut off below: scroll just enough
        }
        if (Math.abs(delta) > 1) {
            window.scrollBy({ top: delta, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
        }
    }

    faqItems.forEach(function (item) {
        item.removeAttribute('name');          // exclusivity is handled here, with animation
        item.querySelector('summary').addEventListener('click', function (e) {
            e.preventDefault();
            var isOpen = item.open && !item._closing;
            if (isOpen) {
                closeItem(item);
            } else {
                faqItems.forEach(function (other) {
                    if (other !== item && other.open && !other._closing) closeItem(other);
                });
                openItem(item);
            }
        });
    });

    // ---------- Wire up ----------

    each('[data-lang]', function (b) {
        b.addEventListener('click', function () { applyLanguage(b.dataset.lang, true); });
    });
    each('[data-theme-choice]', function (b) {
        b.addEventListener('click', function () { applyTheme(b.dataset.themeChoice, true); });
    });

    var onSystemChange = function () { if (storedTheme() === 'system') updateScreens(); };
    if (darkQuery.addEventListener) darkQuery.addEventListener('change', onSystemChange);
    else if (darkQuery.addListener) darkQuery.addListener(onSystemChange);

    applyTheme(storedTheme(), false);
    applyLanguage(lang, false);
})();
