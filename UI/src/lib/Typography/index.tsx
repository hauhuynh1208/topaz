import clsx from 'clsx';
import React, { HTMLAttributes, ReactElement } from 'react';

export const TYPOGRAPHY_STYLES = {
  H1: 'text-h1 tablet:text-h1-tablet desktop:text-h1-desktop',
};
export const H1 = ({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>): ReactElement => (
  <h1 className={clsx(TYPOGRAPHY_STYLES['H1'], className)} {...props} />
);
