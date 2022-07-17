import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newValue) =>{

        //Validar que no exista el mismo valor en categories
        if(categories.includes(newValue)) return;

        //setCategories([...categories, 'Dragon Ball']);
        setCategories( c => [newValue, ...c ]);
    }


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories={setCategories}
            onNewCategory={onAddCategory}
        />
        {
            categories.map( category =>
                 (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                )
            )
        }

    </>
  )
}
