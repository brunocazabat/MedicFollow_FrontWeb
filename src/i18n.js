import { createI18n } from "vue-i18n";

function loadLocaleVariables() {
  localStorage.setItem("language", process.env.VUE_APP_I18N_LOCALE);
  localStorage.setItem(
    "fallbacklanguage",
    process.env.VUE_APP_I18N_FALLBACK_LOCALE
  );
}

function loadLocaleMessages() {
  loadLocaleVariables();
  const locales = require.context(
    "./assets/lang",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const setDateTimeFormats = {
  short: {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
  long: {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  },
};

const dateTimeFormats = {
  en: setDateTimeFormats,
  es: setDateTimeFormats,
  de: setDateTimeFormats,
  "en-GB": setDateTimeFormats,
};

export default createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
  messages: loadLocaleMessages(),
  dateTimeFormats,
});
