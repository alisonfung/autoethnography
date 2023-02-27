import React from 'react'; 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; 
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function Home(){
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#dcc2f2",
            whiteSpace: "pre-line"
        }}>
        <Box>
        <Grid 
            container 
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <Grid item
                display = "flex"
                justifyContent = "center"
                >
                    <Typography variant="h2"
                    style={{ wordWrap: "break-word" }}>
                    Follow me through Hong Kong!
                    </Typography>
                </Grid>
                <Grid item>
                <Card sx={{ width: 600 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hong_Kong_Island_Skyline_201108.jpg/1280px-Hong_Kong_Island_Skyline_201108.jpg"
                        />
                </Card>
                </Grid>
                <Grid item
                display = "flex"
                justifyContent = "center"
                textAlign = "center"
                >
                    <Typography variant="subtitle1"
                                ml={6}
                                mr={6}
                                style={{ wordWrap: "break-word" }}
                    >
                        {'This game will have you visit various places within Hong Kong through Google Maps/Street View. \n For each stop, you will be given a hint to a location, and a clue for a password. \nAt this location on Google Maps or Street View, you will be able to find an answer to the clue.\n'}
                        A tutorial for Street View is <Link href="https://support.google.com/maps/answer/3093484?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Cuse-pegman" target="_blank">here</Link>.
                        {' You can zoom in on Google Maps using Satellite View and click on a blue circle or line near the location. \nThis is a connected journey, so keep in mind where you currently "are" to help find out where you\'re going next.\nUse the Hint Button if you need help!\n'} 
                        If you are stuck, all answers are provided <Link href="https://github.com/alisonfung/autoethnography/blob/initial/README.md" target="_blank">here!</Link>
                    </Typography>

                </Grid>
                <Grid item>
                <Button variant="outlined"
                    color = "secondary"
                    endIcon = {<PlayArrowIcon/>}
                    onClick = {() => {
                        window.location.href = "/Start";
                    }}
                >start</Button>
                </Grid>
            </Grid>
        </Box>
      
      </div>
    )
}

export default Home;