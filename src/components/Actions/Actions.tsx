import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useThemeProps } from '@mui/material';
import { ActionsProps, MeasuredActions } from './Actions.types';
import ActionsStyled, { ButtonGroup } from './Actions.styled';
import { MenuGroup } from '../MenuGroup';
import { ActionGroup } from '../ActionMenu';
import { ItemsType, SectionsType } from '../ActionList';
import { SecondaryAction } from '../SecondaryAction';

const ACTION_SPACING = 8;

function isMenuGroup(
  actionOrMenuGroup: ActionGroup | ItemsType,
): actionOrMenuGroup is ActionGroup {
  return 'title' in actionOrMenuGroup;
}

const Actions = (inProps: ActionsProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESActions' });
  const { actions = [], groups = [] } = props;

  const actionWidthsRef = useRef<number[]>([]);
  const actionsLayoutRef = useRef<HTMLDivElement>(null);
  const availableWidthRef = useRef<number>(0);
  const menuGroupWidthRef = useRef<number>(0);
  const actionsAndGroupsLengthRef = useRef<number>(0);
  const timesMeasured = useRef(0);

  const [measuredActions, setMeasuredActions] = useState<MeasuredActions>({
    showable: [],
    rolledUp: [],
  });
  const defaultRollupGroup: ActionGroup = {
    title: 'More actions',
    actions: [],
  };
  const lastMenuGroup = [...groups].pop();
  const lastMenuGroupWidth = [...actionWidthsRef.current].pop() || 0;

  const handleActionsOffsetWidth = useCallback((width: number) => {
    actionWidthsRef.current = [...actionWidthsRef.current, width];
  }, []);

  const updateActions = useCallback(() => {
    let actionsAndGroups = [...actions, ...groups];

    if (groups.length > 0) {
      // We don't want to include actions from the last group
      // since it is always rendered with its own actions
      actionsAndGroups = [...actionsAndGroups].slice(
        0,
        actionsAndGroups.length - 1,
      );
    }

    setMeasuredActions((currentMeasuredActions) => {
      const showable = actionsAndGroups.slice(
        0,
        currentMeasuredActions.showable.length,
      );
      const rolledUp = actionsAndGroups.slice(
        currentMeasuredActions.showable.length,
        actionsAndGroups.length,
      );

      return { showable, rolledUp };
    });
  }, [actions, groups]);

  const measureActions = useCallback(() => {
    if (
      actionWidthsRef.current.length === 0 ||
      availableWidthRef.current === 0
    ) {
      return;
    }

    const actionsAndGroups = [...actions, ...groups];

    if (actionsAndGroups.length === 1) {
      setMeasuredActions({ showable: actionsAndGroups, rolledUp: [] });
      return;
    }

    let currentAvailableWidth = availableWidthRef.current;
    let newShowableActions: ItemsType[] = [];
    let newRolledUpActions: (ItemsType | ActionGroup)[] = [];

    actionsAndGroups.forEach((action, index) => {
      const canFitAction =
        actionWidthsRef.current[index] +
          menuGroupWidthRef.current +
          ACTION_SPACING +
          lastMenuGroupWidth <=
        currentAvailableWidth;

      if (canFitAction) {
        currentAvailableWidth -=
          actionWidthsRef.current[index] + ACTION_SPACING * 2;
        newShowableActions = [...newShowableActions, action];
      } else {
        currentAvailableWidth = 0;
        // Find last group if it exists and always render it as a rolled up action below
        if (action === lastMenuGroup) return;
        newRolledUpActions = [...newRolledUpActions, action];
      }
    });

    setMeasuredActions({
      showable: newShowableActions,
      rolledUp: newRolledUpActions,
    });

    timesMeasured.current += 1;
    actionsAndGroupsLengthRef.current = actionsAndGroups.length;
  }, [actions, groups, lastMenuGroup, lastMenuGroupWidth]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!actionsLayoutRef.current) return;

    const observer = new ResizeObserver(() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (actionsLayoutRef.current) {
          availableWidthRef.current = actionsLayoutRef.current.offsetWidth;
          timesMeasured.current = 0;
          measureActions();
        }
      }, 10);
    });

    observer.observe(actionsLayoutRef.current);

    // eslint-disable-next-line consistent-return
    return () => {
      if (actionsLayoutRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(actionsLayoutRef.current);
      }
    };
  }, [measureActions]);

  useLayoutEffect(() => {
    if (!actionsLayoutRef.current) return;

    availableWidthRef.current = actionsLayoutRef.current.offsetWidth;

    if (
      // Allow measuring twice
      // This accounts for the initial paint and re-flow
      timesMeasured.current >= 2 &&
      [...actions, ...groups].length === actionsAndGroupsLengthRef.current
    ) {
      updateActions();
      return;
    }
    measureActions();
  }, [actions, groups, measureActions, updateActions]);

  const actionsMarkup = actions.map((action) => {
    if (
      measuredActions.showable.length > 0 ||
      measuredActions.rolledUp.includes(action)
    )
      return null;

    const { content, onAction, ...rest } = action;

    return (
      <SecondaryAction
        key={content}
        onAction={onAction}
        {...rest}
        getOffsetWidth={handleActionsOffsetWidth}
      >
        {content}
      </SecondaryAction>
    );
  });

  const rollUppableActionsMarkup =
    measuredActions.showable.length > 0
      ? measuredActions.showable.map(
          (action) =>
            action.content && (
              <SecondaryAction
                key={action.content}
                {...action}
                getOffsetWidth={handleActionsOffsetWidth}
              >
                {action.content}
              </SecondaryAction>
            ),
        )
      : null;

  const filteredGroups = [...groups, defaultRollupGroup].filter((group) =>
    groups.length === 0
      ? group
      : group === lastMenuGroup ||
        !measuredActions.rolledUp.some(
          (rolledUpGroup) =>
            isMenuGroup(rolledUpGroup) && rolledUpGroup.title === group.title,
        ),
  );

  const groupsMarkup = filteredGroups.map((group) => {
    const { title, actions: groupActions } = group;
    const isDefaultGroup = group === defaultRollupGroup;
    const isLastMenuGroup = group === lastMenuGroup;
    const [finalRolledUpActions, finalRolledUpSectionGroups] =
      measuredActions.rolledUp.reduce(
        ([mActions, sections], action) => {
          if (isMenuGroup(action)) {
            sections.push({
              title: action.title,
              items: action.actions.map((sectionAction) => ({
                ...sectionAction,
                disabled: action.disabled || sectionAction.disabled,
              })),
            });
          } else {
            mActions.push(action);
          }

          return [mActions, sections];
        },
        [[] as ItemsType[], [] as SectionsType[]],
      );
    if (!isDefaultGroup && !isLastMenuGroup) {
      // Render a normal MenuGroup with just its actions
      return (
        <MenuGroup
          key={title}
          title={title}
          actions={groupActions}
          getOffsetWidth={handleActionsOffsetWidth}
        />
      );
    }
    if (!isDefaultGroup && isLastMenuGroup) {
      // render the last, rollup group with its actions and finalRolledUpActions
      return (
        <MenuGroup
          key={title}
          title={title}
          actions={[...finalRolledUpActions, ...groupActions]}
          sections={finalRolledUpSectionGroups}
          getOffsetWidth={handleActionsOffsetWidth}
        />
      );
    }
    if (isDefaultGroup && groups.length === 0 && finalRolledUpActions.length) {
      // Render the default group to rollup into if one does not exist
      return (
        <MenuGroup
          key={title}
          title={title}
          actions={finalRolledUpActions}
          sections={finalRolledUpSectionGroups}
          getOffsetWidth={handleActionsOffsetWidth}
        />
      );
    }
    return null;
  });

  return (
    <ActionsStyled ref={actionsLayoutRef} data-testid="actions">
      <ButtonGroup>
        {rollUppableActionsMarkup}
        {actionsMarkup}
        {groupsMarkup}
      </ButtonGroup>
    </ActionsStyled>
  );
};

export default Actions;
