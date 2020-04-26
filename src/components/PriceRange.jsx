import React, { useState } from 'react';
import { connect } from 'react-redux';
import { listProducts } from '../actions';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const PriceRange = (props) => {

    const { price_min, price_max, id } = props.category;

    const showPrice = (price) => (price / 100).toFixed(2);

    const min = Math.floor(showPrice(price_min));
    const max = Math.ceil(showPrice(price_max));

    const [range, setRange] = useState([min, max]);
    

    const rangeChange = (e, newValue) => {
        setRange(newValue);
    }

    return (
        <div>
            <Typography id="price-range" gutterBottom>Εύρος τιμής</Typography>
            <Slider
                min={min}
                max={max}
                value={range}
                onChange={rangeChange}
                onChangeCommitted={() => listProducts(id)}
                valueLabelDisplay="auto"
                aria-labelledby="price-range"
                style={{width: 300}}
            />
        </div>
    )
}


export default connect(null, { listProducts })(PriceRange);
