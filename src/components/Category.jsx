import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts, clearProducts, getCategory, clearCategory, changeCategoryParams, clearCategoryParams } from '../actions';
import Toolbar from './Toolbar';
import Pagination from '@material-ui/lab/Pagination';
import '../styles/category.scss';

const Category = (props) => {

    const { products, category, getCategory, listProducts, clearProducts, 
        clearCategory, params, changeCategoryParams, clearCategoryParams } = props;
    const { id } = props.match.params;

    const prevID = usePrevious(id);

    // Fetch products when URL changes
    useEffect(() => {
        if (id !== prevID) {
            listProducts(id, params);
            getCategory(id);
        }
    }, [params, listProducts, getCategory, id, prevID]);

    // Mount / Unmount events only
    useEffect(() => {
        return () => {
            clearProducts();
            clearCategory();
            clearCategoryParams();
        }
    }, [clearProducts, clearCategory, clearCategoryParams]);

    const createMarkup = (excerpt) => { return {__html: excerpt}; };

    const showPrice = (price) => (price / 100).toFixed(2);

    const pageChange = (e, page) => {
        const newParams = { ...params, page }
        // Update user state
        changeCategoryParams(newParams);
        // Fetch products based on new parameters
        listProducts(id, newParams)
    }

    const productCard = (data) => {
        return (
            <div className="product-card" key={data.id}>
                <Link to={`/product/${data.slug_path}`}>
                    <div className="product-card__image">
                        <img src={data.image_url} alt={data.title} />
                    </div>
                    <h3 className="product-card__title">{data.title}</h3>
                    {(data.excerpt) 
                    ? <p className="product-card__excerpt" dangerouslySetInnerHTML={createMarkup(data.excerpt)}></p> 
                    : null}
                    <span className="product-card__price">{showPrice(data.price)}€</span>
                </Link>
            </div>
        )
    }

    const categoryInfo = (data) => {
        return (
            <div className="category-banner">
                <img src={data.image_url} alt={data.title} />
                <div className="category-banner__info">
                    <h2>{data.title}</h2>
                    <p>Προϊόντα: {data.products_count}</p>
                </div>
            </div>
        )
    }

    return (
        <main className="category">
            <div className="category__wrapper">
                {(category) 
                ? 
                <>
                    {categoryInfo(category)}
                    <Toolbar category={category} />
                </>
                : null}
                <div className="product-list">
                    {products.map(data => productCard(data))}
                </div>
                {(category) 
                ?   <div className="pagination">
                        <Pagination count={Math.ceil(category.products_count / params.limit)} page={params.page} onChange={pageChange} /> 
                    </div>
                : null}
            </div>
        </main>
    );
}

// Hook - Used to keep prevProps on functional components
function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    
    // Store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]); // Only re-run if value changes
    
    // Return previous value (happens before update in useEffect above)
    return ref.current;
}

function mapStateToProps(state) {
    return {
        products: state.products,
        category: state.single_category,
        params: state.user.categoryParams
    }
}

export default connect(mapStateToProps, { listProducts, clearProducts, getCategory, clearCategory, changeCategoryParams, clearCategoryParams })(Category);
