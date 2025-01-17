import type { Theme, SxProps } from '@mui/material/styles';
import type { IProductTableFilters } from 'src/types/product';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import { useCallback } from 'react';

import Chip from '@mui/material/Chip';

import { sentenceCase } from 'src/utils/change-case';

import { chipProps, FiltersBlock, FiltersResult } from 'src/components/filters-result';

// ----------------------------------------------------------------------

type Props = {
  totalResults: number;
  sx?: SxProps<Theme>;
  filters: UseSetStateReturn<{
    type: string[];
    status: string[];
    price: string[];
  }>;
};

export function ProductTableFiltersResult({ filters, totalResults, sx }: Props) {
  const handleRemoveType = useCallback(
    (inputValue: string) => {
      const newValue = filters.state.type.filter((item) => item !== inputValue);

      filters.setState({ type: newValue });
    },
    [filters]
  );

  const handleRemovePrice = useCallback(
    (inputValue: string) => {
      const newValue = filters.state.price.filter((item) => item !== inputValue);

      filters.setState({ price: newValue });
    },
    [filters]
  );

  return (
    <FiltersResult totalResults={totalResults} onReset={filters.onResetState} sx={sx}>
      <FiltersBlock label="Type:" isShow={!!filters.state.type.length}>
        {filters.state.type.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={sentenceCase(item)}
            onDelete={() => handleRemoveType(item)}
          />
        ))}
      </FiltersBlock>

      <FiltersBlock label="Price:" isShow={!!filters.state.price.length}>
        {filters.state.price.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={sentenceCase(item)}
            onDelete={() => handleRemovePrice(item)}
          />
        ))}
      </FiltersBlock>
    </FiltersResult>
  );
}
