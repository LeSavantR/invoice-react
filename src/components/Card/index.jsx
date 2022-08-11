import './Card.css'

function Card({client, removeClient}) {
  return (
    <div className='client-card'>
      <h2>{client.razon}</h2>
      Identificación :
      <span> {client.identificacion}</span><br/>
      Razón Social :
      <span> {client.razon}</span><br/>
      Persona de contacto :
      <span> {client.persona}</span><br/>
      Dirección :
      <span> {client.direccion}</span><br/>
      Teléfono :
      <span> {client.telefono}</span><br/>
      Departamento :
      <span> {client.departamento}</span><br/>
      Ciudad :
      <span> {client.ciudad}</span><br/>
      Cupo Otorgado :
      <span> {client.cupo}</span><br/>
      <span>Se encuentra Activo? {client.activo ? '✓' : '✗'}</span><br/>
      <button onClick={removeClient}>Delete</button><br/>
    </div>
  );
};


export { Card };
/*
  •Identificación
  •Razón Social
  •Persona de contacto
  •Dirección
  •Teléfono
  •Departamento
  •Ciudad
  •Cupo Otorgado
  •Activo
*/