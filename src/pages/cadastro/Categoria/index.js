import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/Carousel/components/FormField';
import useForm from '../../../hooks/useForm';

// declarar um objeto para os valores do formulário
function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  // const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://maisumflix.herokuapp.com/categorias';

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

        clearForm(valoresIniciais);
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
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
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
