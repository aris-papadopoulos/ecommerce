import React, { useState } from 'react';
import { connect } from 'react-redux';
import { listProducts, changeCategoryParams } from '../actions';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { showPrice } from '../utilities';


const PriceRange = (props) => {

    const { params, changeCategoryParams, listProducts } = props;
    const { price_min, price_max, id } = props.category;

    const min = Math.floor(showPrice(price_min));
    const max = Math.ceil(showPrice(price_max));

    const [range, setRange] = useState([min, max]);

    const rangeChange = (e, newValue) => {
        const newParams = {
            ...params,
            min_price: newValue[0] * 100,
            max_price: newValue[1] * 100,
            page: 1
        }
        // Update user state
        changeCategoryParams(newParams);
        // Fetch products based on new parameters
        listProducts(id, newParams)
    }

    return (
        <div>
            <Typography id="price-range" gutterBottom>Εύρος τιμής</Typography>
            <Slider
                min={min}
                max={max}
                value={range}
                onChange={(e, value) => setRange(value)}
                onChangeCommitted={(e, value) => rangeChange(e, value)}
                valueLabelDisplay="auto"
                aria-labelledby="price-range"
                id={'range-slider'}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        category: state.single_category,
        params: state.user.categoryParams
    }
}

export default connect(mapStateToProps, { listProducts, changeCategoryParams })(PriceRange);
