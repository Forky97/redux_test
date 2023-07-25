import React from 'react'
import styles from './Recipeitem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../store/favorites/favorites.slice'
import { useActions } from '../../hooks/useActions'
import Header from '../header/Header'
import useFavorites from '../../hooks/useFavorites'




function Recipeitem (  {recipe}  ) {


  const {favorites} = useFavorites()
  
  const {toogleFavorites} = useActions()


  const isExists = favorites.some(r => r.id === recipe.id)



  console.log(favorites)




  return (
    <section>
      <Header/>

    <div className={styles.item}>

    {/* <img src=''></img> */}
    
    <h2>{recipe.id}</h2>
    <h2>{recipe.name} </h2>
    <button onClick={() => toogleFavorites(recipe)}> {isExists ? ('Remove from') : ('Add to') } favorites </button>


    </div>

</section>
  )
}

export default Recipeitem