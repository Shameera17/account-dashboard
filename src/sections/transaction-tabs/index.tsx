import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';
import { BankingRecentTransitions } from '../banking/banking-recent-transitions';
import { Stack } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TransactionTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          border: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 25px',
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Transactions" {...a11yProps(0)} />
          <Tab label="Invoices" {...a11yProps(1)} />
        </Tabs>
        <Button size="small" color="inherit">
          View all
        </Button>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <BankingRecentTransitions
          title=""
          headLabel={[
            { id: 'description', label: 'Description' },
            { id: 'transactionid', label: 'Transaction ID' },
            { id: 'type', label: 'Type' },
            { id: 'date', label: 'Date' },
            { id: 'status', label: 'Status' },
            { id: 'amount', label: 'Amount' },
            { id: '', label: 'Receipt' },
          ]}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Container></Container>
      </CustomTabPanel>
    </Stack>
  );
}
