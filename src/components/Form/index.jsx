import { useState } from 'react';

function Form({ addClient }) {

  const [check, setCheck] = useState(true);

  const [ user, setUser ] = useState({
    identificacion: '',
    razon: '',
    persona: '',
    direccion: '',
    telefono: '',
    departamento: '',
    ciudad: '',
    cupo: '',
    activo: check,
  })

  const onChangeUser = (event) => {
    const { name, value } = event.target;
    setUser({...user, [name]: value})
  }

  const formEvent = (event) => {
    event.preventDefault();
    addClient(user);
    setUser({
      identificacion: '',
      razon: '',
      persona: '',
      direccion: '',
      telefono: '',
      departamento: '',
      ciudad: '',
      cupo: '',
      activo: check,
    })
  };

  return (
    <form onSubmit={formEvent}>
      <div>
        <label htmlFor='identificacion'>
          Identificación:
        </label>
        <input
          type="text" value={user.identificacion}
          name="identificacion" onChange={onChangeUser}
          placeholder="Identificación"
        />
      </div>
      <div>
        <label htmlFor='razon'>
          Razón Social:
        </label>
        <input
          type="text" value={user.razon}
          name="razon" onChange={onChangeUser}
          placeholder="Razón Social"
        />
      </div>
      <div>
        <label htmlFor='persona'>
          Persona de contacto:
        </label>
        <input
          type="text" value={user.persona}
          name="persona" onChange={onChangeUser}
          placeholder="Persona de contacto"
        />
      </div>
      <div>
        <label htmlFor='direccion'>
          Dirección:
        </label>
        <input
          type="text" value={user.direccion}
          name="direccion" onChange={onChangeUser}
          placeholder="Dirección"
        />
      </div>
      <div>
        <label htmlFor='telefono'>
          Teléfono:
        </label>
        <input
          type="number" value={user.telefono}
          name="telefono" onChange={onChangeUser}
          placeholder="Teléfono"
        />
      </div>
      <div>
        <label htmlFor='departamento'>
          Departamento:
        </label>
        <input
          type="text" value={user.departamento}
          name="departamento" onChange={onChangeUser}
          placeholder="Departamento"
        />
      </div>
      <div>
        <label htmlFor='ciudad'>
          Ciudad:
        </label>
        <input
          type="text" value={user.ciudad}
          name="ciudad" onChange={onChangeUser}
          placeholder="Ciudad"
        />
      </div>
      <div>
        <label htmlFor='cupo'>
          Cupo Otorgado:
        </label>
        <input
          type="text" value={user.cupo}
          name="cupo" onChange={onChangeUser}
          placeholder="Cupo Otorgado"
        />
      </div>
      <div>
        <label htmlFor='activo'>
          Activo:
        </label>
        <input
          type="checkbox" defaultChecked={check}
          name="activo" onChange={() => setCheck(!check)}
        />
      </div>
      <div>
        <button>Agregar</button>
      </div>
    </form>
  );
};


export { Form };