'use client';

import { useState, useEffect, useMemo } from 'react';
import useSWR from 'swr';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DataGrid, GridToolbarContainer, GridColDef } from '@mui/x-data-grid';

import { Avatar, AvatarGroup, IconButton } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSetState, UseSetStateReturn } from 'src/hooks/use-set-state';

import { Iconify } from 'src/components/iconify';
import { EmptyContent } from 'src/components/empty-content';
import { ProductTableToolbar } from './product-table-toolbar';
import { ProductTableFiltersResult } from './product-table-filters-result';
import { Session } from 'src/types/product';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function SessionListView() {
  const confirmRows = useBoolean();
  const { data, error, isLoading } = useSWR('/api/trainingsession', fetcher);

  const filters = useSetState<{
    type: string[];
    status: string[];
    price: string[];
  }>({ type: [], status: [], price: [] });

  const [tableData, setTableData] = useState<Session[]>([]);
  const [filterButtonEl, setFilterButtonEl] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (data?.length) {
      setTableData(data);
    }
  }, [data]);

  const canReset =
    filters.state.price.length > 0 ||
    filters.state.status.length > 0 ||
    filters.state.type.length > 0;

  const dataFiltered = useMemo(
    () => applyFilter({ inputData: tableData, filters: filters.state }),
    [tableData, filters.state]
  );

  const columns: GridColDef[] = [
    { field: 'sportType', headerName: 'Sport Type', width: 100 },
    { field: 'sessionName', headerName: 'Session Name', width: 180 },
    { field: 'price', headerName: 'Price', width: 140 },
    { field: 'sessionType', headerName: 'Session Type', width: 140 },
    {
      field: 'employee',
      headerName: 'Employee',
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <AvatarGroup spacing="small">
          {params.row.employee?.map((person: any) => (
            <Avatar key={person.name} alt={person.name} src={person.image} />
          ))}
        </AvatarGroup>
      ),
    },
    { field: 'validity', headerName: 'Validity', width: 140 },
    { field: 'location', headerName: 'Location', width: 140 },
    { field: 'people', headerName: 'People', width: 140 },
    {
      type: 'actions',
      field: 'actions',
      headerName: 'Action',
      width: 80,
      sortable: false,
      filterable: false,
      renderCell: () => (
        <IconButton>
          <Iconify icon="eva:more-horizontal-fill" color="black" />
        </IconButton>
      ),
    },
  ];

  const getTogglableColumns = () => columns.map((column) => column.field);

  return (
    <Stack
      height="100%"
      sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '0px 18px' }}
    >
      <DataGrid
        getRowId={(row) => row.id}
        disableRowSelectionOnClick
        rows={dataFiltered}
        columns={columns}
        loading={isLoading}
        getRowHeight={() => 'auto'}
        pageSizeOptions={[5, 10, 25]}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        slots={{
          toolbar: () => (
            <CustomToolbar
              filters={filters}
              canReset={canReset}
              filteredResults={dataFiltered.length}
              setFilterButtonEl={setFilterButtonEl}
              onOpenConfirmDeleteRows={confirmRows.onTrue}
            />
          ),
          noRowsOverlay: () => <EmptyContent />,
          noResultsOverlay: () => <EmptyContent title="No results found" />,
        }}
        slotProps={{
          panel: { anchorEl: filterButtonEl },
          toolbar: { setFilterButtonEl },
          columnsManagement: { getTogglableColumns },
        }}
        sx={{
          '& .MuiDataGrid-cell': {
            alignItems: 'center',
            display: 'inline-flex',
          },
          '& .MuiDataGrid-row--borderBottom': {
            backgroundColor: 'transparent !important',
          },
        }}
      />
    </Stack>
  );
}

// ----------------------------------------------------------------------

interface CustomToolbarProps {
  canReset: boolean;
  filteredResults: number;
  onOpenConfirmDeleteRows: () => void;
  filters: UseSetStateReturn<{
    type: string[];
    status: string[];
    price: string[];
  }>;
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}

function CustomToolbar({ filters, canReset, filteredResults }: CustomToolbarProps) {
  return (
    <>
      <GridToolbarContainer>
        <ProductTableToolbar
          filters={filters}
          options={{
            types: [{ value: 'Football', label: 'Football' }],
            prices: [{ value: 'AED 2,000', label: 'AED 2,000' }],
            status: [],
          }}
        />

        <Stack
          spacing={1}
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button variant="contained">New Session</Button>
        </Stack>
      </GridToolbarContainer>

      {canReset && (
        <ProductTableFiltersResult
          filters={filters}
          totalResults={filteredResults}
          sx={{ p: 2.5, pt: 0 }}
        />
      )}
    </>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  inputData: Session[];
  filters: {
    type: string[];
    status: string[];
    price: string[];
  };
};

function applyFilter({ inputData, filters }: ApplyFilterProps) {
  const { type, status, price } = filters;

  if (type.length) {
    inputData = inputData.filter((product) => type.includes(product.sportType));
  }

  if (status.length) {
    inputData = inputData.filter((product) => status.includes(product.validity));
  }
  if (price.length) {
    inputData = inputData.filter((product) => price.includes(product.price));
  }

  return inputData;
}
