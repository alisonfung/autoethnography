import React from 'react' 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import InputBoxButton from '../components/InputBoxButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BeachImage from '../images/Beach.png';

function Beach(){

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
                        3. Beach Slide
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1"
                    style={{ wordWrap: "break-word" }}
                    ml={6}
                    mr={6}>
                        What color is the slide on the left in the photo below?
                    </Typography>
                </Grid>
                <Grid item>
                <Card sx={{ width: 400 }}>
                        <CardMedia
                            sx={{ height: 300 }}
                            image = {BeachImage}
                        />
                </Card>
                </Grid>
                <InputBoxButton answer = 'green'
                                route = '/Pier'
                                hint = 'Look for a beach playground in Discovery Bay. Click on some of the blue circles for Street View on the beach and look for this place.'
                                location = 'Tai Pak Beach'
                                description = {'The beach! I usually walk past here when visiting. The Dragon Boat Festival races are held here in June.'}
                                mapLink = 'https://www.google.com/maps/embed?pb=!4v1677477426547!6m8!1m7!1sCAoSLEFGMVFpcFBlczBGTTdaaUxLRUpOM3l3dzl3OWhLWUFjX193a3Y1Nm5yMjNP!2m2!1d22.2988269!2d114.0149805!3f187.86!4f12.459999999999994!5f0.7820865974627469'
                                 />
            </Grid>
        </Box>  
      </div>
      
    )
}

export default Beach;