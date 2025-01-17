import type { IProductTableFilters } from 'src/types/product';
import type { SelectChangeEvent } from '@mui/material/Select';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import { useCallback } from 'react';

import Select from '@mui/material/Select';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

import { useSetState } from 'src/hooks/use-set-state';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

type Props = {
  filters: UseSetStateReturn<{
    type: string[];
    status: string[];
    price: string[];
  }>;
  options: {
    types: {
      value: string;
      label: string;
    }[];
    prices: {
      value: string;
      label: string;
    }[];
    status: {
      value: string;
      label: string;
    }[];
  };
};

export function ProductTableToolbar({ filters, options }: Props) {
  const popover = usePopover();

  const local = useSetState<{
    type: string[];
    status: string[];
    price: string[];
  }>({
    price: filters.state.price,
    type: filters.state.type,
    status: filters.state.status,
  });

  const handleChangetype = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;

      local.setState({ type: typeof value === 'string' ? value.split(',') : value });
    },
    [local]
  );

  const handleChangeprice = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;

      local.setState({ price: typeof value === 'string' ? value.split(',') : value });
    },
    [local]
  );
  const handleChangestatus = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;

      local.setState({ status: typeof value === 'string' ? value.split(',') : value });
    },
    [local]
  );

  const handleFiltertype = useCallback(() => {
    filters.setState({ type: local.state.type });
  }, [filters, local.state.type]);
  const handleFilterstaus = useCallback(() => {
    filters.setState({ status: local.state.status });
  }, [filters, local.state.status]);

  const handleFilterprice = useCallback(() => {
    filters.setState({ price: local.state.price });
  }, [filters, local.state.price]);

  return (
    <>
      <FormControl sx={{ flexShrink: 0, width: { xs: 1, md: 200 } }}>
        <InputLabel
          sx={{
            color: 'black', // Set placeholder color to black
            '&.Mui-focused': {
              color: 'black', // Ensure color remains black when focused
            },
          }}
          htmlFor="product-filter-type-select-label"
        >
          Type
        </InputLabel>

        <Select
          multiple
          value={local.state.type}
          onChange={handleChangetype}
          onClose={handleFiltertype}
          variant="standard"
          renderValue={(selected) => selected.join(', ')}
          inputProps={{ id: 'product-filter-type-select-label' }}
          sx={{
            textTransform: 'capitalize',
            '&:before': {
              borderBottom: 'none', // Remove default bottom border
            },
            '&:after': {
              borderBottom: 'none', // Remove focus bottom border
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottom: 'none', // Remove hover bottom border
            },
          }}
        >
          {options.types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                disableRipple
                size="small"
                checked={local.state.type.includes(option.value)}
              />
              {option.label}
            </MenuItem>
          ))}
          <MenuItem
            onClick={handleFiltertype}
            sx={{
              justifyContent: 'center',
              fontWeight: (theme) => theme.typography.button,
              border: (theme) =>
                `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            }}
          >
            Apply
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ flexShrink: 0, width: { xs: 1, md: 200 } }}>
        <InputLabel
          sx={{
            color: 'black', // Set placeholder color to black
            '&.Mui-focused': {
              color: 'black', // Ensure color remains black when focused
            },
          }}
          htmlFor="product-filter-price-select-label"
        >
          Price
        </InputLabel>
        <Select
          multiple
          value={local.state.price}
          onChange={handleChangeprice}
          onClose={handleFilterprice}
          variant="standard"
          renderValue={(selected) => selected.map((value) => value).join(', ')}
          inputProps={{ id: 'product-filter-price-select-label' }}
          sx={{
            textTransform: 'capitalize',
            '&:before': {
              borderBottom: 'none', // Remove default bottom border
            },
            '&:after': {
              borderBottom: 'none', // Remove focus bottom border
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottom: 'none', // Remove hover bottom border
            },
          }}
        >
          {options.prices.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                disableRipple
                size="small"
                checked={local.state.price.includes(option.value)}
              />
              {option.label}
            </MenuItem>
          ))}

          <MenuItem
            disableGutters
            disableTouchRipple
            onClick={handleFilterprice}
            sx={{
              justifyContent: 'center',
              fontWeight: (theme) => theme.typography.button,
              border: (theme) =>
                `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            }}
          >
            Apply
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ flexShrink: 0, width: { xs: 1, md: 200 } }}>
        <InputLabel
          sx={{
            color: 'black', // Set placeholder color to black
            '&.Mui-focused': {
              color: 'black', // Ensure color remains black when focused
            },
          }}
          htmlFor="product-filter-price-select-label"
        >
          Status
        </InputLabel>
        <Select
          multiple
          value={local.state.status}
          onChange={handleChangestatus}
          onClose={handleFilterstaus}
          renderValue={(selected) => selected.map((value) => value).join(', ')}
          inputProps={{ id: 'product-filter-status-select-label' }}
          sx={{
            textTransform: 'capitalize',
            '&:before': {
              borderBottom: 'none', // Remove default bottom border
            },
            '&:after': {
              borderBottom: 'none', // Remove focus bottom border
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottom: 'none', // Remove hover bottom border
            },
          }}
          variant="standard"
        >
          {options.status.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                disableRipple
                size="small"
                checked={local.state.status.includes(option.value)}
              />
              {option.label}
            </MenuItem>
          ))}

          <MenuItem
            disableGutters
            disableTouchRipple
            onClick={handleFilterprice}
            sx={{
              justifyContent: 'center',
              fontWeight: (theme) => theme.typography.button,
              border: (theme) =>
                `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            }}
          >
            Apply
          </MenuItem>
        </Select>
      </FormControl>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:printer-minimalistic-bold" />
            Print
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:import-bold" />
            Import
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:export-bold" />
            Export
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
