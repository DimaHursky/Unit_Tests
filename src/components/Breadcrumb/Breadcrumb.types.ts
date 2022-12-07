export type BreadcrumbProps = CallbackAction | LinkAction;

export type CallbackAction = {
  content?: string;
  onAction?: () => void;
};

export type LinkAction = {
  content?: string;
  url?: string;
};
