import { Fragment } from "react";

// Components
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header
        title='Buscador de noticias'
      />

      <div className="container white">
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
