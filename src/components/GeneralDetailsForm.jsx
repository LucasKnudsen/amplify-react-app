import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const GeneralDetailsForm = ({ formData, setFormData }) => {

  const handleChange = (event) => {
    if (event.target.name.includes('period')) {
      setFormData({
        ...formData,
        [event.target.name]: new Date(event.target.value).toLocaleDateString()
      })
      return
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form style={styles.container} noValidate>
      <TextField
        id="date"
        name='periodStart'
        label="Start date"
        type="date"
        defaultValue="2020-01-01"
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
        onChange={handleChange}
        style={styles.inputField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl style={styles.formControl}>
        <InputLabel id="minimum-price">Minimum stock price ($)</InputLabel>
        <Select
          labelId="minimum-price"
          name='minPrice'
          id="minimum-price"
          value={formData.minPrice}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>

      <FormControl style={styles.formControl}>
        <InputLabel id="maximum-price">Maximum stock price ($)</InputLabel>
        <Select
          labelId="maximum-price"
          id="maximum-price"
          name='maxPrice'
          value={formData.maxPrice}
          onChange={handleChange}
        >
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={1500}>1500</MenuItem>
          <MenuItem value={2000}>2000</MenuItem>
          <MenuItem value={2500}>2500</MenuItem>
          <MenuItem value={3000}>3000</MenuItem>
        </Select>
      </FormControl>

      <FormControl style={styles.formControl}>
        <InputLabel id="minimum-correlation">Minimum correlation ($)</InputLabel>
        <Select
          labelId="minimum-correlation"
          id="minimum-correlation"
          name='minCorrelation'
          value={formData.minCorrelation}
          onChange={handleChange}
        >
          <MenuItem value={0.1}>0.1</MenuItem>
          <MenuItem value={0.5}>0.5</MenuItem>
          <MenuItem value={0.85}>0.85</MenuItem>
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