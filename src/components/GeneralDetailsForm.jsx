import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const GeneralDetailsForm = ({ formData, setFormData }) => {
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [minCorrelation, setMinCorrelation] = useState();

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
  };
  const handleMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  };
  const handleMinCorrelation = (event) => {
    setMinCorrelation(event.target.value);
  };

  const handleStartDate = (event) => {
    setFormData({
      ...formData,
      [formData.event.target.name]: event.target.value
    })
  }

  const handleEndDate = (event) => {

  }

  const handleChange = (event) => {
    debugger
    // setFormData({
    //   ...formData,
    //   formData[event.target.name]: event.target.value
    // })
    debugger
  }

  return (
    <form style={styles.container} noValidate>
      <TextField
        id="date"
        name='periodStart'
        label="Start date"
        type="date"
        defaultValue="2020-01-01"
        value={formData.periodStart}
        onChange={handleChange}
        style={styles.inputField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        name='periodEnd'
        label="End date"
        type="date"
        defaultValue="2021-01-01"
        value={formData.periodEnd}
        onChange={handleChange}
        style={styles.inputField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl style={styles.formControl}>
        <InputLabel id="minimum-price">Minimum price</InputLabel>
        <Select
          labelId="minimum-price"
          name='minPrice'
          id="minimum-price"
          value={minPrice}
          onChange={handleMinPrice}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>

      <FormControl style={styles.formControl}>
        <InputLabel id="maximum-price">Maximum price</InputLabel>
        <Select
          labelId="maximum-price"
          id="maximum-price"
          name='maxPrice'
          value={maxPrice}
          onChange={handleMaxPrice}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>

      <FormControl style={styles.formControl}>
        <InputLabel id="minimum-correlation">Minimum correlation</InputLabel>
        <Select
          labelId="minimum-correlation"
          id="minimum-correlation"
          name='minCorrelation'
          value={minCorrelation}
          onChange={handleMinCorrelation}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>

    </form>
  );
}
export default GeneralDetailsForm

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  inputField: {
    width: 200,
    margin: '10px 0'
  },
  formControl: {
    minWidth: 120,
    margin: '2px 0'
  }
}