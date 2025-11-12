import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioFuncionario from './components/FormularioFuncionario'; 
import ListaFuncionarios from './components/ListaFuncionarios';
import './App.css';

const API_URL = 'http://localhost:3001';

function App() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionarioEmEdicao, setFuncionarioEmEdicao] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/funcionarios`)
      .then(response => {
        setFuncionarios(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar funcionários:', error);
      });
  }, []); 

  const adicionarFuncionarioNaLista = (novoFuncionario) => {
    setFuncionarios(listaAtual => [...listaAtual, novoFuncionario]);
  };

  const excluirFuncionario = (id) => {
    axios.delete(`${API_URL}/funcionarios/${id}`)
      .then(response => {
        setFuncionarios(listaAtual => 
          listaAtual.filter(func => func.id !== id)
        );
      })
      .catch(error => {
        console.error('Erro ao excluir funcionário:', error);
        alert('Erro ao excluir funcionário.');
      });
  };

  const editarFuncionario = (funcionarioAtualizado) => {
    setFuncionarios(listaAtual => 
      listaAtual.map(func =>
        func.id === funcionarioAtualizado.id ? funcionarioAtualizado : func
      )
    );
    setFuncionarioEmEdicao(null);
  };

  const selecionarParaEditar = (funcionario) => {
    setFuncionarioEmEdicao(funcionario);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema de Cadastro</h1>
      </header>
      <main>
        <FormularioFuncionario 
          onCadastroSucesso={adicionarFuncionarioNaLista}
          onEdicaoSucesso={editarFuncionario}
          funcionarioEmEdicao={funcionarioEmEdicao}
          setFuncionarioEmEdicao={setFuncionarioEmEdicao}
        />
        
        <hr style={{ margin: '20px 0' }} /> 

        
        <ListaFuncionarios 
          funcionarios={funcionarios} 
          onExcluir={excluirFuncionario} 
          onEditar={selecionarParaEditar}
        />
      </main>
    </div>
  );
}

export default App;