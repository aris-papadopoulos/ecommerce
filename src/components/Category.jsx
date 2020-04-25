import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions';
import '../styles/category.scss';

const Category = (props) => {

    const { products, listProducts } = props;
    const { id } = props.match.params;

    const prevID = usePrevious(id);

    useEffect(() => {
        if (id !== prevID) {
          listProducts(id);
        }
    }, [products, listProducts, id, prevID]);

    const createMarkup = (excerpt) => { return {__html: excerpt}; };

    const showPrice = (price) => (price / 100).toFixed(2);

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

    return (
        <main className="category">
            <div className="category__wrapper">
                {products.map(data => productCard(data))}
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
        products: state.products
    }
}

export default connect(mapStateToProps, { listProducts })(Category);
