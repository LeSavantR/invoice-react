import { useState } from 'react';

function Form({ addClient }) {

  const [ identificacion, setIdentificacion ] = useState('')
  const [ razon, setRazon ] = useState('')
  const [ persona, setPersona ] = useState('')
  const [ direccion, setDireccion ] = useState('')
  const [ telefono, setTelefono ] = useState('')
  const [ departamento, setDepartamento ] = useState('')
  const [ ciudad, setCiudad ] = useState('')
  const [ cupo, setCupo ] = useState('')
  const [ activo, setActivo ] = useState('')

  const formAction = (event) => {
    event.preventDefault();
    addClient({
      identificacion,
      razon,
      persona,
      direccion,
      telefono,
      departamento,
      ciudad,
      cupo,
      activo,
    });
    setIdentificacion('')
    setRazon('')
    setPersona('')
    setDireccion('')
    setTelefono('')
    setDepartamento('')
    setCiudad('')
    setCupo('')
    setActivo('')
  };

  return (
    <form onSubmit={formAction}>
      <div>
        <label>
          •Identificación
        </label>
        <input type="text" value={identificacion} name="identificacion" onChange={(e) => setIdentificacion(e.target.value)} placeholder="Identificación" />
      </div>
      <div>
        <label>
          •Razón Social
        </label>
        <input type="text" value={razon} name="razon" onChange={(e) => setRazon(e.target.value)} placeholder="Razón Social" />
      </div>
      <div>
        <label>
          •Persona de contacto
        </label>
        <input type="text" value={persona} name="persona" onChange={(e) => setPersona(e.target.value)} placeholder="Persona de contacto" />
      </div>
      <div>
        <label>
          •Dirección
        </label>
        <input type="text" value={direccion} name="direccion" onChange={(e) => setDireccion(e.target.value)} placeholder="Dirección" />
      </div>
      <div>
        <label>
          •Teléfono
        </label>
        <input type="number" value={telefono} name="telefono" onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" />
      </div>
      <div>
        <label>
          •Departamento
        </label>
        <input type="text" value={departamento} name="departamento" onChange={(e) => setDepartamento(e.target.value)} placeholder="Departamento" />
      </div>
      <div>
        <label>
          •Ciudad
        </label>
        <input type="text" value={ciudad} name="ciudad" onChange={(e) => setCiudad(e.target.value)} placeholder="Ciudad" />
      </div>
      <div>
        <label>
          •Cupo Otorgado
        </label>
        <input type="text" value={cupo} name="cupo" onChange={(e) => setCupo(e.target.value)} placeholder="Cupo Otorgado" />
      </div>
      <div>
        <label>
          •Activo
        </label>
        <input type="checkbox" value={activo} name="activo" onChange={(e) => setActivo(e.target.value)} placeholder="Activo" />
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};


export { Form };