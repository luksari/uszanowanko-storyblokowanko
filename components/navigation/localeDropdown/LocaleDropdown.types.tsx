import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';

export type LocaleDropdownProps = {
  onLangChange: (land: I18nLanguage) => void;
};
