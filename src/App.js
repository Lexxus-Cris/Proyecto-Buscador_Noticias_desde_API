import { Fragment, useState } from "react";

// Components
import Form from "./components/Form";
import Header from "./components/Header";

function App() {

  // Definimos la categoria y noticias
  const [categoria, setCategoria] = useState('')

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
