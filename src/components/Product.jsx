import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProduct, clearSingleProduct } from '../actions';
import { usePrevious, showPrice } from '../utilities';
import '../styles/product.scss';

const Product = (props) => {
    

    const { product, getProduct, clearSingleProduct } = props;
    const { id } = props.match.params;

    const prevID = usePrevious(id);

    useEffect(() => {
        if (id !== prevID) {
            console.log(id, prevID);
            getProduct(id);
        }
    }, [id, prevID, getProduct]);
    
    // Mount / Unmount events only
    useEffect(() => {
        return () => {
            clearSingleProduct()
        }
    }, [clearSingleProduct]);


    console.log(product, id);
    
    const Product = () => {
        return (
            <>
                <div className="product__image">
                    <img src={product.image_url} alt={product.title} />
                </div>
                <div className="product__info">
                    <h2 className="product__title">{product.title}</h2>
                    <p className="product__price">{`${showPrice(product.price)}€`}</p>
                    <p className="product__description" dangerouslySetInnerHTML={createMarkup(product.description)}></p>
                </div>
            </>
        )
    }

    const createMarkup = (excerpt) => { return {__html: excerpt}; };

    return (
        <main className="product">
            <div className="product__wrapper">
                {(product) ? <Product /> : null}
            </div>
        </main>
    );
}


function mapStateToProps(state) {
    return {
        product: state.single_product
    }
}

export default connect(mapStateToProps, { getProduct, clearSingleProduct })(Product);
