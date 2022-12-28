import React, { ForwardedRef } from 'react';
import { Divider, useThemeProps } from '@mui/material';
import { ActionListProps, ItemsType, SectionsType } from './ActionList.types';
import ActionListStyled, {
  ActionItemStyled,
  ActionListWrapperStyled,
  IconItemStyled,
  SectionTitleStyled,
} from './ActionList.styled';

const Action = ({
  item,
  children,
}: {
  item: ItemsType;
  children?: React.ReactNode;
}) => (
  <li>
    {item.url ? (
      <ActionItemStyled
        as="a"
        onClick={item.onAction}
        {...{ href: item.url, target: item.external ? '_blank' : '_self' }}
      >
        {children}
      </ActionItemStyled>
    ) : (
      <ActionItemStyled onClick={item.onAction}>{children}</ActionItemStyled>
    )}
  </li>
);

const ItemsList = ({ items }: { items: ItemsType[] }) => (
  <ActionListStyled>
    {items.map((item: ItemsType) => (
      <Action item={item} key={item.content}>
        {item.icon && <IconItemStyled type="icon">{item.icon}</IconItemStyled>}
        {item.content}
        {item.suffix && (
          <IconItemStyled type="prefix">{item.suffix}</IconItemStyled>
        )}
      </Action>
    ))}
  </ActionListStyled>
);
const ActionList = React.forwardRef(
  (inProps: ActionListProps, ref: ForwardedRef<HTMLUListElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESuiActionList' });

    const { items, sections } = props;

    return (
      <ActionListWrapperStyled ref={ref} data-testid="ActionList">
        {items && <ItemsList items={items} />}
        {sections?.map((section: SectionsType, idx: number) => (
          <div key={section.title || idx} tabIndex={-1}>
            {section.title && (
              <SectionTitleStyled>{section.title}</SectionTitleStyled>
            )}
            {(!!section.title || !!idx) && <Divider />}
            {section.items && <ItemsList items={section.items} />}
          </div>
        ))}
      </ActionListWrapperStyled>
    );
  },
);

export default ActionList;
