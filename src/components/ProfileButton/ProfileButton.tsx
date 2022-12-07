import React, { ForwardedRef } from 'react';
import { Box, Skeleton, Stack, useThemeProps } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ProfileButtonProps } from './ProfileButton.types';
import ProfileButtonStyled, {
  ProfileButtonWrapperStyled,
  ProfileDetailDataStyled,
  ProfileNameDetail,
  ProfileNameStyled,
} from './ProfileButton.styled';
import { DropdownMenu } from '../DropdownMenu';
import { ESAvatar } from '../ESAvatar';

const ProfileSkeleton = () => (
  <Stack
    spacing={1}
    direction="row"
    alignItems="center"
    sx={{ minWidth: '10rem', margin: '0 8px' }}
  >
    <Box>
      <Skeleton variant="circular" width="2rem" height="2rem" />
    </Box>
    <Skeleton variant="text" width="100%" />
  </Stack>
);

const ProfileButton = React.forwardRef(
  (inProps: ProfileButtonProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESProfileButton' });

    const { actions, name, avatar, initials, open = false } = props;

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
      null,
    );
    const logout = {
      items: [
        {
          content: 'Logout',
          onAction: () => console.log('Logout'),
          icon: <ArrowBackIcon fontSize="small" />,
        },
      ],
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return !name ? (
      <ProfileSkeleton />
    ) : (
      <ProfileButtonWrapperStyled ref={ref}>
        <ProfileButtonStyled
          onClick={handleClick}
          aria-expanded={Boolean(anchorEl)}
          data-testid="profile-btn"
        >
          <ESAvatar src={avatar} initials={initials} name={name} />
          <ProfileDetailDataStyled>
            <ProfileNameStyled> {name}</ProfileNameStyled>
            {/* <ProfileNameDetail>{detail}</ProfileNameDetail> */}
          </ProfileDetailDataStyled>
        </ProfileButtonStyled>
        <DropdownMenu
          open={open}
          sections={[logout, ...actions]}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{ top: '0.5rem' }}
        />
      </ProfileButtonWrapperStyled>
    );
  },
);

export default ProfileButton;
