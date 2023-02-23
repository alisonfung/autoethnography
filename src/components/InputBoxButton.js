import React, {useState} from 'react' 
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Typography from '@mui/material/Typography';


function InputBoxButton({answer, route, endAdornment="", startAdornment="", hint}){

    const [field, setField] = useState('');
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [displayHint, setDisplayHint] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (answer === field) {
            window.location.href = route
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
