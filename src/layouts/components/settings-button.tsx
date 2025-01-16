'use client';

import type { IconButtonProps } from '@mui/material/IconButton';

import { m } from 'framer-motion';

import Badge from '@mui/material/Badge';
import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';

import { useSettingsContext } from 'src/components/settings/context';

// ----------------------------------------------------------------------

export type SettingsButtonProps = IconButtonProps;

export function SettingsButton({ sx, ...other }: SettingsButtonProps) {
  const settings = useSettingsContext();

  return (
    <IconButton
      aria-label="settings"
      onClick={settings.onToggleDrawer}
      sx={{ p: 0, width: 40, height: 40, ...sx }}
      {...other}
    >
      <Badge color="error" variant="dot" invisible={!settings.canReset}>
        <SvgIcon
          component={m.svg}
          // animate={{ rotate: 360 }}
          // transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
        >
          {/* https://icon-sets.iconify.design/solar/settings-bold-duotone/ */}
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4819_26)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.50017 6.34374C7.03316 6.34374 5.84391 7.53299 5.84391 8.99999C5.84391 10.467 7.03316 11.6562 8.50017 11.6562C9.96717 11.6562 11.1564 10.467 11.1564 8.99999C11.1564 7.53299 9.96717 6.34374 8.50017 6.34374ZM6.90642 8.99999C6.90642 8.11979 7.61996 7.40624 8.50017 7.40624C9.38037 7.40624 10.0939 8.11979 10.0939 8.99999C10.0939 9.8802 9.38037 10.5937 8.50017 10.5937C7.61996 10.5937 6.90642 9.8802 6.90642 8.99999Z"
                fill="#111111"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.9189 2.78952C10.2245 0.356128 6.77587 0.356129 6.08141 2.78952C5.86624 3.54348 5.09165 3.99069 4.33112 3.80005C1.87651 3.18478 0.152211 6.17135 1.91236 7.98946C2.45772 8.55278 2.45772 9.44721 1.91236 10.0105C0.152211 11.8286 1.87651 14.8152 4.33112 14.1999C5.09165 14.0093 5.86624 14.4565 6.08141 15.2105C6.77587 17.6439 10.2245 17.6439 10.9189 15.2105C11.1341 14.4565 11.9087 14.0093 12.6692 14.1999C15.1238 14.8152 16.8481 11.8286 15.088 10.0105C14.5426 9.44721 14.5426 8.55278 15.088 7.98946C16.8481 6.17135 15.1238 3.18478 12.6692 3.80005C11.9087 3.99069 11.1341 3.54348 10.9189 2.78952ZM7.10312 3.08111C7.50423 1.6756 9.4961 1.6756 9.89721 3.08111C10.2697 4.38645 11.6108 5.16072 12.9275 4.83067C14.3453 4.47529 15.3412 6.2003 14.3246 7.25043C13.3804 8.22572 13.3804 9.77427 14.3246 10.7496C15.3412 11.7997 14.3453 13.5247 12.9275 13.1693C11.6108 12.8393 10.2697 13.6135 9.89721 14.9189C9.4961 16.3244 7.50423 16.3244 7.10312 14.9189C6.73059 13.6135 5.38951 12.8393 4.07278 13.1693C2.65503 13.5247 1.65909 11.7997 2.67573 10.7496C3.61993 9.77427 3.61993 8.22572 2.67573 7.25043C1.65909 6.2003 2.65503 4.47529 4.07278 4.83067C5.38951 5.16072 6.73059 4.38645 7.10312 3.08111Z"
                fill="#111111"
              />
            </g>
            <defs>
              <clipPath id="clip0_4819_26">
                <rect width="17" height="17" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
        </SvgIcon>
      </Badge>
    </IconButton>
  );
}
