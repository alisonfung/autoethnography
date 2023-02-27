import React from 'react' 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import InputBoxButton from '../components/InputBoxButton';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

function Pier(){

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
                        4. Central Ferry Pier
                    </Typography>
                </Grid>
                <InputBoxButton answer = '3'
                                route = '/FoTan'
                                startAdornment = {<InputAdornment position="start">Pier No.</InputAdornment>} 
                                hint = 'If you take the ferry from Discovery Bay to Central, which pier do you arrive at?'
                                location = 'Central'
                                description = {'The fastest way to get to the main city from Discovery Bay is by ferry to Central on Hong Kong Island. Of the three main regions, this stretch of Hong Kong Island contains the most iconic buildings and busiest malls. Since I live in the suburbs back in California, this place is what I always think of when I imagine a "city". '}
                                mapLink = 'https://www.google.com/maps/embed?pb=!4v1677479172704!6m8!1m7!1sCAoSLEFGMVFpcE94aG9fX0RLcm5uU04tRWZKTks5MUpYUVFBdnlNZmhKU2ZmZDh5!2m2!1d22.2791286!2d114.1610442!3f160.87353714587164!4f24.656860557799064!5f1.1924812503605782'
                                 />
            </Grid>
        </Box>  
      </div>
      
    )
}

export default Pier;