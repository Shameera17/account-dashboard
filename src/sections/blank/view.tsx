'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { RocketIcon } from '@radix-ui/react-icons'; // Import RocketIcon from Radix Icons

import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
};

export function BlankView({ title = 'Blank' }: Props) {
  const theme = useTheme();

  return (
    <DashboardContent maxWidth="xl">
      {/* <Typography variant="h4"> {title} </Typography> */}

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: theme.palette.background.default,
          border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RocketIcon height={40} width={40} color={theme.palette.primary.main} />{' '}
          {/* Display the RocketIcon */}
          <Typography variant="h4" sx={{ textAlign: 'center', mt: 2 }}>
            Coming Soon!
            <br />
            This page is currently under development.
          </Typography>
        </Box>
      </Box>
    </DashboardContent>
  );
}
