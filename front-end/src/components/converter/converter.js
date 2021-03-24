import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './converter.css'
import { urlBaseApi } from '../../config/api'
import { Alert } from 'react'

class Converter extends Component {
    constructor(props){ 
        super(props)
        
        this.state = {
            sourceCoin: "USD",
            destinyCoin: "",
            optionsCoins: {},
            convertedValue: ''
        };
        this.getCoinsFromApi();
    }

    getCoinsFromApi = () => {
        fetch(urlBaseApi + 'listCoins/').then(response =>
          response.json()
        ).then(json => {
          this.setState({optionsCoins: json.currencies});
        });
      }

      changeSourceCoin = (coin) => {
        if (coin !== "USD") {
          Alert.alert("Aviso!", " Dólar é a única moeda autorizada para há conversão");
          return
        }
        this.setState({sourceCoin: coin});
      }
    
      submitConversao = () => {
        fetch(urlBaseApi + 'endpoint/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue'
          })
        });
      }

    render() {
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
                                    name= "converter"
                                />
                                    
                                <button className="buttonconverter" 
                                    onClick = "teste()"  
                                    type="submit"
                                    value= "Coverter"
                                >
                                    Converter
                                </button>
                            </div>
                        </div>    
                    </div>
                </div>
        )
    }
}

export default Converter