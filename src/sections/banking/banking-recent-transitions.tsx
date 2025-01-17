import type { CardProps } from '@mui/material/Card';
import type { TableHeadCustomProps } from 'src/components/table';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';

import { fCurrency } from 'src/utils/format-number';
import { fDateTime } from 'src/utils/format-time';

import { Label } from 'src/components/label';
import { Scrollbar } from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';
import { Container } from '@mui/material';
import useSWR from 'swr';
import { Transaction } from 'src/types/walletTypes';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  headLabel: TableHeadCustomProps['headLabel'];
};
const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  });
export function BankingRecentTransitions({
  title,
  subheader,

  headLabel,
  ...other
}: Props) {
  const { data: tableData, error } = useSWR('/api/transactions', fetcher);

  if (error) {
    return <div>Error loading transactions.</div>;
  }

  if (!tableData) {
    return <div>Loading...</div>;
  }
  return (
    <Container {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <Scrollbar sx={{ minHeight: 462 }}>
        <Table sx={{ minWidth: '100%' }}>
          <TableHeadCustom headLabel={headLabel} />

          <TableBody>
            {tableData.map((row: Transaction) => (
              <RowItem key={row.transactionId} row={row} />
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </Container>
  );
}

// ----------------------------------------------------------------------

type RowItemProps = {
  row: Transaction;
};

function RowItem({ row }: RowItemProps) {
  const theme = useTheme();

  const lightMode = theme.palette.mode === 'light';

  const renderAvatar = (
    <Box sx={{ display: 'flex', columnGap: '5px' }}>
      <Avatar
        src={row.avatarUrl || ''}
        sx={{
          width: 48,
          height: 48,
          color: 'text.secondary',
          bgcolor: 'background.neutral',
        }}
      />
      <p>{row.fullname}</p>
    </Box>
  );

  return (
    <>
      <TableRow>
        <TableCell>
          <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>{renderAvatar}</Box>
        </TableCell>
        <TableCell>{row.transactionId}</TableCell>
        <TableCell>{row.type}</TableCell>

        <TableCell>
          <ListItemText
            primary={fDateTime(row.date, 'DD.MM.YYYY')}
            primaryTypographyProps={{ typography: 'body2' }}
            secondaryTypographyProps={{ mt: 0.5, component: 'span', typography: 'caption' }}
          />
        </TableCell>
        <TableCell>
          <Label
            variant={lightMode ? 'soft' : 'filled'}
            color={
              (row.status === 'Succeeded' && 'success') ||
              (row.status === 'Pending' && 'warning') ||
              'error'
            }
            sx={{ textTransform: 'capitalize', background: 'none' }}
          >
            {row.status}
          </Label>
        </TableCell>
        <TableCell>{fCurrency(row.amount)}</TableCell>

        <TableCell sx={{ pr: 1 }}>
          <Button>Download</Button>
        </TableCell>
      </TableRow>
    </>
  );
}
