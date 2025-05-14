import React, { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { legendClasses } from '@mui/x-charts/ChartsLegend';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '../../context/theme';

const otherProps = {
  width: 200,
  height: 200,
  sx: {
    [`.${legendClasses.root}`]: {
      transform: 'translate(20px, 0)',
    },
  },
  
};

const data = [
  { team: 'Amber Ants', rank: 3, points: 31,color:'red  ' },
  { team: 'Eagle Warriors', rank: 1, points: 50 },
  { team: 'Elephant Trunk', rank: 4, points: 18 },
  { team: 'Jaguars', rank: 2, points: 37 },
  { team: 'Smooth Pandas', rank: 5, points: 6 },
];

const Tableau10 = [
  '#4e79a7',
  '#f28e2c',
  '#e15759',
  '#76b7b2',
  '#59a14f',
  '#edc949',
  '#af7aa1',
  '#ff9da7',
  '#9c755f',
  '#bab0ab',
];

const chartsParams = {
  height: 300,
};

export default function Charts() {
  const { theme, toggleTheme } = useTheme();
  const [color, setColor] = useState('red');  // Default color

  const handleChange = (event, nextColor) => {
    if (nextColor !== null) {  // Make sure it's not null to prevent errors
      setColor(nextColor);
    }
  };

  return (
    <>
      {/* PieChart Component */}
      <PieChart
        series={[
          {
            data: data.map((d) => ({ label: d.team , id: d.team, value: d.points })),
            valueFormatter: (v, { dataIndex }) => {
              const { rank } = data[dataIndex];
              return `has ${v.value} points and is ranked ${rank}.`;
            },
          },
        ]}
        {...otherProps}
      />

      {/* Stack for LineChart and ToggleButtonGroup */}
      <Stack direction="column" spacing={2}>
        <LineChart
          {...chartsParams}
          series={[
            {
              data: [15, 23, 18, 19, 13],
              label: 'Example',
              valueFormatter: (v) => `${v} units`,
            },
          ]}
        />

        {/* ToggleButtonGroup to select a color */}
        <ToggleButtonGroup value={color} exclusive onChange={handleChange}>
          {Tableau10.map((value) => (
            <ToggleButton key={value} value={value} sx={{ p: 1 }}>
              <div
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: value,
                  display: 'inline-block',
                }}
              />
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>
    </>
  );
}
