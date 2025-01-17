'use client';

import type { UseSetStateReturn } from 'src/hooks/use-set-state';
import type {
  GridSlots,
  GridColDef,
  GridRowSelectionModel,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid';

import { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  DataGrid,
  gridClasses,
  GridToolbarExport,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
} from '@mui/x-data-grid';

import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSetState } from 'src/hooks/use-set-state';

import { PRODUCT_STOCK_OPTIONS } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { EmptyContent } from 'src/components/empty-content';

import { ProductTableToolbar } from './product-table-toolbar';
import { ProductTableFiltersResult } from './product-table-filters-result';
import {
  RenderCellStock,
  RenderCellPrice,
  RenderCellPublish,
  RenderCellProduct,
  RenderCellCreatedAt,
} from './product-table-row';
import { IProductItem, IProductTableFilters, Session } from 'src/types/product';
import useSWR from 'swr';
import { IconButton } from '@mui/material';

// ----------------------------------------------------------------------

const PUBLISH_OPTIONS = [
  { value: 'published', label: 'Published' },
  { value: 'draft', label: 'Draft' },
];

const HIDE_COLUMNS = { category: false };

const HIDE_COLUMNS_TOGGLABLE = ['category', 'actions'];

// ----------------------------------------------------------------------
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export function SessionListView() {
  const confirmRows = useBoolean();

  const { data, error, isLoading } = useSWR('/api/trainingsession', fetcher);
  console.log(data);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // const filters = useSetState<IProductTableFilters>({ publish: [], stock: [] });

  // const [tableData, setTableData] = useState<Session[]>([]);

  // const [selectedRowIds, setSelectedRowIds] = useState<GridRowSelectionModel>([]);

  // const [filterButtonEl, setFilterButtonEl] = useState<HTMLButtonElement | null>(null);

  // const [columnVisibilityModel, setColumnVisibilityModel] =
  //   useState<GridColumnVisibilityModel>(HIDE_COLUMNS);

  // useEffect(() => {
  //   if (data.length) {
  //     setTableData(data);
  //   }
  // }, [data]);

  // const canReset = filters.state.publish.length > 0 || filters.state.stock.length > 0;

  // const dataFiltered = applyFilter({ inputData: tableData, filters: filters.state });

  // const CustomToolbarCallback = useCallback(
  //   () => (
  //     <CustomToolbar
  //       filters={filters}
  //       canReset={canReset}
  //       selectedRowIds={selectedRowIds}
  //       setFilterButtonEl={setFilterButtonEl}
  //       filteredResults={dataFiltered.length}
  //       onOpenConfirmDeleteRows={confirmRows.onTrue}
  //     />
  //   ),
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [filters.state, selectedRowIds]
  // );

  const columns: GridColDef[] = [
    // { field: 'category', headerName: 'Category', filterable: false },

    {
      field: 'sportType',
      headerName: 'Sport Type',
      width: 100,
    },
    {
      field: 'sessionName',
      headerName: 'Session Name',
      width: 180,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 140,
    },
    {
      field: 'sessionType',
      headerName: 'Session Type',
      width: 140,
    },
    {
      field: 'validity',
      headerName: 'Validity',
      width: 140,
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 140,
    },
    {
      field: 'people',
      headerName: 'People',
      width: 140,
    },

    {
      type: 'actions',
      field: 'actions',
      headerName: 'Action',

      width: 80,
      sortable: false,
      filterable: false,
      renderCell: () => (
        <IconButton>
          <Iconify icon="eva:more-horizontal-fill" color={'black'} />
        </IconButton>
      ),
    },
  ];

  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);

  return (
    <>
      <Stack height={'100%'} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Button variant="contained" startIcon={<Iconify icon="mingcute:add-line" />}>
          New product
        </Button>

        <Card
          sx={{
            flexGrow: { md: 1 },
            display: { md: 'flex' },
            height: '100%',
            flexDirection: { md: 'column' },
          }}
        >
          <DataGrid
            getRowId={(row) => row.id}
            checkboxSelection
            disableRowSelectionOnClick
            // rows={dataFiltered}
            rows={data}
            columns={columns}
            loading={isLoading}
            getRowHeight={() => 'auto'}
            pageSizeOptions={[5, 10, 25]}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            // onRowSelectionModelChange={(newSelectionModel) => setSelectedRowIds(newSelectionModel)}
            // columnVisibilityModel={columnVisibilityModel}
            // onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            // slots={{
            //   toolbar: CustomToolbarCallback as GridSlots['toolbar'],
            //   noRowsOverlay: () => <EmptyContent />,
            //   noResultsOverlay: () => <EmptyContent title="No results found" />,
            // }}
            // slotProps={{
            //   panel: { anchorEl: filterButtonEl },
            //   toolbar: { setFilterButtonEl },
            //   columnsManagement: { getTogglableColumns },
            // }}
            sx={{ [`& .${gridClasses.cell}`]: { alignItems: 'center', display: 'inline-flex' } }}
          />
        </Card>
      </Stack>
    </>
  );
}

// ----------------------------------------------------------------------

interface CustomToolbarProps {
  canReset: boolean;
  filteredResults: number;
  selectedRowIds: GridRowSelectionModel;
  onOpenConfirmDeleteRows: () => void;
  filters: UseSetStateReturn<IProductTableFilters>;
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}

function CustomToolbar({
  filters,
  canReset,
  selectedRowIds,
  filteredResults,
  setFilterButtonEl,
  onOpenConfirmDeleteRows,
}: CustomToolbarProps) {
  return (
    <>
      <GridToolbarContainer>
        <ProductTableToolbar
          filters={filters}
          options={{ stocks: PRODUCT_STOCK_OPTIONS, publishs: PUBLISH_OPTIONS }}
        />

        <GridToolbarQuickFilter />

        <Stack
          spacing={1}
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          {!!selectedRowIds.length && (
            <Button
              size="small"
              color="error"
              startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
              onClick={onOpenConfirmDeleteRows}
            >
              Delete ({selectedRowIds.length})
            </Button>
          )}

          <GridToolbarColumnsButton />
          <GridToolbarFilterButton ref={setFilterButtonEl} />
          <GridToolbarExport />
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
  inputData: IProductItem[];
  filters: IProductTableFilters;
};

function applyFilter({ inputData, filters }: ApplyFilterProps) {
  const { stock, publish } = filters;

  if (stock.length) {
    inputData = inputData.filter((product) => stock.includes(product.inventoryType));
  }

  if (publish.length) {
    inputData = inputData.filter((product) => publish.includes(product.publish));
  }

  return inputData;
}
