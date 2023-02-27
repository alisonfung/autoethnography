import React from 'react' 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import InputBoxButton from '../components/InputBoxButton';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

function SuiWo(){

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
                    7. Take the bus to 穗禾苑
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="subtitle1"
                    style={{ wordWrap: "break-word" }}
                    ml={6}
                    mr={6}>
                        Name another bus line here.
                    </Typography>
                </Grid>
                <InputBoxButton answer = '80'
                                route = '/Temple'
                                endAdornment = {<InputAdornment position="end">M</InputAdornment>} 
                                hint = 'You should be at Sui Wo Court. Find out what bus line ends in "M" that departs from there.'
                                location = 'Sui Wo Court'
                                description = {"My mom's brother lives here, as did their mom before she passed away a few years ago. The apartment buildings here are lower-end and smaller, with elevators only going to some floors. Every weekend, my mom, her sister, and I would take the 811 bus up to the apartment here and have dinner together."}
                                mapLink = 'https://www.google.com/maps/embed?pb=!4v1677480035760!6m8!1m7!1sCAoSLEFGMVFpcE5ZQmJINHhJYzMzcF9fcERQbWNaWkVwdXJKWFFVa09EWVowZFdI!2m2!1d22.3926121!2d114.1944089!3f357.4852872713759!4f27.53816662514629!5f1.1924812503605782'
                                />
            </Grid>
        </Box>  
      </div>
      
    )
}

export default SuiWo;