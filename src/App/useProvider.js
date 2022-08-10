import { useStorage } from './useStorage';


function useProvider(){

  const [ list, saveData ] = useStorage('clientes', []);

  const count = list.length;

  const addClient = (client) => {
    let newList = [ ...list ];
    newList.push(client);
    saveData(newList);
  };

  const removeClient = (identificacion) => {
    let indexItem = list.findIndex(item => item.identificacion === identificacion);
    let newList = [ ...list ];
    newList.splice(indexItem, 1);
    saveData(newList);
  };

  return {list, count, addClient, removeClient}
};


export { useProvider };