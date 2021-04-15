import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import GeneralDetailsForm from '../components/GeneralDetailsForm';
import CustomSlider from '../shared/CustomSlider'
import PortfolioTable from '../shared/PortfolioTable'
import { Container } from '@material-ui/core';

const portfolioApiStructure = {
  periodStart: 'string',
  periodEnd: 'string',
  minPrice: 'float',
  maxPrice: 'float',
  minCorrelation: 'float',
  rankStart: 'int',
  rankEnd: 'int'
}

const MyHome = () => {
  const [formData, setFormData] = useState(portfolioApiStructure)
  const [slider1, setSlider1] = useState(1)
  const [slider2, setSlider2] = useState(1)

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
              <GeneralDetailsForm formData={formData} setFormData={setFormData} />
            </Paper>
          </Grid>

          <Grid key="1" item>
            <Paper style={styles.itemContainer} >
              <Typography style={styles.itemTitle} align='center' variant="subtitle1" gutterBottom>
                Portfolio #1
                </Typography>
              <CustomSlider value={slider1} setValue={setSlider1} id='slider-1' text='Select range of volatility (1-100)' />
              <PortfolioTable data={[]} id='table-1' title='Info table' />
            </Paper>
          </Grid>

          <Grid key="2" item>
            <Paper style={styles.itemContainer} >
              <Typography style={styles.itemTitle} align='center' variant="subtitle1" gutterBottom>
                Portfolio #2
                </Typography>
              <CustomSlider value={slider2} setValue={setSlider2} id='slider-2' text='Select range of volatility (1-100)' />
              <PortfolioTable data={[]} id='table-2' title='Info table' />
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

export default MyHome

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
