import React from 'react'; 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ReplayIcon from '@mui/icons-material/Replay';

function End(){
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
                    <Typography variant="h2">
                    End
                    </Typography>
                </Grid>
                <Grid item>
                <Card sx={{ width: 600 }}>
                        <CardMedia
                            sx={{ height: 350 }}
                            image = "https://live.staticflickr.com/615/21282059684_a8cd6cc1b2_k.jpg"
                        />
                </Card>
                </Grid>
                <Grid item
                display = "flex"
                justifyContent = "center"
                textAlign = "center"
                >
                    <Typography variant="subtitle1"
                                style={{ wordWrap: "break-word" }}
                                ml={6}
                                mr={6}
                    >
                        {'And that was our last stop! \n This is just a small fraction of all the places in Hong Kong I\'ve been to and remember very well. \n Thank you for coming on this journey with me!'}
                     </Typography>
                </Grid>
                <Grid item>
                <Button variant="outlined"
                    color = "secondary"
                    endIcon = {<ReplayIcon/>}
                    onClick = {() => {
                        window.location.href = "/";
                    }}
                >replay</Button>
                </Grid>
            </Grid>
        </Box>
      
      </div>
    )
}

export default End;