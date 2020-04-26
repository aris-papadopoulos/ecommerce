import React from 'react';
import { connect } from 'react-redux';
import PriceRange from './PriceRange';
import DropdownSelect from './DropdownSelect';

const Toolbar = (props) => {

    const sortBy = {
        id: 'sort', 
        label: 'Ταξινόμηση',
        labelWidth: 84,
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
            <PriceRange />
            <div className="category-options__selects">
                <DropdownSelect values={sortBy} />
                <DropdownSelect values={orderBy} />
            </div>
        </div>
    );
}

export default connect(null, null)(Toolbar);
