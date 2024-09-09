import {useState} from 'react';
import './styles.css';
import api from './services/api';
function App() {

  const [input, setInput] = useState ('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    
    if (input === ""){
      alert("preencha algum CEP")
      return;
    }
  

    try{
      const response = await api.get(`${input}/json`);
     setCep(response.data);
     setInput(" ");
      
    }catch{
      alert("ops erro ao buscar aqui")
    }
  }  
  return (
    <div className="container">
      <h1 className="title"> Buscador CEP</h1>

    <div className="containerInput">
      <input type="test" placeholder="Digite seu CEP..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <button className="buttonSearch" onClick={handleSearch}>
        Procurar
      </button>
    </div>

    <main className="main">
      <h2>CEP: {cep.cep}</h2>

      <span>{cep.logardouro}</span>
      <span>Complemento: {cep.completo}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf}</span>

    </main>

    </div>
  );
}

export default App;
