import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [CEP, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");

  async function searchAPI(e) {
    e.preventDefault();
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
      console.log(data);
      setEndereco(data);
    } catch (error) {
      console.log("Erro ao buscar endereço", error);
    }
  }

  return (
    <>
      <section className="containerForm">
        <div className="containerFormDiv">
          <h1>Trabalhando com formulários</h1>
          <form onSubmit={searchAPI} action="">
            <label htmlFor="">CEP:</label>
            <input
              onChange={(e) => setCEP(e.target.value)}
              type="text"
              id="CEP"
              name="CEP"
              placeholder="Digite seu CEP"
            />
            <button>Enviar</button>
          </form>
        </div>
      </section>

      {endereco && (
        <main>
          <div>
            <p>Logradouro: {endereco.logradouro}</p>
            <p>Bairro: {endereco.bairro}</p>
            <p>UF: {endereco.uf}</p>
            <p>Estado: {endereco.estado}</p>
          </div>
        </main>
      )}
    </>
  );
}

export default App;
