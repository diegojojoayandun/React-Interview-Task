import { useState, useEffect } from "react";
import getReactRepositories from "../helpers/getReactRepositories.js";

// Componente que renderiza mediante useEffect la consulta que trae del helper getReactRepositories
const Repositories = () => {
  const [item, setItem] = useState([]); // se inicializa el estado a un array vacio que será el estado inicial
  const [totalCount, setTotalCount] = useState([]);

  // Funcion usada por useEffect que llama a la funcion del helper cada vez que se renderiza componente
  const updateitem = () => {
    getReactRepositories().then((newItem) => {
      setItem(newItem.items);
      setTotalCount(newItem);
    });
  };

  // useEffectse ejecutara cada vez que se renderice una sola vez gracias al arreglo vacio que recibe
  // recibe 2 parametros la arrow function a ejecutar y un arreglo de dependencias en este caso arreglo vacio
  useEffect(() => {
    updateitem();
  }, []);

  return (
    <div>
      <h2>Numero total de items: {totalCount.total_count}</h2>
      <ul>
        {item.map((ite) => (
          <li key={ite.id}>
            Name: {ite.name}, Stars 🌟: {ite.stargazers_count}, 🍴 Forks:{" "}
            {ite.forks}, URL: {ite.html_url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;
