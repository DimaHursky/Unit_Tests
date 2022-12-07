import React, { useCallback, useState } from 'react';
import { Box, useThemeProps } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import clsx from 'clsx';
import { ResourceItemProps } from './ResourceItem.types';
import ResourceItemStyled, {
  ResourceItemWrapper,
  ResourceItemButton,
  ResourceItemContainer,
  ResourceItemOwned,
  ResourceItemContent,
  ResourceItemDisclosure,
  ResourceItemMedia,
  ResourceItemHandle,
} from './ResourceItem.styled';
import { ESButton } from '../ESButton';
import { DropdownMenu } from '../DropdownMenu';
import { ESCheckbox } from '../ESCheckbox';

const ResourceItem = (inProps: ResourceItemProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESResourceItem' });

  const {
    id,
    media,
    children,
    url,
    onClick,
    external,
    shortcutActions = [],
    persistActions = false,
    selectable = false,
    isSelected = false,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [checked, setChecked] = useState(isSelected);
  const resourceItemClasses = clsx({ selected: checked });

  const handleChange = (newChecked: boolean) => setChecked(newChecked);

  const handleDisclosureClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDisclosureClose = () => {
    setAnchorEl(null);
  };

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
      e.stopPropagation();
      const anchor = e.currentTarget.querySelector('a');
      if (typeof onClick === 'function') {
        onClick(id);
      }

      if (url && anchor) {
        anchor.click();
      }
    },
    [onClick, id, url],
  );

  const mediaMarkup = (
    <ResourceItemOwned>
      {selectable && (
        <ResourceItemHandle onClick={(e) => e.stopPropagation()}>
          <ESCheckbox checked={checked} onChange={handleChange} />
        </ResourceItemHandle>
      )}
      {media && <ResourceItemMedia>{media}</ResourceItemMedia>}
    </ResourceItemOwned>
  );

  const accessibleMarkup = url ? (
    <ResourceItemButton
      as="a"
      href={url}
      {...{ target: external ? '_blank' : '_self' }}
    />
  ) : (
    <ResourceItemButton onClick={(e) => handleClick(e)} />
  );

  const disclosureMarkup = (
    <ResourceItemDisclosure onClick={(e) => e.stopPropagation()}>
      <ESButton
        variant="text"
        onClick={handleDisclosureClick}
        sx={{ margin: 0 }}
      >
        <MoreHorizRoundedIcon />
      </ESButton>
      <DropdownMenu
        open={false}
        sections={[{ items: shortcutActions }]}
        anchorEl={anchorEl}
        onClose={handleDisclosureClose}
      />
    </ResourceItemDisclosure>
  );

  return (
    <ResourceItemStyled>
      <ResourceItemWrapper className={resourceItemClasses}>
        <Box onClick={(e) => handleClick(e)}>
          {accessibleMarkup}
          <ResourceItemContainer id={id}>
            {(media || selectable) && mediaMarkup}
            {children && <ResourceItemContent>{children}</ResourceItemContent>}
            {shortcutActions && persistActions && disclosureMarkup}
          </ResourceItemContainer>
        </Box>
      </ResourceItemWrapper>
    </ResourceItemStyled>
  );
};

export default ResourceItem;
