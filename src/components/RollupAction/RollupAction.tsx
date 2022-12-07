import React, { ForwardedRef, useState } from 'react';
import { useThemeProps } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { RollupActionProps } from './RollupAction.types';
import RollupActionStyled, { RollupButton } from './RollupAction.styled';
import { DropdownMenu } from '../DropdownMenu';

const RollupAction = React.forwardRef(
  (inProps: RollupActionProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESRollupAction' });

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const { actions = [], sections = [] } = props;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <RollupActionStyled ref={ref}>
        <RollupButton onClick={handleClick} data-testid="rollup-btn">
          <MoreHorizRoundedIcon />
        </RollupButton>
        <DropdownMenu
          open={false}
          sections={[{ items: actions }, ...sections]}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={handleClose}
        />
      </RollupActionStyled>
    );
  },
);

export default RollupAction;
