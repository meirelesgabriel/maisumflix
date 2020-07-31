import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/Carousel/components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  // const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');
  const [values, setValues] = useState(valoresIniciais);

  // declarar um objeto para os valores do formulário

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
    // dá erro desse jeito (tirar print):
    // const { getAttribute, value } = infosDoEvento.target;
    // setValue(getAttribute('name'),
    // value);
  }

  useEffect(() => {
    console.log('alo alo brasil');
    const URL_TOP = 'http://localhost:8080/categorias';

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria bacanudas',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 1,
    //       nome: 'Back End',
    //       descricao: 'Uma categoria bacanudas',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>
            <label>
                Descrição:
                <textarea
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
            </label>
        </div> */}

        {/* <div>
            <label>
                Cor:
                <input
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}
                />
            </label>
            </div> */}

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
