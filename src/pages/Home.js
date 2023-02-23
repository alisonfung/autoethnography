import React from 'react'; 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; 
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
                    <Typography variant="h2">
                        Placeholder Title
                    </Typography>
                </Grid>
                <Grid item

                display = "flex"
                justifyContent = "center"
                textAlign = "center"
                >
                    <Typography variant="subtitle1">
                        {'This is a description. It is intended for you to use internet searches for you to play this game.\nMake use of Google Street View!'}
                    </Typography>

                </Grid>
                <Grid item>
                <Button variant="outlined"
                    color = "secondary"
                    endIcon = {<PlayArrowIcon/>}
                    onClick = {() => {
                        window.location.href = "/start";
                    }}
                >start</Button>
                </Grid>
            </Grid>
        </Box>
      
      </div>
    )
}

export default Home;