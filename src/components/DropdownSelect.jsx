import React, { useState } from 'react';
import { connect } from 'react-redux';
import { listProducts } from '../actions';

// MUI components
import { 
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    inputLabel: {
        transform: 'translate(8px, -14px) scale(0.75)'
    },
    formControlFilters: {
        padding: 0,
        marginRight: 10,
        backgroundColor: '#fff',
    },
    outlinedInput: {
        width: 110,
        fontSize: 13,
        padding: '10px 10px',
        [theme.breakpoints.down('xs')]: {
            width: 88,
        },
    },
  }));

const DropdownSelect = (props) => {
    console.log(props.values);
    const { label, labelWidth, id, options } = props.values;

    
    const classes = useStyles();
    
    const [value, setValue] = useState(options[0].value);

    return (
        <FormControl variant="outlined" className={classes.formControlFilters} >
            <InputLabel className={classes.inputLabel}>{label}</InputLabel>
            <Select value={value}
            onChange={(e) => setValue(e.target.value)}
            input={<OutlinedInput labelWidth={labelWidth} id={id} />}
            inputProps={{className: classes.outlinedInput}}
            >
                {(options.map(option => <MenuItem key={option.label} value={option.value}>{option.label}</MenuItem>))}
                {/* <MenuItem value="price">Price</MenuItem>
                <MenuItem value="title">Title</MenuItem> */}
            </Select>
        </FormControl>  
    )
}

export default connect( null, { listProducts } )(DropdownSelect);