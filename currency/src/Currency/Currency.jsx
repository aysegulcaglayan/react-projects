import React, { useState } from 'react'
import '../css/Currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_wqeg7ctbjcb0S0F5Xo2HKt1hBr68zS4CGDD91XYw";



function Currency() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, seToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);
    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)

        const result = amount * response.data.data[toCurrency].toFixed(2);
        setResult(result)


    }
    return (
        <div>
            <div className="currency-div">
                <div className="title">
                    <h3>DÖVİZ KURU UYGULAMASI</h3>
                </div>

                <div className="content">
                    <input
                        value={amount} onChange={(e) => setAmount(e.target.value)} type='number' className='amount'></input>
                    <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>TRY</option>
                    </select>
                    <FaRegArrowAltCircleRight style={{ fontSize: "30px", color: "#fff", marginRight: "15px", marginTop: "20px" }} />
                    <select onChange={(e) => seToCurrency(e.target.value)} className='to-currency-option'>
                        <option >TRY</option>
                        <option >EUR</option>
                        <option >USD</option>
                    </select>
                    <input value={result} onChange={(e) => (e.target.value)} type='number' className='result'></input>
                </div>
                <div className="button">
                    <button onClick={exchange} >Çevir</button>
                </div>
            </div>
        </div>
    )
}

export default Currency
