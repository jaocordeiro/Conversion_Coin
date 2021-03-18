import React, { Component, Alert } from 'react'

import { urlBaseApi } from '../../Config/api'

import 'react-router-dom'
import './converter.css'

class Converter extends Component {
    
    constructor(props) {
        super(props);
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
          Alert.alert("Aviso!", "O Dólar é a única moeda permitida para conversão");
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
        return(
        
            <div className= "converter">
                <div className = "converterbar">
                    <p><strong>Conversor de Moedas</strong></p>
                </div>
                    
                
                <div className="converter-title">

                    <form className= "inputform">
                        <div className = "converter-value">
                            <h3>Real para Dolar</h3>
                            <div className="converter-converterInputName">
                                <input
                                    type="text"
                                    placeholder="Digite o valor"
                                />
                                        
                                <button className="buttonconverter" 
                                    type="submit">
                                    Converter
                                </button>
                            </div>

                            <h3>Dolar para Real</h3>
                            <div className="converter-converterInputName2">
                                <input
                                    type="text"
                                    placeholder="Digite o valor"
                                />

                                <button className="buttonconverter" 
                                    type="submit">
                                    Converter
                                </button>
                            </div>
                        </div>    
                    </form>
                </div>        
            </div>
        )    
    }
}

export default Converter