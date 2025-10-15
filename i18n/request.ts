import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Carrega todos os JSONs do idioma atual
  const modules = await Promise.all([
    import(`../locales/${locale}/Layout.json`),
    import(`../locales/${locale}/About.json`),
    import(`../locales/${locale}/Skills.json`),
    import(`../locales/${locale}/Projects.json`)
  ]);

  const messages = Object.assign({}, ...modules.map(m => m.default));

  return { locale, messages };
});
