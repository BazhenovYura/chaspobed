/**
 * Единственный источник ссылок на Telegram.
 *
 * Чтобы переключить сайт на нового бота (или обратно), правится только этот файл.
 * Метка `?start=site` в ссылке на бота нужна, чтобы бот знал, что участник пришёл с сайта,
 * и записал это в поле source.
 */

export const TELEGRAM_BOT_USERNAME = 'neurotrener_bot';

/** Ссылка на бота с меткой источника перехода */
export const TELEGRAM_BOT_URL = `https://t.me/${TELEGRAM_BOT_USERNAME}?start=site`;

/** Ссылка на группу клуба */
export const TELEGRAM_GROUP_URL = 'https://t.me/chaspobed';

/** Как показывать бота в тексте */
export const TELEGRAM_BOT_MENTION = `@${TELEGRAM_BOT_USERNAME}`;
