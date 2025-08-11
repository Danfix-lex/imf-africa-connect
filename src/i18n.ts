import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Minimal translation resources. You can expand these over time.
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        liveStreams: "Live Streams",
        programs: "Programs",
        leadership: "Leadership",
        duesPayment: "Dues Payment",
        dashboard: "Dashboard",
        signIn: "Sign In",
        logout: "Logout",
        language: "Language",
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        liveStreams: "Diffusions en direct",
        programs: "Programmes",
        leadership: "Direction",
        duesPayment: "Paiement des cotisations",
        dashboard: "Tableau de bord",
        signIn: "Se connecter",
        logout: "Se déconnecter",
        language: "Langue",
      },
    },
  },
  sw: {
    translation: {
      nav: {
        home: "Nyumbani",
        liveStreams: "Matangazo ya Moja kwa Moja",
        programs: "Programu",
        leadership: "Uongozi",
        duesPayment: "Malipo ya Ada",
        dashboard: "Dashibodi",
        signIn: "Ingia",
        logout: "Toka",
        language: "Lugha",
      },
    },
  },
  // Yoruba, Igbo, Hausa currently fall back to English until translations are added
  yo: { translation: { nav: {} } },
  ig: { translation: { nav: {} } },
  ha: { translation: { nav: {} } },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

// Keep <html lang> and dir in sync for SEO and accessibility
const rtlLangs = ["ar", "fa", "he", "ur"];
i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
    document.documentElement.dir = rtlLangs.includes(lng) ? "rtl" : "ltr";
  }
});

export default i18n;
