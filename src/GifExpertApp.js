import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// export const GifExpertApp = () => {

//     return (
//         <>
//             <h2>GifExpertApp</h2>
//             <hr />
//         </>
//     )

// }

export const GifExpertApp = function() {


    const [categories, Setcategories] = useState([ 'Dragon Ball' ])

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory Setcategories={ Setcategories } />

            <hr />

           <ol>
              {
                  categories.map( category => {
                      return <GifGrid
                                key={ category } 
                                category={ category } 
                             />
                  } )
              }
           </ol>

        </>
    )

}