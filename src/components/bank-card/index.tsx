'use client';
import { IconButton, Popover } from '@mui/material';
import React, { useState } from 'react';
import { Iconify } from '../iconify';

interface CardProps {
  bankName: string;
  cardNumber: string;
  cardType: string;
  isActive: boolean;
}

const BankCard: React.FC<CardProps> = ({ bankName, cardNumber, cardType, isActive }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null); // Changed type to HTMLElement

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div
      style={{
        background:
          'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(253,29,29,1) 60%, rgba(252,176,69,1) 100%)',
        borderRadius: '10px',
        padding: '16px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        width: '260px',
      }}
    >
      <div>
        <h2 style={{ fontSize: '13px', fontWeight: 'bold' }}>{bankName}</h2>
        <p style={{ fontSize: '10px' }}>{cardNumber}</p>
        <p style={{ fontSize: '10px' }}>{cardType}</p>
      </div>
      <div style={{ textAlign: 'end' }}>
        <IconButton onClick={handleClick}>
          <Iconify icon="eva:more-horizontal-fill" color={'white'} />
        </IconButton>
        <p style={{ fontSize: '10px' }}>{isActive ? 'Active' : 'Inactive'}</p>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '5px 10px', cursor: 'pointer' }}>View</li>
          <li style={{ padding: '5px 10px', cursor: 'pointer' }}>Edit</li>
          <li style={{ padding: '5px 10px', cursor: 'pointer' }}>Make Active</li>
          <li style={{ padding: '5px 10px', cursor: 'pointer' }}>Delete</li>
        </ul>
      </Popover>
    </div>
  );
};

export default BankCard;
