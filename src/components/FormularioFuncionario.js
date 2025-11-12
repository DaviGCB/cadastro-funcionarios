import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './FormularioFuncionario.module.css'; 

const API_URL = 'http://localhost:3001';

function FormularioFuncionario({ 
  onCadastroSucesso, 
  onEdicaoSucesso,
  funcionarioEmEdicao, 
  setFuncionarioEmEdicao
}) {
  
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (funcionarioEmEdicao) {
      setNome(funcionarioEmEdicao.nome);
      setCargo(funcionarioEmEdicao.cargo);
      setEmail(funcionarioEmEdicao.email);
    } else {
      setNome('');
      setCargo('');
      setEmail('');
    }
  }, [funcionarioEmEdicao]);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const dadosFormulario = { nome, cargo, email };

    if (funcionarioEmEdicao) {
      axios.put(`${API_URL}/funcionarios/${funcionarioEmEdicao.id}`, dadosFormulario)
        .then(response => {
          const funcionarioAtualizado = { ...dadosFormulario, id: funcionarioEmEdicao.id };
          onEdicaoSucesso(funcionarioAtualizado);
          alert('Funcionário atualizado com sucesso!');
        })
        .catch(error => {
          console.error('Erro ao atualizar funcionário:', error);
          alert('Erro ao atualizar funcionário.');
        });
    } else {
      axios.post(`${API_URL}/funcionarios`, dadosFormulario)
        .then(response => {
          const funcionarioSalvo = { ...dadosFormulario, id: Date.now() };
          onCadastroSucesso(funcionarioSalvo);
          alert('Funcionário cadastrado com sucesso!');
        })
        .catch(error => {
          console.error('Erro ao cadastrar funcionário:', error);
          alert('Erro ao cadastrar funcionário.');
        });
    }
  };

  return (
    <div>
      <h2>{funcionarioEmEdicao ? 'Editar Funcionário' : 'Cadastrar Novo Funcionário'}</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label>Nome: </label>
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Cargo: </label>
          <input type="text" value={cargo} onChange={e => setCargo(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Email: </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            {funcionarioEmEdicao ? 'Atualizar' : 'Salvar'}
          </button>

          {funcionarioEmEdicao && (
            <button 
              type="button" 
              className={`${styles.button} ${styles.buttonCancel}`}
              onClick={() => setFuncionarioEmEdicao(null)}
            >
              Cancelar Edição
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormularioFuncionario;