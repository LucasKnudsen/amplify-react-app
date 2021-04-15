import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography'
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const PortfolioTable = ({ data, id, title }) => {
  const labels = ['Gain', 'Average Drawdown', 'Max Drawdown', 'Recovery time for max DD', 'Percentage no-ESG score']
  const mockData = [
    { value: 156 },
    { value: 23 },
    { value: 12 },
    { value: 76 },
    { value: 76 },
  ]

  return (
    <TableContainer component={Paper}>
      <Typography style={styles.title}>{title}</Typography>
      <Table style={styles.table} size="small" aria-label={id}>
        <TableHead >
        </TableHead>
        <TableBody>
          {mockData.map((item, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {labels[i]}
              </TableCell>
              <TableCell align="right">{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PortfolioTable

const styles = {
  table: {
    minWidth: '35vh',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15
  }
}