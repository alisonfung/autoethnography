import React from 'react' 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import InputBoxButton from '../components/InputBoxButton';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

function Start(){

    return(
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#dcc2f2"
        }}>
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
            <Grid 
            container 
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <Grid item>
                    <Typography variant="h2">
                        1. CX811
                    </Typography>
                    <Typography variant="subtitle1">
                        Round to three decimal places.
                    </Typography>

                </Grid>
                <InputBoxButton answer = {'22.308'} route = {"/"} endAdornment = {<InputAdornment position="end">N°</InputAdornment>} hint = {'Destination Coordinate'}/>
                
            </Grid>
        </Box>
       
      </div>
      
    )
}

export default Start;