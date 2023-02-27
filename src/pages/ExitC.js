import React from 'react' 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import InputBoxButton from '../components/InputBoxButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BusStopImage from '../images/BusStop.png';

function ExitC(){

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
                    6. Fo Tan MTR Exit C
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1"
                    style={{ wordWrap: "break-word" }}
                    ml={6}
                    mr={6}>
                    From this exit, head left and continue down the street for a quite a while. What is the bus number on this sign, indicated by the red circle? (The first one, no letters.)
                    </Typography>
                </Grid>
                <Grid item>
                <Card sx={{ width: 600 }}>
                        <CardMedia
                            sx={{ height: 300 }}
                            image = {BusStopImage}
                        />
                </Card>
                </Grid>
                <InputBoxButton answer = '811'
                                route = '/SuiWo'
                                hint = 'Find Exit C on Google Maps, then continue down Lok King Street. If you hit the roundabout, you are going the wrong way. Keep going until you see this bus stop on the right.'
                                location = 'Plaza Ascot'
                                description = {"I've taken the exact path down the road you (presumably) just took to get here many times. This bus stop was the entrance to the mall/shopping center of Royal Ascot, a more high-end residential area that my mom's sister lives in, and the main place we stay at when we visit. This picture is from one of the buildings in the area. I have so many memories of every store and restaurant here."}
                                mapLink = 'https://www.google.com/maps/embed?pb=!4v1677479523589!6m8!1m7!1sCAoSLEFGMVFpcFBEX3dManJiNzdYTlltVGFMT0FLaTVlVWNwb0ZENHhQbDJySmtz!2m2!1d22.398948!2d114.201326!3f29.515838537146657!4f26.433304109801128!5f0.7820865974627469'
                                />
            </Grid>
        </Box>  
      </div>
      
    )
}

export default ExitC;