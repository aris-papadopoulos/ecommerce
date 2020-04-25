import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions';
import '../styles/category.scss';

const Category = (props) => {

    const { products, listProducts } = props;
    const { id } = props.match.params;

    console.log(props)

    useEffect(() => {
        if (!products.length) {
          listProducts(id);
        }
    }, [products, listProducts, id]);

    const createMarkup = (excerpt) => { return {__html: excerpt}; };

    const showPrice = (price) => (price / 100).toFixed(2);

    const productCard = (data) => {
        return (
            <div className="product-card" key={data.id}>
                <Link to={`/product/${data.slug_path}`}>
                    <img className="product-card__image" src={data.image_url} alt={data.title} />
                    <h3 className="product-card__title">{data.title}</h3>
                    <p className="product-card__excerpt" dangerouslySetInnerHTML={createMarkup(data.excerpt)}></p>
                    <span className="product-card__price">{showPrice(data.price)}€</span>
                </Link>
            </div>
        )
    }

    return (
        <main className="categories">
            <div className="categories__wrapper">
                {products.map(data => productCard(data))}
            </div>
        </main>
    );
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, { listProducts })(Category);
