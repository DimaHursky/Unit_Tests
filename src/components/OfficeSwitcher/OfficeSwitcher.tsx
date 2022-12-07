import React from 'react';
import { Skeleton, Stack } from '@mui/material';
import OfficeSwitcherStyled, {
  OfficeSwitcherButtonStyled,
  OfficeSwitcherDetailDataStyled,
  OfficeSwitcherLogoStyled,
} from './OfficeSwitcher.styled';
import { DropdownMenu } from '../DropdownMenu';
import { useOffices } from '../../hooks';

const SwitcherSkeleton = () => (
  <Stack spacing={1} direction="row" alignItems="center">
    <Skeleton variant="rectangular" width="40px" height="40px" />
    <Skeleton variant="text" width="160px" />
  </Stack>
);

const OfficeSwitcher = () => {
  const { offices, currentOffice, changeOffice } = useOffices();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const officesOptions = offices.map((office) => ({
    content: office.title,
    icon: (
      <OfficeSwitcherLogoStyled
        sx={{ height: '1rem' }}
        src={office.logo}
        variant="square"
      />
    ),
    onAction: () => changeOffice(office.slug),
  }));

  return (
    <OfficeSwitcherStyled>
      {!currentOffice ? (
        <SwitcherSkeleton />
      ) : (
        <OfficeSwitcherButtonStyled
          onClick={handleClick}
          aria-expanded={Boolean(anchorEl)}
          data-testid="office-switcher-btn"
        >
          <OfficeSwitcherLogoStyled src={currentOffice.logo} variant="square" />
          <OfficeSwitcherDetailDataStyled>
            {currentOffice.title}
          </OfficeSwitcherDetailDataStyled>
        </OfficeSwitcherButtonStyled>
      )}

      <DropdownMenu
        open={false}
        sections={[{ items: officesOptions }]}
        anchorEl={anchorEl}
        onClose={handleClose}
      />
    </OfficeSwitcherStyled>
  );
};

export default OfficeSwitcher;
