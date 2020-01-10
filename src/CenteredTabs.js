import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    marginLeft: 50,
    marginRight: 50,
    width: '60%',
    marginLeft: '20%'
    
  },
});

export default function CenteredTabs({ value, setValue, handleChange }) {
  const classes = useStyles();
  

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        spac="true"
      >
        <Tab label=" Personalized Notes " />
        <Tab label=" Centralized Notes " />
      </Tabs>
    </Paper>
  );
}