import React from 'react'
import styles from './Header.module.css'
import {BsChatSquareHeartFill} from 'react-icons/bs'
import useFavorites from '../../hooks/useFavorites'


const Header = () => {

  const {favorites} = useFavorites()

  return (


    <header className={styles.header}>

    <BsChatSquareHeartFill/>
    <span>{favorites.length}</span>

    </header>


  )
}

export default Header