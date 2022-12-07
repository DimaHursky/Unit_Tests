import React, { isValidElement } from 'react';

export function isElementOfType<TProps>(
  element: React.ReactNode | null | undefined,
  Component: React.ComponentType<TProps> | React.ComponentType<TProps>[],
): boolean {
  if (
    element == null ||
    !isValidElement(element) ||
    typeof element.type === 'string'
  ) {
    return false;
  }

  const { type: defaultType } = element;
  const overrideType = element.props?.type;
  const type = overrideType || defaultType;
  const Components = Array.isArray(Component) ? Component : [Component];

  return Components.some(
    (AComponent) => typeof type !== 'string' && AComponent === type,
  );
}
