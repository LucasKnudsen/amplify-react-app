import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import GeneralDetailsForm from '../components/GeneralDetailsForm';
import Port1Table from '../Port1Table';
import Port2Table from '../Port2Table';
import Port1slider from '../Port1slider';
import Port2slider from '../Port2slider';
import { Container } from '@material-ui/core';

const styles = {
  root: {
    paddingLeft: 240,
    textAlign: 'center',
    maxWidth: '98vw'
  },
  mainContainer: {
    marginTop: 30,
    marginBottom: 30
  },
  itemContainer: {
    textAlign: 'left',
    padding: 15,
    height: 352,
  },
  graphContainer: {
    height: 440,
    width: '101vh',
  },
  itemTitle: {
    fontWeight: 'bold',
    textDecoration: 'underline'
  }
}


export default function MyHome() {

  return (
    <Grid container style={styles.root} spacing={1}>
      <Grid item xs={12} >
        <Container style={styles.mainContainer}>
          <Typography variant="h6" gutterBottom>
            OVERVIEW
      </Typography>
          <Typography variant="h4" gutterBottom>
            Select US Equities
      </Typography>
          <Typography variant="subtitle2" display="block" gutterBottom>
            Check gain and volatility. All equities are selected from S&P 500
      </Typography>
        </Container>
        <Grid
          container
          textAlign="left"
          justify="center"
          spacing={4}
          direction="row"
          alignItems="center"
        >

          <Grid key="0" item>
            <Paper style={styles.itemContainer} >
              <Typography style={styles.itemTitle} align='center' variant="subtitle1" gutterBottom>
                General Details
              </Typography>
              <GeneralDetailsForm />
            </Paper>
          </Grid>
          <Grid key="1" item>
            <Paper style={styles.itemContainer} >
              <Typography style={styles.itemTitle} align='center' variant="subtitle1" gutterBottom>
                Portfolio #1
                </Typography>
              <Port1slider />
              <Port1Table />
            </Paper>
          </Grid>
          <Grid key="2" item>
            <Paper style={styles.itemContainer} >
              <Typography style={styles.itemTitle} align='center' variant="subtitle1" gutterBottom>
                Portfolio #2
                </Typography>
              <Port2slider />
              <Port2Table />
            </Paper>
          </Grid>

          <Grid key="3" item>
            <Paper style={styles.graphContainer} />
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
}