import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './App.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import StartDate from './pickdate';
import EndDate from './enddate';
import MinPrice from './MinPrice';
import MaxPrice from './MaxPrice';
import MinCorrel from './MinCorrel';
import Port1Table from './Port1Table';
import Port2Table from './Port2Table';
import Port1slider from './Port1slider';
import Port2slider from './Port2slider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper0: {
    height: 340,
    width: '20vh',
    textAlign: 'left',
    padding: theme.spacing(2),
  },
  paper: {
    height: 340,
    width: '39vh',
    textAlign: 'left',
    padding: theme.spacing(2),
  },  
  paper1: {
    height: 340,
    width: '39vh',
    textAlign: 'left',
    padding: theme.spacing(2),
  },  
  paper2: {
    height: 440,
    width: '101vh',
  },
  paper3: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },  
  control: {
    padding: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  paper3: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function MyHome() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={1}>        
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
        <Grid 
          container 
          justify="center" 
          spacing={spacing}
          container
          direction="row"
          alignItems="center"
        >
            <Grid key="0" item>
              <Paper className={classes.paper0}>
                <Typography variant="subtitle2" gutterBottom>
                  General Details
                </Typography>  
                <StartDate /> 
                <EndDate />
                <MinPrice />
                <MaxPrice />
                <MinCorrel />
                
              </Paper>
            </Grid>          
            <Grid key="0" item>
              <Paper className={classes.paper}>
                <Typography variant="subtitle2" gutterBottom>
                  Portfolio #1
                </Typography> 
                <Port1slider />
                <Port1Table />
              </Paper>
            </Grid>
            <Grid key="1" item>
              <Paper className={classes.paper1}>
              <Typography variant="subtitle2" gutterBottom>
                  Portfolio #2
                </Typography> 
                <Port2slider />
                <Port2Table />
              </Paper>
            </Grid> 
            <Grid key="2" item>
              <Paper className={classes.paper2} />
            </Grid>                          
        </Grid>
      </Grid>

    </Grid>
  );
}