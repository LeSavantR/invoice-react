import { useStorage } from './useStorage';


function userLogging(){

  // const { list, saveData, error, setError} = useStorage('clientes', []);

  const count = list.length;

  const addClient = (client) => {
    const valid = list.find(item => item.identificacion === client.identificacion);
    if(valid){
      // setError('El cliente ya existe');
    } else {
      let newList = [ ...list ];
      newList.push(client);
      // saveData(newList);
    };
  };

  const removeClient = (identificacion) => {
    let indexItem = list.findIndex(item => item.identificacion === identificacion);
    let newList = [ ...list ];
    newList.splice(indexItem, 1);
    // saveData(newList);
  };

  // return { list, count, addClient, removeClient, error };
};


export { userLogging };