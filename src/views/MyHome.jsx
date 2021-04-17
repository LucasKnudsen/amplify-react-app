import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { useLocation } from "react-router-dom";
import axios from 'axios'

import GeneralDetailsForm from '../components/GeneralDetailsForm';
import CustomSlider from '../shared/CustomSlider'
import PortfolioTable from '../shared/PortfolioTable'
import LineGraph from '../shared/LineGraph'
import { fixture } from './portfolioFixture.js'
import { setCategory, setHeader } from '../modules/overviewServices'

const generalDetails = {
  periodStart: '01/01/2020',
  periodEnd: '01/01/2021',
  minPrice: 2,
  maxPrice: 2500,
  minCorrelation: 0.85,
}

const MyHome = () => {
  const [formData, setFormData] = useState(generalDetails)
  const [slider1, setSlider1] = useState([1, 8])
  const [slider2, setSlider2] = useState([3, 11])
  const [loading, setLoading] = useState(false)
  const [graphData, setGraphData] = useState()
  let location = useLocation()

  const calculate = async () => {
    let category = setCategory(location)
    setLoading(true)
    let body = {
      portfolios: [{
        ...formData,
        rankStart: slider1[0],
        rankEnd: slider1[1],
        category
      },
      {
        ...formData,
        rankStart: slider2[0],
        rankEnd: slider2[1]
      },
      ]
    }
    try {
      let response = await axios.post('https://nw70g87jni.execute-api.us-east-1.amazonaws.com/prod/portfolio/performance-graph', body)
      setGraphData(response.data)
    } catch (error) {
      console.log(error)
    }
    debugger

    setLoading(false)
  }

  return (
    <Grid container style={styles.root} >
      <Grid item xs={12} >
        <Container style={styles.mainContainer}>
          <Typography variant="h6" gutterBottom>
            OVERVIEW
      </Typography>
          <Typography variant="h4" gutterBottom>
            {setHeader(location)}
          </Typography>
          <Typography variant="subtitle2" display="block" gutterBottom>
            Check gain and volatility. All equities are selected from S&P 500
      </Typography>
        </Container>
        <Grid
          container
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

          <Button style={styles.button} variant="contained" color="primary" size='large'
            onClick={() => calculate()}
          >
            Calculate
          </Button>

          <Grid key="3" item>
            <Paper style={styles.graphContainer} >
              <LineGraph data={graphData} loading={loading} />
            </Paper>
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
    padding: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60vw',
    height: '25vw'
  },
  itemTitle: {
    fontWeight: 'bold',
    textDecoration: 'underline'
  },
  button: {
    margin: '25px 35vw',
  }
}
