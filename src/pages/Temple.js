import React from 'react' 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import InputBoxButton from '../components/InputBoxButton';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TempleImage from '../images/Temple.png';

function Temple(){

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
                    8. Go to the nearest MTR Station. 
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="subtitle1"
                    style={{ wordWrap: "break-word" }}
                    ml={6}
                    mr={6}>
                    Then, ride 4 stops in the Lo Wu/Lok Ma Chau direction. Find the temple in the picture below near the station. What street is it on?
                    </Typography>
                </Grid>
                <Grid item>
                <Card sx={{ width: 600 }}>
                        <CardMedia
                            sx={{ height: 300 }}
                            image = {TempleImage}
                        />
                </Card>
                </Grid>
                <InputBoxButton answer = 'pak wo'
                                route = '/End'
                                endAdornment = {<InputAdornment position="end">Road</InputAdornment>} 
                                hint = 'The nearest MTR Station is Fo Tan. Check the MTR map to see which station you should go to. Then look up temples near the area on Google Maps.'
                                location = 'Fung Ying Seen Koon'
                                description = {"Each time we visit, we take a trip up here with my mom's side of the family to pay our respects together. Their grandparents' ashes are enshrined here. After walking up many flights of stairs, we light incense sticks and bow 3 times in front of their tiny photos on the wall."}
                                mapLink = 'https://www.google.com/maps/embed?pb=!4v1677480654589!6m8!1m7!1sCAoSLEFGMVFpcE13X2lYdmQxd2hDZFdlbnBxbEVtV1BQTEdoUFpWczNSS0FDTmVM!2m2!1d22.490541!2d114.1382805!3f12.237942!4f16.768485999999996!5f0.7820865974627469'
                                />
            </Grid>
        </Box>  
      </div>
      
    )
}

export default Temple;