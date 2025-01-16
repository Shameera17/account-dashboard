import * as React from 'react';
import { Box, Typography, Card } from '@mui/material';

interface TransactionCardProps {
  title: string;
  value: string;
  color: string;
  icon: React.ReactNode;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ title, value, color, icon }) => {
  return (
    <Card sx={{ minWidth: 150, padding: 2, display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h6" component="h2">
          {value}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: color,
          width: 40,
          height: 40,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
    </Card>
  );
};

export default TransactionCard;
