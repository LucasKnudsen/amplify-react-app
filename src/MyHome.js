import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 240,
    width: 600,
  },
  paper1: {
    height: 240,
    width: 600,
  },  
  paper2: {
    height: 440,
    width: 1210,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function MyHome() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>        
      <Grid item xs={12}>       
      <Typography variant="subtitle2" gutterBottom>
        OVERVIEW
      </Typography>  
      <Typography variant="h6" gutterBottom>
        Select US Equities
      </Typography>   
      <Typography variant="caption" display="block" gutterBottom>
        Check gain and volatility. All equities are selected from S&P 500
      </Typography>              
        <Grid container justify="center" spacing={spacing}>
            <Grid key="0" item>
              <Paper className={classes.paper} />
            </Grid>
            <Grid key="1" item>
              <Paper className={classes.paper1} />
            </Grid> 
            <Grid key="2" item>
              <Paper className={classes.paper2} />
            </Grid>                          
        </Grid>
      </Grid>

    </Grid>
  );
}