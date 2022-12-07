import React, { ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import { ActionGroup, ActionMenuProps } from './ActionMenu.types';
import ActionMenuStyled from './ActionMenu.styled';
import { RollupAction } from '../RollupAction';
import { Actions } from '../Actions';
import { SectionsType } from '../ActionList';

function convertGroupToSection({
  title,
  actions,
  disabled,
}: ActionGroup): SectionsType {
  return {
    title,
    items: actions.map((action) => ({
      ...action,
      disabled,
    })),
  };
}

const ActionMenu = React.forwardRef(
  (inProps: ActionMenuProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESActionMenu' });

    const { actions = [], groups = [], rollupActive = false } = props;

    if (actions.length === 0 && groups.length === 0) {
      return null;
    }

    const rollupSections = groups.map((group) => convertGroupToSection(group));

    return (
      <ActionMenuStyled ref={ref} data-testid="action-menu">
        {!rollupActive ? (
          <Actions actions={actions} groups={groups} />
        ) : (
          <RollupAction actions={actions} sections={rollupSections} />
        )}
      </ActionMenuStyled>
    );
  },
);

export default ActionMenu;
