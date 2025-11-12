import React from 'react';
import styles from './ListaFuncionarios.module.css'; 

function ListaFuncionarios({ funcionarios, onExcluir, onEditar }) {

  return (
    <div>
      <h2>Lista de Funcionários</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map(func => (
              <tr key={func.id}>
                <td>{func.id}</td>
                <td>{func.nome}</td>
                <td>{func.cargo}</td>
                <td>{func.email}</td>
                <td className={styles.actionsCell}>
                  <button 
                    onClick={() => onEditar(func)} 
                    className={styles.actionButton}
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => onExcluir(func.id)}
                    className={`${styles.actionButton} ${styles.actionButtonDelete}`}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaFuncionarios;