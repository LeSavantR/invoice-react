import { useState, useEffect } from 'react';


function useStorage(key, initialValue){

  const [ list, setList ] = useState(initialValue);

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
        console.log(error);
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
      console.log(error);
    };
  };

  return [ list, saveData ];
};

export { useStorage };