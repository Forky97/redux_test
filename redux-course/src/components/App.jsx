import { useState } from 'react'
import  Recipeitem from './recipe-item/Recipeitem'


function App() {

  return (

    <div>
            <Recipeitem recipe = {{
              'id' : 1,
              'name' : 'лазанья '}}/>

            <Recipeitem recipe = {{
                    'id' : 2,
                    'name' : 'борщ '}}/>


            <Recipeitem recipe = {{
                    'id' : 3,
                    'name' : 'фуагра '}}/>


    </div>
  
  )
}

export default App
