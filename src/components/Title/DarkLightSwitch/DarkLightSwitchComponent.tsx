import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { TitleComponentProps } from '../../../interfaces/interfaces';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 30,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 22,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(30px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 4,
    '&.Mui-checked': {
      transform: 'translateX(30px)',
      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#378fe6' : '#1e202a',
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundImage: 'linear-gradient(to right, #3eda82, #378fe6)',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 22,
    height: 22,
    borderRadius: 12.5,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 30 / 2,
    opacity: 1,
    backgroundImage: 'linear-gradient(to right, #3eda82, #378fe6)',
    boxSizing: 'border-box',
  },
}));

export default function DarkLightSwitchComponent(props: TitleComponentProps) {
  const theme = useTheme();

  const handleThemeChange = () => {
    const newPaletteMode = theme.palette.mode === 'dark' ? 'light' : 'dark';
    props.clickHandle();
  };

  return (
      <AntSwitch onChange={handleThemeChange} defaultChecked={theme.palette.mode === 'dark'} inputProps={{ 'aria-label': 'ant design' }} />
  );
}
