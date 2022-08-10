import './ModelForm.css';

function ModelForm({ children }){
  return (
    <article className='form-container'>
      {children}
    </article>
  );
};

export { ModelForm };