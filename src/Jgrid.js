import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100px',
      height: 'auto',
      padding: 4,
      width: 250,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

function Jgrid({ value }){
    const classes = useStyles();
    return (
        <Grid key={value} item>
            <Paper className={classes.paper} >
            <TextField
            id="filled-textarea"
            label="Enter note here"
            placeholder="Placeholder"
            multiline
            //  variant="filled"
            // rowsMax="auto"
            // defaultValue="Default Value"
            // placeholder="Enter Note here"
            />
            </Paper>
    </Grid>
    )
}

export default Jgrid;