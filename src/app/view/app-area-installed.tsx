'use client';
import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'src/components/chart';

import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';

import { fNumber, fShortenNumber } from '../../utils/format-number';

import { Chart, useChart, ChartSelect, ChartLegends } from 'src/components/chart';
import { Grid, Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    categories: string[];
    series: {
      name: string;
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ChartOptions;
  };
};

export function AppAreaInstalled({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const [selectedSeries, setSelectedSeries] = useState('Monthly');

  const chartColors = chart.colors ?? [theme.palette.primary.dark, theme.palette.warning.main];

  const chartOptions = useChart({
    chart: { stacked: false },
    colors: chartColors,
    stroke: { width: 0 },
    xaxis: { categories: chart.categories },
    tooltip: { y: { formatter: (value: number) => fNumber(value) } },
    plotOptions: { bar: { columnWidth: '40%' } },
    ...chart.options,
  });

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSeries = chart.series.find((i) => i.name === selectedSeries);

  return (
    <Card {...other} style={{ padding: '10px 27px' }}>
      <Grid container alignItems="center" spacing={2}>
        {/* Title */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Grid>

        {/* Legends */}
        <Grid item xs={12} md={3}>
          <ChartLegends
            colors={chartOptions?.colors}
            labels={chart.series[0].data.map((item) => item.name)}
            values={[fShortenNumber(1234), fShortenNumber(6789), fShortenNumber(1012)]}
            sx={{
              px: 3,
              gap: 3,
            }}
          />
        </Grid>

        {/* Dropdown */}
        <Grid item xs={12} md={3}>
          <ChartSelect
            options={chart.series.map((item) => item.name)}
            value={selectedSeries}
            onChange={handleChangeSeries}
          />
        </Grid>
      </Grid>

      <Chart
        key={selectedSeries}
        type="bar"
        series={currentSeries?.data}
        options={chartOptions}
        height={320}
        loadingProps={{ sx: { p: 2.5 } }}
        sx={{ py: 2.5, pl: 1, pr: 2.5 }}
      />
    </Card>
  );
}
