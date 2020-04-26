import React from 'react';
import { connect } from 'react-redux';
import PriceRange from './PriceRange';
import DropdownSelect from './DropdownSelect';

const Toolbar = (props) => {

    const { category } = props;

    const sortBy = {
        id: 'sort', 
        label: 'Ταξινόμηση κατά',
        labelWidth: 120,
        options: [{
            label: 'Τιμή',
            value: 'price'
        },
        {
            label: 'Τίτλος',
            value: 'title'
        }]
    };
    const orderBy = {
        id: 'order', 
        label: 'Σειρά', 
        labelWidth: 40,
        options: [{
            label: 'Αύξουσα',
            value: 'asc'
        },
        {
            label: 'Φθίνουσα',
            value: 'desc'
        }]
    };

    return (
        <div className="category-options">
            <PriceRange category={category} />
            <DropdownSelect values={sortBy} />
            <DropdownSelect values={orderBy} />
        </div>
    );
}

export default connect(null, null)(Toolbar);
