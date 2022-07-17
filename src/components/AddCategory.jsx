import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {

    const [inputValues, setInputValues] = useState('');

    const onInputChange = ({target}) =>{

        setInputValues(target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const newInputValue = inputValues.trim();
        //Validar que el input tengas mas de 2 caracteres
        if(newInputValue.length <= 1) return;

        //Setear valor de input a ''
        setInputValues('');

        //setCategories( c => [inputValues, ...c]);
        //Enviar valor a componente padre
        onNewCategory(newInputValue.toLocaleLowerCase());
        
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                name='name'
                type="text"
                placeholder="Buscar Gifs"
                value={inputValues}
                onChange={onInputChange}
            />
        </form>
    )
}
