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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function InputBoxButton({answer, route, endAdornment="", startAdornment="", hint, location, description, mapLink}){

    const [field, setField] = useState('');
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [displayHint, setDisplayHint] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (answer === field.trim().toLowerCase()) {
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
                            component = "iframe"
                            src = {mapLink}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ wordWrap: "break-word" }}>
                            {location}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ wordWrap: "break-word" }}>
                            {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"
                                endIcon = {<ArrowForwardIcon/>}
                                onClick = {() => {
                                    window.location.href = route;
                                }}
                            >Continue</Button>
                    
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
                {displayHint && <Typography variant="subtitle1" style={{ wordWrap: "break-word" }}
                        >
                    HINT: {hint}
                    </Typography>
                }                   
                </Grid>
                </Grid>
    )
}

export default InputBoxButton;
