import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listCategories } from '../actions';
import logo from '../logo.svg';
import '../styles/app.scss';

const Homepage = (props) => {

    const { categories, listCategories } = props;

    useEffect(() => {
        if (!categories.length) {
            listCategories();
        }
    }, [categories, listCategories]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, { listCategories })(Homepage);
