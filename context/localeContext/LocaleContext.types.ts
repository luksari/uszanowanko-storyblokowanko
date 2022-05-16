import { Dispatch, ReactNode, SetStateAction } from 'react';

export type LocaleContextState = {
  locale: I18nLanguage;
  alternativeSlugs: AlternativeSlugs | null;
};

export type LocaleContextDispatch = {
  setLocale: Dispatch<SetStateAction<I18nLanguage>>;
  setAltSlugs: Dispatch<SetStateAction<AlternativeSlugs | null>>;
};

export type AlternativeSlugs = Record<I18nLanguage, string>;

export type LocaleContextControllerProps = {
  children: ReactNode;
};

export enum I18nLanguage {
  Pl = 'pl',
  Es = 'es',
  En = 'en',
}
