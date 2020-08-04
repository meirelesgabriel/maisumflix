import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    // console.log('[nomeDaCategoria]', nomeDaCategoria);
    // console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
    // setNomeDaCategoria(infosDoEvento.target.value);
    // setValue('nome', infosDoEvento.target.value);
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
