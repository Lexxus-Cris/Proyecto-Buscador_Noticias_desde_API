import React from 'react';

import styles from './Form.module.css'

// custom hooks
import useSelect from '../hooks/useSelect';


const Form = () => {


   // utilizar customhook
   const [ categorie, SelectNoticias ] = useSelect();

   return (
      <div className={`row ${styles.buscador}`}>
         <div className="col s12 m8 offset-m2">
            <form 
            >
               <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

               <SelectNoticias />

               <div className="input-fiel col s12">
                  <input
                     type="submit" 
                     className={`btn-large amber darken-2 ${styles.btn_block}`}
                     value="Buscar"
                     />
               </div>
            </form>
         </div>
      </div>
   )
}

export default Form
