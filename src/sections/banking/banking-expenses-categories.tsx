import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'src/components/chart';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';

import { fCurrency } from 'src/utils/format-number';

import { Chart, useChart, ChartLegends } from 'src/components/chart';
import { Button, Container, Typography } from '@mui/material';
// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    icons?: React.ReactNode[];
    series: {
      label: string;
      value: number;
    }[];
    options?: ChartOptions;
  };
};

export function BankingExpensesCategories({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [
    theme.palette.secondary.dark,
    theme.palette.error.main,
    theme.palette.primary.main,
    theme.palette.warning.main,
    theme.palette.info.dark,
    theme.palette.info.main,
    theme.palette.success.main,
    theme.palette.warning.dark,
  ];

  const chartSeries = chart.series.map((item) => item.value);
  const chartOptions = useChart({
    chart: {
      offsetY: 12,
      type: 'polarArea',
    },
    colors: chartColors,
    stroke: { width: 1, colors: [theme.palette.background.paper] },
    fill: { opacity: 0.88 },
    tooltip: { y: { formatter: (value: number) => fCurrency(value) } },
    plotOptions: {
      polarArea: {
        rings: { strokeWidth: 0 },
        spokes: { strokeWidth: 0 },
      },
    },
    labels: chart.series.map((item) => item.label),
    grid: {
      show: false,
    },
    ...chart.options,
  });

  return (
    <Container {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box
        sx={{
          pt: 4,
          pb: 3,
          rowGap: 3,
          columnGap: 5,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Chart
          type="polarArea"
          series={chartSeries}
          options={chartOptions}
          width={{ xs: 240, md: 280 }}
          height={{ xs: 240, md: 280 }}
          loadingProps={{ sx: { p: 3 } }}
        />
        <Divider orientation="vertical" flexItem sx={{ borderStyle: 'solid' }} />

        <Box>
          <ChartLegends
            colors={chartOptions?.colors}
            labels={chartOptions?.labels}
            icons={chart.icons}
            // sublabels={chart.series.map((item) => fCurrency(item.value))}
            sx={{ gap: 2.5, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
          />
        </Box>
        <Box
          sx={{
            width: '277px',
            height: '225px',
            backgroundImage: `url(/assets/images/card.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '26px 50px',
          }}
        >
          <div>
            <Typography variant="h4" color="white">
              Go Premium
            </Typography>
            <Typography variant="body1" fontSize={10} color="white">
              You’re currently on a basic plan, Upgrade to premium to get more from carbon
            </Typography>
          </div>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'white', color: 'black', fontSize: '13px' }}
          >
            Upgrade
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
