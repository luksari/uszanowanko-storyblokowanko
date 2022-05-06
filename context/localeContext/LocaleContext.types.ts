import {ReactNode} from "react";
import {SbLanguage} from "@/lib/storyblok/storyblok.types";

export type LocaleContextState = {
  locale: SbLanguage;
  alternativeSlugs: AlternativeSlugs | null;
};

export type AlternativeSlugs = Record<SbLanguage, string>;

export type LocaleContextControllerProps = {
  children: ReactNode;
} & LocaleContextState;

export enum I18nLocale {
  Pl = 'pl',
  Es = 'es',
  En = 'en',
}