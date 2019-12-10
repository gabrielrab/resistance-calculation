import React, { useState } from "react";

import "./style.css";

function App() {
  const [req, setReq] = useState({});

  const handleChange = event => {
    const auxValues = { ...req };

    auxValues[event.target.name] = event.target.value;
    setReq(auxValues);
    console.log(auxValues);
  };
  const handleSubmit = event => {
    event.preventDefault();

    const { r1, r2, r3, type, fonte } = req;

    let resultado;

    let corrente; // corrente = tensao/resistencia equivalente Amperes
    let potencia; // Valor da fonte * corrente

    switch (type) {
      case "1":
        console.log("Serie");
        resultado = parseInt(r1) + parseInt(r2) + parseInt(r3);
        corrente = fonte / resultado;
        potencia = fonte * corrente;
        alert(
          `Resistencia equivalente: ${resultado.toFixed(2)} Ω 
          \n Corrente: ${corrente.toFixed(2)} A
          \n Tensão R1: ${(r1 * corrente).toFixed(2)}V
          \n Tensão R2: ${(r2 * corrente).toFixed(2)}V
          \n Tensão R3: ${(r3 * corrente).toFixed(2)}V
          \n `
        );
        break;

      case "2":
        console.log("Paralela");
        resultado =
          1 / (1 / parseInt(r1) + 1 / parseInt(r2) + 1 / parseInt(r3));
        corrente = fonte / resultado;
        potencia = fonte * corrente;
        alert(
          `Resistencia equivalente: ${resultado.toFixed(2)} Ω 
          \n Corrente: ${corrente.toFixed(2)} A
          \n Tensão R1: ${(r1 * corrente).toFixed(2)}V
          \n Tensão R2: ${(r2 * corrente).toFixed(2)}V
          \n Tensão R3: ${(r3 * corrente).toFixed(2)}V
          \n `
        );
        break;

      case "3":
        console.log("Mista");
        resultado = 1 / (1 / parseInt(r1) + 1 / parseInt(r2)) + parseInt(r3);
        corrente = fonte / resultado;
        potencia = fonte * corrente;
        alert(
          `Resistencia equivalente: ${resultado.toFixed(2)} Ω 
          \n Corrente: ${corrente.toFixed(2)} A
          \n Tensão R1: ${(r1 * corrente).toFixed(2)}V
          \n Tensão R2: ${(r2 * corrente).toFixed(2)}V
          \n Tensão R3: ${(r3 * corrente).toFixed(2)}V
          \n `
        );
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Informe os valores dos resistores</h2>
          <input
            type="number"
            name="r1"
            placeholder="Resistor 1"
            required
            min="0"
            max="100000"
            onChange={handleChange}
          />
          <input
            type="number"
            name="r2"
            placeholder="Resistor 2"
            min="0"
            max="100000"
            required
            onChange={handleChange}
          />
          <input
            type="number"
            name="r3"
            placeholder="Resistor 3"
            min="0"
            max="100000"
            required
            onChange={handleChange}
          />
          <h2>Selecione o tipo de associação</h2>
          <select name="type" required onChange={handleChange}>
            <option hidden>Selecione</option>
            <option value="1">Série</option>
            <option value="2">Paralela</option>
            <option value="3">Mista</option>
          </select>
          <h2>Selecione o valor da tensão</h2>
          <input
            type="number"
            name="fonte"
            placeholder="Digite o valor da tensão"
            min="0"
            max="12"
            required
            onChange={handleChange}
          />
          <br />
          <button type="submit">Calcular</button>
        </form>
      </div>
    </>
  );
}

export default App;
