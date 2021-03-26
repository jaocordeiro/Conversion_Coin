import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './converter.css'
import { urlBaseApi } from '../../config/api'
import axios from 'axios'
//import { Alert, Select } from 'react'

class Converter extends Component {
    constructor(props){ 
        super(props)
      
        this.state={
          listcoins: [],
          live: []
        }
    
        this.getlistCoins = this.getlistCoins.bind(this);
        //this.getlive = this.getlive.bind(this);
      }

      componentDidMount(){
        this.getlistCoins();
        //this.getlive();
      }

      getlistCoins= async() => {
        await axios.get(`${urlBaseApi}listCoins/`)
        .then(res => {
          this.setState({listcoins: res.data});
          console.log(res.data);
        }).catch((error) => {
          console.log(error);
        });
      }
      

      /* getlive= async() => {
        await axios.get(`${urlBaseApi}live/`)
        .then(res => {
          this.setState({live: res.data});
          console.log(res.data);
        }).catch((error) => {
          console.log(error);
        });
      }
 */
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
                            <h3>Converter</h3>

                            <select className = "coins"
                              //value = {this.state.listcoins}
                              onChange = {this.changelistCoins}
                            > 
                            </select>

                            <div className="converter-converterInputName">
                                <input
                                    type="text"
                                    placeholder="Insira um valor"
                                    name= "converter"
                                />

                                <button className="buttonconverter" 
                                    //onClick = {this.getCoinsFromApi}
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