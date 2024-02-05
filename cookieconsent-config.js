// import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js';
let privacyPolicyLink = '/privacy';
let termsAndConditionsLink = '/terms-of-use';

function waitForClarityToBeAvailable() {
    let intervalId = setInterval(() => {
        if (typeof runClarity === 'function') {
            clearInterval(intervalId); // Stop checking once the function is found
            runClarity(); // Call the function
        }
    }, 100); // Check every 100 milliseconds
}

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
    analyticalCookiesDescription: "Mit analytischen Cookies verstehen wir, wie Sie unsere Website nutzen. Diese Daten helfen uns, Ihr Nutzererlebnis zu verbessern.",
    cookieTableCaption: 'Cookies',
    footer: `<a href="${privacyPolicyLink}">Datenschutz</a>\n<a href="${termsAndConditionsLink}">Bedingungen und Konditionen</a>`,
    // Headers
    headerName: 'Name',
    headerProvider: 'Anbieter',
    headerPurpose: 'Zweck',
    headerPrivacyPolicy: 'Datenschutzerklärung',
    headerCookieName: 'Cookie Name',
    headerDuration: 'Cookie Laufzeit',
    // Body - Google Analytics
    analyticsName: 'Google Analytics',
    analyticsProvider: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland',
    analyticsPurpose: 'Cookie von Google für Website-Analysen. Erzeugt statistische Daten darüber, wie der Besucher die Website nutzt.',
    analyticsPrivacyPolicy: 'https://policies.google.com/privacy?hl=de',
    analyticsCookieName: '_ga,_gat,_gid',
    analyticsDuration: '2 Monate',
    // Body - Google Tag Manager
    tagManagerName: 'Google Tag Manager',
    tagManagerProvider: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland',
    tagManagerPurpose: 'Cookie von Google zur Steuerung der erweiterten Script- und Ereignisbehandlung.',
    tagManagerPrivacyPolicy: 'https://policies.google.com/privacy?hl=de',
    tagManagerCookieName: '_ga,_gat,_gid',
    tagManagerDuration: '2 Jahre',
    // Body - Microsoft Clarity
    clarityName: 'Microsoft Clarity',
    clarityProvider: 'Microsoft Corporation',
    clarityPurpose: 'Clarity erfasst Interaktionen auf unserer Website, wie z.B. das Rendering der Seite und Nutzerinteraktionen wie Mausbewegungen, Klicks, Scrollen etc.',
    clarityPrivacyPolicy: 'https://<wbr/>clarity.<wbr/>microsoft.<wbr/>com/<wbr/>terms',
    clarityCookieName: '_clck, _clsk, CLID, ANONCHK, MR, MUID, SM',
    clarityDuration: '2 Jahre'
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
    cookieTableCaption: 'Cookies',
    footer: `<a href="${privacyPolicyLink}">Privacy Policy</a>\n<a href="${termsAndConditionsLink}">Terms and conditions</a>`,
    // Headers
    headerName: 'Name',
    headerProvider: 'Provider',
    headerPurpose: 'Purpose',
    headerPrivacyPolicy: 'Privacy Policy',
    headerCookieName: 'Cookie Name',
    headerDuration: 'Cookie Duration',
    // Body - Google Analytics
    analyticsName: 'Google Analytics',
    analyticsProvider: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland',
    analyticsPurpose: 'Google cookie for website analytics. Generates statistical data on how the visitor uses the website.',
    analyticsPrivacyPolicy: 'https://policies.google.com/privacy?hl=en',
    analyticsCookieName: '_ga,_gat,_gid',
    analyticsDuration: '2 months',
    // Body - Google Tag Manager
    tagManagerName: 'Google Tag Manager',
    tagManagerProvider: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland',
    tagManagerPurpose: 'Google cookie for controlling advanced script and event handling.',
    tagManagerPrivacyPolicy: 'https://policies.google.com/privacy?hl=en',
    tagManagerCookieName: '_ga,_gat,_gid',
    tagManagerDuration: '2 years',
    // Body - Microsoft Clarity
    clarityName: 'Microsoft Clarity',
    clarityProvider: 'Microsoft Corporation',
    clarityPurpose: 'Clarity captures interactions on our website, such as how the page was rendered and what interactions users perform such as mouse movements, clicks, scrolling, etc.',
    clarityPrivacyPolicy: 'https://<wbr/>clarity.<wbr/>microsoft.<wbr/>com/<wbr/>terms',
    clarityCookieName: '_clck, _clsk, CLID, ANONCHK, MR, MUID, SM',
    clarityDuration: '2 years'
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
    cookieTableCaption: 'Cookies',
    footer: `<a href="${privacyPolicyLink}">Politique de confidentialité</a>\n<a href="${termsAndConditionsLink}">Termes et conditions</a>`,
    // Headers
    headerName: 'Nom',
    headerProvider: 'Fournisseur',
    headerPurpose: 'But',
    headerPrivacyPolicy: 'Politique de confidentialité',
    headerCookieName: 'Nom du Cookie',
    headerDuration: 'Durée du Cookie',
    // Body - Google Analytics
    analyticsName: 'Google Analytics',
    analyticsProvider: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande',
    analyticsPurpose: 'Cookie de Google pour les analyses de sites Web. Génère des données statistiques sur la manière dont le visiteur utilise le site Web.',
    analyticsPrivacyPolicy: 'https://policies.google.com/privacy?hl=fr',
    analyticsCookieName: '_ga,_gat,_gid',
    analyticsDuration: '2 mois',
    // Body - Google Tag Manager
    tagManagerName: 'Google Tag Manager',
    tagManagerProvider: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande',
    tagManagerPurpose: 'Cookie de Google pour la gestion des scripts avancés et le traitement des événements.',
    tagManagerPrivacyPolicy: 'https://policies.google.com/privacy?hl=fr',
    tagManagerCookieName: '_ga,_gat,_gid',
    tagManagerDuration: '2 ans',
    // Body - Microsoft Clarity
    clarityName: 'Microsoft Clarity',
    clarityProvider: 'Microsoft Corporation',
    clarityPurpose: 'Clarity capture les interactions sur notre site Web, telles que la manière dont la page a été rendue et les interactions effectuées par les utilisateurs, telles que les mouvements de la souris, les clics, le défilement, etc.',
    clarityPrivacyPolicy: 'https://<wbr/>clarity.<wbr/>microsoft.<wbr/>com/<wbr/>terms',
    clarityCookieName: '_clck, _clsk, CLID, ANONCHK, MR, MUID, SM',
    clarityDuration: '2 ans'
};

function generateTranslationObjectForLang(langObj) {
    return {
        consentModal: {
            title: langObj.consentModalTitle,
            description: langObj.consentModalDescription,
            acceptAllBtn: langObj.acceptAllBtn,
            acceptNecessaryBtn: langObj.acceptNecessaryBtn,
            showPreferencesBtn: langObj.showPreferencesBtn,
            footer: langObj.footer
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
                    linkedCategory: "analytics",
                    cookieTable: {
                        cookieTableCaption: langObj.cookieTableCaption,
                        headers: {
                            name: langObj.headerName,
                            provider: langObj.headerProvider,
                            purpose: langObj.headerPurpose,
                            privacyPolicy: langObj.headerPrivacyPolicy,
                            cookieName: langObj.headerCookieName,
                            duration: langObj.headerDuration,
                        },
                        body: [
                            {
                                name: langObj.clarityName,
                                provider: langObj.clarityProvider,
                                purpose: langObj.clarityPurpose,
                                privacyPolicy: langObj.clarityPrivacyPolicy,
                                cookieName: langObj.clarityCookieName,
                                duration: langObj.clarityDuration,
                            }
                            // {
                            //     name: langObj.analyticsName,
                            //     provider: langObj.analyticsProvider,
                            //     purpose: langObj.analyticsPurpose,
                            //     privacyPolicy: langObj.analyticsPrivacyPolicy,
                            //     cookieName: langObj.analyticsCookieName,
                            //     duration: langObj.analyticsDuration,
                            // },
                            // {
                            //     name: langObj.tagManagerName,
                            //     provider: langObj.tagManagerProvider,
                            //     purpose: langObj.tagManagerPurpose,
                            //     privacyPolicy: langObj.tagManagerPrivacyPolicy,
                            //     cookieName: langObj.tagManagerCookieName,
                            //     duration: langObj.tagManagerDuration,
                            // },
                        ]
                    }
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
        analytics: {
            autoClear: {
                cookies: [
                    // {
                    //     name: /^_ga/,   // regex: match all cookies starting with '_ga'
                    // },
                    {
                        name: /(_clck|_clsk|CLID|ANONCHK|MR|MUID|SM)/,   // regex for Microsoft Clarity cookies
                    },
                ]
            },
            services: {
                clarity: {
                    label: 'Microsoft Clarity',
                    onAccept: () => {waitForClarityToBeAvailable();},
                    onRevoke: () => {}
                }
            }
        }
    },
    language: {
        default: "de",
        autoDetect: "document",
        translations: {
            de: generateTranslationObjectForLang(de),
            en: generateTranslationObjectForLang(en),
            fr: generateTranslationObjectForLang(fr)
        }
    }
}

CookieConsent.run(settings);