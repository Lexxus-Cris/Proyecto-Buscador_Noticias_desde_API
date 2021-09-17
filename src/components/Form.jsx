import React from 'react';

import styles from './Form.module.css'

const Form = () => {
   return (
      <div className={`row ${styles.buscador}`}>
         <div className="col s12 m8 offset-m2">
            <form 
            >
               <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
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