import React from 'react' 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import InputBoxButton from '../components/InputBoxButton';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Beach from '../images/Beach.png';

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
                <InputBoxButton answer = {'22.308'}
                                route = {"/"}
                                endAdornment = {<InputAdornment position="end">N°</InputAdornment>} 
                                hint = {'Destination Coordinate'}
                                image = {Beach}
                                imageTitle = {'Beach Slide'}
                                location = {'HKG'}
                                description = {'This project is a puzzle game that leads you on a tour through the places that matter the most, using the great public transportation I remember very well. While I was creating it, I discovered that anyone can contribute to Google Street View by posting their own 360° pictures, so those were very helpful in capturing places that aren’t a building or aren’t right next to a street. I didn’t even know the actual name of some of these places; I just used my knowledge of how to get there and found out the name on Google Maps. Having not been there since 2019, I was surprised I still remembered these things. '}
                                 />
            </Grid>
        </Box>
       
      </div>
      
    )
}

export default Start;