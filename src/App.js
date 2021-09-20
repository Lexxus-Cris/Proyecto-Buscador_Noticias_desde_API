import { Fragment, useState, useEffect } from "react";

// Components
import Form from "./components/Form";
import Header from "./components/Header";

function App() {

  // Definimos la categoria y noticias
  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([]);

  // Detecta cuando cambie la categoria
  useEffect(() => {
    const api_key = '3c5fe726a6ce40cab0981c1931b8563a'
    const consultarAPI = async () => {
      const URL_API = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${api_key}`;

      const response= await fetch(URL_API);
      const data = await response.json();
      setNoticias(data.articles);
    }

    consultarAPI()
  }, [categoria])

  return (
    <Fragment>
      <Header
        title='Buscador de noticias'
      />

      <div className="container white">
        <Form
          guardarCategoria={setCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
