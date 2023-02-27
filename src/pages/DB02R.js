import React from 'react' 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import InputBoxButton from '../components/InputBoxButton';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

function DB02R(){

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
                        2. DB02R, Bus Terminus
                    </Typography>
                </Grid>
                <InputBoxButton answer = '7593'
                                route = '/Beach'
                                startAdornment = {<InputAdornment position="start">JL</InputAdornment>} 
                                hint = 'Find a blue circle for Street View at the Bus Terminus. Take a look around for anything that says "JL" on it.'
                                location = 'Discovery Bay'
                                description = {"An expensive resort town that my dad's sister lives in. This is a picture of the main plaza. I usually see lots of Western tourists here, and there are a lot more Western/European restaurants in the area. Most establishments have people that will speak English. I've stayed in my aunt's apartment here before."}
                                mapLink = 'https://www.google.com/maps/embed?pb=!4v1677476479072!6m8!1m7!1sEJEudkCgZR2qc0_xYr7iKw!2m2!1d22.29574092298575!2d114.0164822155805!3f212.10009357034545!4f4.721735781245954!5f0.7820865974627469'
                                 />
            </Grid>
        </Box>  
      </div>
      
    )
}

export default DB02R;