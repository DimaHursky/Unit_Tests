import React from 'react';
import { CallbackAction, LinkAction } from '../Breadcrumb';
import { PrimaryActionProps } from '../PrimaryAction';

export type PageProps = {
  children?: React.ReactNode;
  divider?: boolean;
  title?: string;
  subtitle?: string;
  titleMetadata?: React.ReactNode;
  breadcrumbs?: (CallbackAction | LinkAction)[];
  additionalMetadata?: string;
  primaryAction?: PrimaryActionProps;
  secondaryActions?: Action[];
  actionGroups?: GroupAction[];
};

export type PageContentProps = {
  divider?: string;
};

export type Action = {
  id?: string;
  content?: string;
  accessibilityLabel?: string;
  onAction?: () => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export type GroupAction = {
  title: string;
  actions: Action[];
  disabled?: boolean;
};

export type PageHeaderLeftAlignProps = {
  breadcrumb?: string;
};
