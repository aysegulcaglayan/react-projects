import React from 'react'
import '../css/Products.css'
import { useNavigate } from 'react-router-dom';
function Product({ product }) {
    const { id, name, price } = product;
    const navigate = useNavigate();//Tıklanıldığında bir URL'e yönlendirir.
    return (
        <div className='product-block'>
            <div className='title'> Ürün Detayı</div>
            <p>İsmi:{name}</p>
            <p>Fiyatı: {price}</p>
            <button onClick={() => navigate("/product-details/" + id)}> Detayına Git</button>
        </div>
    )
}

export default Product
