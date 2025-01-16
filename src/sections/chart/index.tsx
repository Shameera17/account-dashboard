import React from 'react';
import { AppAreaInstalled } from 'src/app/view/app-area-installed';

interface ChartSeries {
  view: 'Monthly' | 'Yearly';
  categories: string[];
  data: {
    name: string;
    data: number[];
  }[];
}

const chartSeries: ChartSeries[] = [
  {
    view: 'Monthly',
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    data: [
      {
        name: 'Previous',
        data: [2000, 3000, 4000, 500, 3500, 4500, 1400, 1500, 1000, 3100, 6000, 4000],
      },
      {
        name: 'Next',
        data: [1500, 2500, 3000, 4000, 3000, 4200, 5000, 3900, 2790, 4500, 5800, 3500],
      },
    ],
  },
];

const RevenueOverview: React.FC = () => {
  return (
    <AppAreaInstalled
      title="Revenue Overview"
      subheader=""
      chart={{
        categories: chartSeries.flatMap((series) => series.categories),
        series: chartSeries.map((series) => ({
          name: series.view,
          data: series.data,
        })),
      }}
    />
  );
};

export default RevenueOverview;
