import React from 'react'

import { Link } from 'react-router-dom'
import './converter.css'

function Converter () {
    return (
        
            <div className= "converter">
                <div className = "converterbar">
                    <p><strong>Conversor de Moeda</strong></p>
                </div>
                
                    <Link className= "getout" as={Link} to="/">
                        Sair
                    </Link>
                
                <div className="converter-title">

                    <div className = "converter-value">
                        <h3>Dolar para Real</h3>
                        <div className="converter-converterInputName">
                            <input
                                type="text"
                                placeholder="EX: 5 = 27,69"
                            />
                                
                            <button className="buttonconverter" type="submit">
                                Converter
                            </button>
                        </div>

                        <h3>Dolar para Euro</h3>
                        <div className="converter-converterInputName2">
                            <input
                                type="text"
                                placeholder="EX: 5 = 12,58"
                            />
                            <button className="buttonconverter" type="submit">
                                Converter
                            </button>
                        </div>
                    </div>    
                </div>
            </div>
    )
}

export default Converter