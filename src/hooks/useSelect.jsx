import React, {useState} from 'react'

const useSelect = (stateInicial, options) => {

   // state de custom hook
   const [state, setState] = useState('')

   const SelectNoticias = () => (
      <select
         name=""
         id=""
         className="browser-default"

      >
         <option value="">Seleccione</option>
      </select>
   )

   return [state, SelectNoticias]
}

export default useSelect
