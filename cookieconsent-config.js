// import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js';

const de = {
    consentModalTitle: "Webseitenoptimierung unterstützen",
    consentModalDescription: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Einige sind notwendig für den Betrieb der Seite, andere helfen uns, sie zu optimieren. Mit Ihrer Zustimmung unterstützen Sie unsere Webseitenoptimierung.\n",
    acceptAllBtn: "Alle akzeptieren",
    acceptNecessaryBtn: "Alle ablehnen",
    showPreferencesBtn: "Einstellungen verwalten",
    savePreferencesBtn: "Einstellungen speichern",
    preferencesModalTitle: "Präferenzen für die Zustimmung",
    closeIconLabel: "Modal schließen",
    serviceCounterLabel: "Dienstleistungen",
    necessaryCookiesTitle: "Streng Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
    necessaryCookiesDescription: "Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.",
    analyticalCookiesTitle: "Analytische Cookies",
    analyticalCookiesDescription: "Mit analytischen Cookies verstehen wir, wie Sie unsere Website nutzen. Diese Daten helfen, Ihr Nutzererlebnis zu verbessern.",
};

const en = {
    consentModalTitle: "Help us improve our website",
    consentModalDescription: "We use cookies to improve your experience. Some are necessary for the operation of the site, others help us optimize it. With your consent, you support our website optimization.\n",
    acceptAllBtn: "Accept All",
    acceptNecessaryBtn: "Reject All",
    showPreferencesBtn: "Manage Settings",
    savePreferencesBtn: "Save Settings",
    preferencesModalTitle: "Preferences for Consent",
    closeIconLabel: "Close Modal",
    serviceCounterLabel: "Services",
    necessaryCookiesTitle: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Active</span>",
    necessaryCookiesDescription: "These cookies are necessary for the basic functions of the website and cannot be deactivated.",
    analyticalCookiesTitle: "Analytical Cookies",
    analyticalCookiesDescription: "Analytical cookies help us understand how you use our website. This data helps improve your user experience.",
};

const fr = {
    consentModalTitle: "Soutenir l'optimisation des sites web",
    consentModalDescription: "Nous utilisons des cookies pour améliorer votre expérience. Certains sont nécessaires pour le fonctionnement du site, d'autres nous aident à l'optimiser. Avec votre consentement, vous soutenez notre optimisation du site Web.\n",
    acceptAllBtn: "Tout accepter",
    acceptNecessaryBtn: "Tout refuser",
    showPreferencesBtn: "Gérer les paramètres",
    savePreferencesBtn: "Enregistrer les paramètres",
    preferencesModalTitle: "Préférences pour le consentement",
    closeIconLabel: "Fermer la modale",
    serviceCounterLabel: "Services",
    necessaryCookiesTitle: "Cookies strictement nécessaires <span class=\"pm__badge\">Toujours actifs</span>",
    necessaryCookiesDescription: "Ces cookies sont nécessaires aux fonctions de base du site Web et ne peuvent pas être désactivés.",
    analyticalCookiesTitle: "Cookies analytiques",
    analyticalCookiesDescription: "Les cookies analytiques nous aident à comprendre comment vous utilisez notre site Web. Ces données aident à améliorer votre expérience utilisateur.",
};

function generateTranslationObjectForLang(langObj) {
    return {
        consentModal: {
            title: langObj.consentModalTitle,
            description: langObj.consentModalDescription,
            acceptAllBtn: langObj.acceptAllBtn,
            // acceptNecessaryBtn: langObj.acceptNecessaryBtn, // Commented out as in the original structure
            showPreferencesBtn: langObj.showPreferencesBtn,
            footer: ""
        },
        preferencesModal: {
            title: langObj.preferencesModalTitle,
            closeIconLabel: langObj.closeIconLabel,
            acceptAllBtn: langObj.acceptAllBtn,
            acceptNecessaryBtn: langObj.acceptNecessaryBtn,
            savePreferencesBtn: langObj.savePreferencesBtn,
            serviceCounterLabel: langObj.serviceCounterLabel,
            sections: [
                {
                    title: langObj.necessaryCookiesTitle,
                    description: langObj.necessaryCookiesDescription,
                    linkedCategory: "necessary"
                },
                {
                    title: langObj.analyticalCookiesTitle,
                    description: langObj.analyticalCookiesDescription,
                    linkedCategory: "analytics"
                }
            ]
        }
    };
}


let settings = {
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom right",
            equalWeightButtons: false,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: false,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "de",
        autoDetect: "browser",
        translations: {
            de: generateTranslationObjectForLang(de),
            en: generateTranslationObjectForLang(en),
            fr: generateTranslationObjectForLang(fr)
        }
    }
}


CookieConsent.run(settings);