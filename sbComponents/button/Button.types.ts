import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ThemedCssFunction } from 'styled-components';

import { SbEditableComponent, SbTargetLink } from 'lib/storyblok/storyblok.types';
import { Theme } from 'theme/theme';

export type SbButtonLinkConfig = {
  target?: SbTargetLink;
  content: string;
  variant: ButtonVariant;
};

export type SbButtonConfig = {
  content: string;
  variant: ButtonVariant;
};

export enum ButtonVariant {
  Blue = 'blue',
  Green = 'green',
  White = 'white',
}
/** @TODO When merged into dev in next PR change 'button-raw' to 'button' and make 'button-link' the only option for link*/
export type AllowedBtnLinkComponent = 'button-link' | 'button';
export type AllowedBtnRawComponent = 'button-raw';

export type ButtonLinkProps = SbEditableComponent<'button-link', SbButtonLinkConfig, AllowedBtnLinkComponent>;
export type SbButtonProps = SbEditableComponent<'button-raw', SbButtonConfig, AllowedBtnRawComponent> & {
  css: ThemedCssFunction<Theme>;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  css?: ThemedCssFunction<Theme>;
  className?: string;
  variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
};
