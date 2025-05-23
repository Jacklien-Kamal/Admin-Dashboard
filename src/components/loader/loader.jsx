import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { colors } from '@mui/material';

export default function Loader() {
  return (
    <div className="loader bg-secondary-body   flex mx-auto justify-center h-screen items-center">

      <CircularProgress color='' style={{marginInline:"auto"}} />
    </div>
  );
}
