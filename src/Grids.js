
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Jgrid from './Jgrid';

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

export default function SpacingGrid({ notesArr }) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            {notesArr.map(value => <Jgrid key={value} />)}
        </Grid>
    </Grid>
  );
}