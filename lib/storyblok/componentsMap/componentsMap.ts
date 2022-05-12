import { SmallIllustrationTextGrid } from '@/sbComponents/smallIllustrationTextGrid/SmallIllustrationTextGrid';
import { SectionTitle } from '@/sbComponents/sectionTitle/SectionTitle';
import { SbComponentsMap } from '@/lib/storyblok/storyblok.types';
import { ModuleTextLineSeparator } from '@/sbComponents/moduleTextLineSeparator/ModuleTextLineSeparator';
import { ModuleButton } from '@/sbComponents/moduleButton/ModuleButton';
import { ModuleIconGrid } from '@/sbComponents/moduleIconGrid/ModuleIconGrid';
import { IllustrationTextSection } from '@/sbComponents/illustrationTextSection/IllustrationTextSection';
import { CTA } from '@/sbComponents/cta/CTA';
import { Spacing } from '@/sbComponents/spacing/Spacing';
import { MyNewModule } from '@/sbComponents/myNewModule/MyNewModule';
import { HeaderBasic } from '@/sbComponents/headerBasic/HeaderBasic';

/** This is the map of Storyblok technical names with corresponding React component */
export const sbRootComponents: SbComponentsMap = {
  'header-basic': HeaderBasic,
  'section-title': SectionTitle,
  'small-illustration-text-grid': SmallIllustrationTextGrid,
  'module-text-line-separator': ModuleTextLineSeparator,
  'module-button': ModuleButton,
  'module-icon-grid': ModuleIconGrid,
  'illustration-text-section': IllustrationTextSection,
  spacing: Spacing,
  cta: CTA,
  /** Only for example cases, if you don't need it you can freely remove it */
  'my-new-module': MyNewModule,
};
