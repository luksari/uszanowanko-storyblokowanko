import pl from 'i18n/translations/default.json';
import {ReactNode} from "react";

export type Translations = typeof pl;

export type TranslatingFunction = (key: keyof Translations) => string;

export type TranslationsContextState = {
  t: TranslatingFunction;
};

export type TranslationsContextControllerProps = {
  children: ReactNode;
}
