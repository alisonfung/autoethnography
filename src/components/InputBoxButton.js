import React, {useState} from 'react' 
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function InputBoxButton({answer, route, endAdornment="", startAdornment="", hint, image, imageTitle, location, description}){

    const [field, setField] = useState('');
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [displayHint, setDisplayHint] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (answer === field) {
            setAnchorEl(e.currentTarget);
        } else {
            setError(true);
            setErrorText('Incorrect.')
            return null;
        }
    };
    const handleChangeValue = (e) => {
        setField(e.target.value);
    };
    const handleHint = () => {
        setDisplayHint(displayHint => !displayHint);

    }


    // const handleKeypress = (e) => {
    //     setField(e.target.value);
    //     if (e.key === 'Enter') {
    //         handleSubmit();
    //         alert('pressed')
    //     }
    // };

    return (
        <Grid container 
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center">
            
        <Grid item>
                    <TextField
                        onChange={handleChangeValue} 
                        //onKeyPress={handleKeypress}
                        color="secondary"
                        label="Answer"
                        value = {field}
                        error = {error}
                        helperText= {errorText}
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            endAdornment: endAdornment,
                            startAdornment: startAdornment,
                            
                        }}
                        />
                </Grid>
                <Grid item>
                    <Button variant="outlined"
                    color = "secondary"
                    endIcon = {<SendIcon/>}
                    //type="submit"
                    onClick = {handleSubmit} >
                    submit
                     </Button>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            //onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                            }}
                        >
                        <Card sx={{ width: 500 }}>
                        <CardMedia
                            sx={{ height: 350 }}
                            image= {image}
                            title= {imageTitle}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {location}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Grid item>
                            <Grid 
                            container
                            spacing={5}
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item>
                            <Button size="small"
                                onClick = {() => {
                                    window.location.href = "/";
                                }}
                            >Continue</Button>
                            </Grid>
                            <Grid item>
                            <Button size="small">Open in Google Maps</Button>
                            </Grid>
                            </Grid>
                        </Grid>
                        </CardActions>
                        </Card>
                        </Popover>
                </Grid>
                <Grid item>
                    <Button variant="contained"
                        endIcon = {<LightbulbIcon/>}
                        onClick = {handleHint}
                         >
                        Hint
                    </Button>
                </Grid>
                <Grid item>
                {displayHint && <Typography variant="subtitle1"
                        >
                    HINT: {hint}
                    </Typography>
                }                   
                </Grid>
                </Grid>
    )
}

export default InputBoxButton;
