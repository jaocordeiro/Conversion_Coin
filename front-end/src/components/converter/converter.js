import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./converter.css";
import { urlBaseApi } from "../../config/api";
import axios from "axios";
//import { Alert } from 'react'

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listcoins: [],
      live: [],
      saveFromCoin: "",
      saveToCoins: "",
    };

    this.getlistCoins = this.getlistCoins.bind(this);
    //this.getlive = this.getlive.bind(this);
  }

  componentDidMount() {
    this.getlistCoins();
    //this.getlive();
  }

  getlistCoins = async () => {
    await axios
      .get(`${urlBaseApi}listCoins/`)
      .then((res) => {
        this.setState({ listcoins: res.data["currencies"] });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* getlive= async() => {
        await axios.get(`${urlBaseApi}live/`)
        .then(res => {
          this.setState({live: res.data});
          console.log(res.data);
        }).catch((error) => {
          console.log(error);
        });
      }*/

  selectFromCoins = () => {
    var coins = document.getElementById("fromCoins").value;
    if (coins !== "USD") {
      alert("Dólar é a única moeda permitida para referência (USD)");
      return;
    }

    this.setState({ saveFromCoin: coins });
  };

  selectToCoins = () => {
    var coins = document.getElementById("toCoins").value;

    this.setState({ saveToCoin: coins });
  };

  validCoins = () => {
    const { saveToCoin, saveFromCoin } = this.state;
    if (saveToCoin === "" || saveFromCoin === "") {
      alert("Escolhe as moedas");
      return;
    }
  };

  render() {
    const { listcoins } = this.state;
    console.log("Cheguei aquuuiiiiiiiiii", listcoins);

    return (
      <div className="converter">
        <div className="converterbar">
          <p>
            <strong>Conversor de Moeda</strong>
          </p>
        </div>

        <Link className="getout" as={Link} to="/">
          Sair
        </Link>

        <div className="converter-title">
          <div className="converter-value">
            <h3>Selecione as Moedas</h3>

            <select
              className="fromcoins"
              id="fromCoins"
              onChange={this.selectFromCoins}
            >
              <option value="">Select:</option>
              {Object.keys(listcoins).map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>

            <select className="tocoins" id="toCoins">
              <option value="">Select:</option>
              {Object.keys(listcoins).map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>

            <div className="converter-converterInputName">
              <input
                type="number"
                placeholder="Insira um valor"
                name="converter"
              />

              <button
                className="buttonconverter"
                onClick={this.validCoins}
                type="submit"
                value="Coverter"
              >
                Converter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
