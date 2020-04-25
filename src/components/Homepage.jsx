import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listCategories } from '../actions';
import '../styles/homepage.scss';

const Homepage = (props) => {

    const { categories, listCategories } = props;

    useEffect(() => {
        if (!categories.length) {
            listCategories();
        }
    }, [categories, listCategories]);

    const category = (data) => {
        return (
            <div className="category" key={data.id}>
                <img className="item" src={data.image_url} />
                <h3>{data.title}</h3>
            </div>
        )
    }

    return (
        <main className="categories">
            <div className="categories__wrapper">
                {categories.map(data => category(data))}
            </div>
        </main>
    );
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, { listCategories })(Homepage);
