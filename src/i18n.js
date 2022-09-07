import { createI18n } from "vue-i18n";

function loadlanguage() {
  if (localStorage.getItem("language") === null)
    localStorage.setItem("language", process.env.VUE_APP_I18N_LOCALE);
  return process.env.VUE_APP_I18N_LOCALE;
}

function secondlanguage() {
  if (localStorage.getItem("secondlanguage") === null)
    localStorage.setItem(
      "secondlanguage",
      process.env.VUE_APP_I18N_FALLBACK_LOCALE
    );
  return process.env.VUE_APP_I18N_FALLBACK_LOCALE;
}

function loadLocaleMessages() {
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
  locale: loadlanguage(),
  fallbackLocale: secondlanguage(),
  messages: loadLocaleMessages(),
  dateTimeFormats,
});
