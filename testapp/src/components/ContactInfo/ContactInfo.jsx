import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    input: {
        '& > *': {
            margin: theme.spacing(1),
            width: '60%',
        },
    },
}));

const ContactInfo = () => {
    

    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return <Grid container spacing = {2}>
        <Grid item xs={6} className = {classes.input}>
            <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl></Grid>
        <Grid item xs={6} className = {classes.input}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6} className = {classes.input}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6} className = {classes.input}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6} className = {classes.input}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6} className = {classes.input}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6} className = {classes.input}> 
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6} className = {classes.input}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6} className = {classes.input}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6} className = {classes.input}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6} className = {classes.input}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
    </Grid>
}

export default ContactInfo;