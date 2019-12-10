import React from "react";

function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert("Aio");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Informe os valores dos resistores</h2>
        <input type="number" name="r1" placeholder="Resistor 1" required />
        <input type="number" name="r2" placeholder="Resistor 2" required />
        <input type="number" name="r3" placeholder="Resistor 3" required />
        <h2>Selecione o tipo de associação</h2>
        <select name="type">
          <option hidden required>
            Selecione
          </option>
          <option>Série</option>
          <option>Paralela</option>
          <option>Mista</option>
        </select>
        <br />
        <button type="submit">Calcular</button>
      </form>
    </>
  );
}

export default App;
