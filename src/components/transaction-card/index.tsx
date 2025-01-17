import * as React from 'react';
import { Box, Typography, Card } from '@mui/material';

interface TransactionCardProps {
  title: string;
  value: string;
  color: string;
  secondaryColor: string;
  icon: React.ReactNode;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  value,
  color,
  icon,
  secondaryColor,
}) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: '110px',
        padding: 2,
        display: 'flex',
        alignItems: 'start',
        backgroundColor: color,
      }}
    >
      <Box
        sx={{
          height: '100%',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <Typography variant="body2">{title}</Typography>
        <Typography variant="h6" component="h2">
          {value}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: secondaryColor,
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
