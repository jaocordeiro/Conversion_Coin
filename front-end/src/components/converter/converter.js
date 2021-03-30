import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./converter.css";
import api from "../../config/custonAxios";

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listcoins: [],
      destConvert: "",
      saveFromCoin: "",
      saveToCoin: "",
      inputValue: "",
      converted: 0,
    };

    this.getlistCoins = this.getlistCoins.bind(this);
  }

  componentDidMount() {
    this.getlistCoins();
  }

  getlistCoins = async () => {
    try {
      const response = await api.get("listCoins");
      this.setState({ listcoins: response.data["currencies"] });
    } catch (error) {
      console.log(error);
    }
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

    if (saveFromCoin === "") {
      alert("Por Favor defina a moeda primária");
      return;
    }
    if (saveToCoin === "") {
      alert("Por Favor defina a moeda secundária");
      return;
    }

    this.postdestConvert();
  };

  handleChange = (text) => {
    this.setState({ inputValue: text.target.value });
  };

  postdestConvert = async () => {
    const { saveToCoin, inputValue } = this.state;
    if (saveToCoin && inputValue === "") {
      alert("Defina um valor para a conversão");
    }
    try {
      const response = await api.post("live", {
        dest: saveToCoin,
        value: inputValue,
      });
      console.log(response.data);
      this.setState({ converted: response.data["value"] });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { listcoins, converted, inputValue } = this.state;

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

            <select
              className="tocoins"
              id="toCoins"
              onChange={this.selectToCoins}
            >
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
                value={inputValue}
                onChange={this.handleChange}
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

            <div className="converted">
              {converted > 0 && <p>{converted}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
