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
