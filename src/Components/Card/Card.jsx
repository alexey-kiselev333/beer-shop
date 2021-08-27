import styles from './Card.module.scss'
import React from 'react'

function Card({onFavorite,title,image_url,price,onPlus,abv,ebc,ph,description}){

    const [isAdded,setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        onPlus({title,image_url,price})
        setIsAdded(!isAdded)
    }



    return <div className={styles.card}>


            <img className={styles.pivoCards} src={image_url} alt="1sn"/>

        <h5>{title}</h5>
        <div className="d-flex justify-between mb-10">
            <div><span>abv </span> : {abv}</div>
            <div><span>ebc </span> : {ebc}</div>
            <div><span>ph </span> : {ph}</div>
        </div>
        <div className="d-flex mt-10 justify-center">{description.slice(0,80)+'...'}</div>
        <div className={styles.cardbottom}>
            <div className={styles.cardbottomplus}>
            </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg":"/img/btn-plus.svg"} alt="Plus"/>

        </div>
    </div>
}

export default Card


