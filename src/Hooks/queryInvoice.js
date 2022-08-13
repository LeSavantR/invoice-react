import { useState } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/v1/';
const LOGGIN = 'profile/'; // Only POST
const INVO = 'invoice/';
const ITEM = 'item/';
const REQ = 'requirement/';



function queryInvoice(id, user, key){

  const [ list, setList ] = useState([]);
  const [ error, setError ] = useState('')
  const [ loading, setLoading ] = useState('')

  async function getData(dir, user, id){
    let oneInvo = `${id}` || '';
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}${dir}${oneInvo}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${user}`
        }
      });
      const data = await response.json();
      setList(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    };
  };

  // Actualizando el localStorage
  const saveInvoice = (list) => {
    try{
      const stringifyObject = JSON.stringify(list);
      localStorage.setItem(key, stringifyObject);
      setList(list);
    } catch (error) {
      setError(error);
    };
  };

  const detailInvoice = (id) => {
    getData(INVO, user, id);
  }

  const deleteInvoice = (id) => {}

  return { list, error, setError, loading, setLoading };
};

export { queryInvoice };