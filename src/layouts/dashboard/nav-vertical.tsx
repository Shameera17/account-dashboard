import type { Breakpoint } from '@mui/material/styles';
import type { NavSectionProps } from 'src/components/nav-section';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { varAlpha, hideScrollY } from 'src/theme/styles';

import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';
import { navSectionClasses, NavSectionMini, NavSectionVertical } from 'src/components/nav-section';

import { NavUpgrade } from '../components/nav-upgrade';
import { NavToggleButton } from '../components/nav-toggle-button';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export type NavVerticalProps = NavSectionProps & {
  isNavMini: boolean;
  layoutQuery: Breakpoint;
  onToggleNav: () => void;
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
};

export function NavVertical({
  sx,
  data,
  slots,
  isNavMini,
  layoutQuery,
  onToggleNav,
  ...other
}: NavVerticalProps) {
  const theme = useTheme();

  // const renderNavVertical = (
  //   <>
  //     {slots?.topArea ?? (
  //       <Box sx={{ pl: 3.5, pt: 2.5, pb: 1 }}>
  //         <Logo />
  //       </Box>
  //     )}

  //     <Scrollbar fillContent>
  //       <NavSectionVertical data={data} sx={{ px: 2, flex: '1 1 auto' }} {...other} />

  //       {/* {slots?.bottomArea ?? <NavUpgrade />} */}
  //     </Scrollbar>
  //   </>
  // );
  const renderNavVertical = (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
      {/* Left side - Black */}
      <div
        style={{
          position: 'relative',
          height: '100%',
        }}
      >
        <div
          style={{
            width: 70,
            backgroundColor: 'black',
            height: '100%',
          }}
        ></div>
        {/* <div></div> */}
      </div>
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
        }}
      >
        <>
          {slots?.topArea ?? (
            <Box sx={{ pl: 2, pt: 2.5, pb: 1, display: 'flex', alignItems: 'center' }}>
              <Logo />{' '}
              <Typography
                variant="h1"
                style={{
                  marginLeft: 25,
                  color: '#111111',
                  fontSize: '13px',
                  fontWeight: 600,
                  lineHeight: '19.5px',
                }}
              >
                Carbon
              </Typography>
            </Box>
          )}

          <Scrollbar fillContent>
            <NavSectionVertical data={data} sx={{ px: 2, flex: '1 1 auto' }} {...other} />

            {/* {slots?.bottomArea ?? <NavUpgrade />} */}
          </Scrollbar>
        </>
      </div>
    </Box>
  );

  const renderNavMini = (
    <>
      {slots?.topArea ?? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2.5 }}>
          <Logo />
        </Box>
      )}

      <NavSectionMini
        data={data}
        sx={{ pb: 2, px: 0.5, ...hideScrollY, flex: '1 1 auto', overflowY: 'auto' }}
        {...other}
      />

      {slots?.bottomArea}
    </>
  );

  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        height: 1,
        display: 'none',
        position: 'fixed',
        flexDirection: 'column',
        bgcolor: 'var(--layout-nav-bg)',
        zIndex: 'var(--layout-nav-zIndex)',
        width: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
        borderRight: `1px solid var(--layout-nav-border-color, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)})`,
        transition: theme.transitions.create(['width'], {
          easing: 'var(--layout-transition-easing)',
          duration: 'var(--layout-transition-duration)',
        }),
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'flex',
        },
        ...sx,
      }}
    >
      <NavToggleButton
        isNavMini={isNavMini}
        onClick={onToggleNav}
        sx={{
          display: 'none',
          [theme.breakpoints.up(layoutQuery)]: {
            display: 'inline-flex',
          },
        }}
      />

      {isNavMini ? renderNavMini : renderNavVertical}
    </Box>
  );
}
