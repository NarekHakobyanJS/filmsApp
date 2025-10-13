import React, { useEffect } from 'react'
import { getAsyncGenres } from '../../../store/slices/genresSlice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

import {  Typography, Toolbar, AppBar, Autocomplete, TextField} from '@mui/material';




export default function Header() {


  const disaptch = useAppDispatch()
    
  const {genres} = useAppSelector((state) => state.genresData)
  
 
  
  useEffect(() => {
      disaptch(getAsyncGenres())
  }, [])
  return (
    
      <AppBar sx={{mb : '30px'}} position="sticky" color='error'>
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            FilmsApp
          </Typography>

          <Autocomplete 
            // value={null}
            // onChange={}
            sx={{width : '250px'}}
            size='small'
            options={genres}
            renderInput={(params) => <TextField {...params} label='Select Genre'/>}
            getOptionLabel={(option) => option.name}
          />
          
          
        </Toolbar>
      </AppBar>
  );
}