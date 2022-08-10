import './List.css';

function List({ children, render, list }){

  const child = children || render;

  return (
    <section className='client-container'>
        {list.map(child)}
    </section>
  );
};


export { List };