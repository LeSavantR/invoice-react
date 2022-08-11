import { useState, useEffect } from 'react';


function useStorage(key, initialValue){

  const [ list, setList ] = useState(initialValue);
  const [ error, setError ] = useState('')
  const [ state, setState ] = useState('')

  // Imitando la consulta a una API
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStore = localStorage.getItem(key);
        let parsetList;

        if(!localStore){
          localStorage.setItem(key, JSON.stringify(initialValue));
          parsetList = initialValue;
        } else {
          parsetList = JSON.parse(localStore);
        }

        setList(parsetList);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  });

  // Actualizando el localStorage
  const saveData = (list) => {
    try{
      const stringifyObject = JSON.stringify(list);
      localStorage.setItem(key, stringifyObject);
      setList(list);
    } catch (error) {
      setError(error);
    };
  };

  return { list, saveData, error, setError, state, setState };
};

export { useStorage };