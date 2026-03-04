import pl from './pl';
import en from './en';

export const translations = { pl, en };
export type Language = keyof typeof translations;
export const languages: Language[] = Object.keys(translations) as Language[];
