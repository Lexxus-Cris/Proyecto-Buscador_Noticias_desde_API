import React, {useState} from 'react'

const useSelect = (stateInicial, options) => {

   // state de custom hook
   const [state, setState] = useState(stateInicial)

   const handleChange = e => {
      setState([e.target.value]);
   }

   const SelectNoticias = () => (
      <select
         name=""
         id="Categorie-select"
         className="browser-default"
         value={state}
         onChange={e => setState(e.target.value)}
      >
         <option value="">-- Seleccione un categoria --</option>
         {options.map(option => (
            <option
               key={option.value}
               value={option.value}
            >{option.label}</option>
         ))}
      </select>
   )

   return [state, SelectNoticias]
}

export default useSelect
