import React from 'react' 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import InputBoxButton from '../components/InputBoxButton';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

function FoTan(){

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
                    <Typography variant="h2"
                    style={{ wordWrap: "break-word" }}>
                        5. Fo Tan MTR
                    </Typography>
                </Grid>
                <InputBoxButton answer = 'east'
                                route = '/ExitC'
                                endAdornment = {<InputAdornment position="end">Rail Line</InputAdornment>} 
                                hint = 'What line is this MTR station on?'
                                location = 'Fo Tan MTR Station'
                                description = {"The subway (MTR) system is my favorite way to get around; you can go pretty much anywhere and then walk a bit to your destination. It's super organized and I still have the map memorized. Fo Tan is in the New Territories region, north of Hong Kong Island, and is the closest station to my mom's sister's apartment. I love the flower pattern in the station here."}
                                mapLink = 'https://www.google.com/maps/embed?pb=!4v1677478423388!6m8!1m7!1sCAoSLEFGMVFpcFB4TGwtV2VCZHlmM1hKQUQtWXN5blFuWHZfcHEzMlJPUEk0Zmpv!2m2!1d22.3950972!2d114.198096!3f194.13183948251216!4f-4.166962587229619!5f0.7820865974627469'
                                 />
            </Grid>
        </Box>  
      </div>
      
    )
}

export default FoTan;