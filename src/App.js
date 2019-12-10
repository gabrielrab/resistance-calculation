import React, { useState } from "react";

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

    const { r1, r2, r3, type } = req;

    let resultado;

    switch (type) {
      case "1":
        console.log("Serie");
        resultado = parseInt(r1) + parseInt(r2) + parseInt(r3);
        alert(`Resistencia equivalente: ${resultado} Ω`);
        break;

      case "2":
        console.log("Paralela");
        resultado =
          1 / (1 / parseInt(r1) + 1 / parseInt(r2) + 1 / parseInt(r3));
        alert(`Resistencia equivalente: ${resultado} Ω`);
        break;

      case "3":
        console.log("Mista");
        resultado = 1 / (1 / parseInt(r1) + 1 / parseInt(r2)) + parseInt(r3);
        alert(`Resistencia equivalente: ${resultado} Ω`);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Informe os valores dos resistores</h2>
        <input
          type="number"
          name="r1"
          placeholder="Resistor 1"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="r2"
          placeholder="Resistor 2"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="r3"
          placeholder="Resistor 3"
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
        <br />
        <button type="submit">Calcular</button>
      </form>
    </>
  );
}

export default App;
