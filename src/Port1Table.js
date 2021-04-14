import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: '35vh',
  },
});

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('Gain', 159, 6.0, 24, 4.0),
  createData('Average Drawdown', 237, 9.0, 37, 4.3),
  createData('Max Drawdown (DD)', 262, 16.0, 24, 6.0),
  createData('Recovery time for max DD', 305, 3.7, 67, 4.3),
  createData('Percentage no ESG score', 356, 16.0, 49, 3.9),
];

export default function Port1Table() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Infotable</TableCell>
            <TableCell align="right"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}