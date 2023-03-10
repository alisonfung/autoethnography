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
                    <Typography variant="h2"
                    style={{ wordWrap: "break-word" }}>
                        1. CX881
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1"
                    style={{ wordWrap: "break-word" }}
                    ml={6}
                    mr={6}>
                        Round to three decimal places.
                    </Typography>

                </Grid>
                <InputBoxButton answer = '22.308'
                                route = '/DB02R'
                                endAdornment = {<InputAdornment position="end">N°</InputAdornment>} 
                                hint = 'What is the langitude coordinate for the destination?'
                                location = 'HKG'
                                description = {"The only major airport in Hong Kong. This is a picture of the baggage claim area which leads into the arrival hall. I've arrived here countless times with my mom, and it has many different public transportation options to get to everywhere in the city. As soon as you step outside the airport, you instantly feel the humid weather."}
                                mapLink = 'https://www.google.com/maps/embed?pb=!4v1677280761641!6m8!1m7!1sCAoSLEFGMVFpcE4zZnlLb21xUXgzSGwzYjdRZ3FFZE04QXgxbGhFYWE3c05Namph!2m2!1d22.3163573!2d113.9342928!3f187.7239152047503!4f-4.107138481319893!5f0.7820865974627469'
                                 />
            </Grid>
            
        </Box>
       
      </div>
      
    )
}

export default Start;