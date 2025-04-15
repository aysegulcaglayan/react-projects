import React from 'react'
import Product from '../components/Product'
import '../css/Products.css'
import { products } from '../data/products'
function Products() {

    return (
        <div >
            <h3 className='main-title'>ÜRÜNLER</h3>
            <div className='main'>{

                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))

            }</div>
        </div>
    )
}

export default Products
