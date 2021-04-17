import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Line } from 'react-chartjs-2';

const LineGraph = ({ data, loading }) => {

  let finalData
  if (data) {
    finalData = {
      labels: data.dates,
      datasets: [
        {
          label: Object.getOwnPropertyNames(data.portfolios)[0],
          data: Object.values(data.portfolios)[0],
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          pointBorderWidth: 1,
          pointBorderColor: 'none',
          pointBackgroundColor: 'none',
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#333',
          pointHoverBorderColor: 'rgba(75,192,192,1)',
          pointHoverBorderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 5,
        },
        {
          label: Object.getOwnPropertyNames(data.portfolios)[1],
          data: Object.values(data.portfolios)[1],
          fill: false,
          borderColor: 'rgba(240, 52, 52, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          pointBorderWidth: 1,
          pointBorderColor: 'none',
          pointBackgroundColor: 'none',
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#333',
          pointHoverBorderColor: 'rgba(240, 52, 52, 1)',
          pointHoverBorderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 5,
        }
      ]
    }
  }

  return (
    <>
      {data ? (
        <Line
          data={finalData}
        />
      ) : (
          loading ? (
            <CircularProgress size={75} color='primary' />
          ) : (
              <Typography>Calculate to display a chart!</Typography>
            ))
      }
    </>
  )
}

export default LineGraph
