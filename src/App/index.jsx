import './App.css';
import { Header } from '../components/Header';
import { Head } from '../components/Head';
import { Main } from '../components/Main';
import { ModelForm } from '../components/ModelForm';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { Card } from '../components/Card';

function App() {

  const { list, count, addClient, removeClient } = useProvider();


  return (
    <>
      <Header>
        <Head all={count}/>
      </Header>
      <Main>
        <ModelForm>
          <Form addClient={addClient}/>
        </ModelForm>
        <List
          list = {list}
          render={
            client => (
              <Card
                key={client.identificacion}
                client={client}
                removeClient={() => removeClient(client.identificacion)}
              />
            )
          }
        />
      </Main>
    </>
  );
}

export default App;
