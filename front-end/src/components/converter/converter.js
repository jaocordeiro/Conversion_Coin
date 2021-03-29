import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./converter.css";
import { urlBaseApi } from "../../config/api";
import axios from "axios";
import api from "../../config/custonAxios";

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listcoins: [],
      destConvert: "",
      saveFromCoin: "",
      saveToCoins: "",
      valueConvert: "",
      conversion: "",
    };

    this.getlistCoins = this.getlistCoins.bind(this);
  }

  componentDidMount() {
    this.getlistCoins();
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
      alert("Por Favor defina as moedas");
      return;
    }
    this.postdestConvert();
  };

  /* jsonRequest = {
    source: listcoins,
    destiny: destinyCoin,
    valueToConvert: valueToConvert,
  }; */

  postdestConvert = async () => {
    console.log("teste");

    try {
      const response = api.post("live", {
        dest: "BRL",
        value: 200,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { listcoins } = this.state;
    console.log("Cheguei aquuuiiiiiiiiii", listcoins);

    const { destConvert } = this.state;
    console.log("é tetrrrrraaaaaa", destConvert);

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
