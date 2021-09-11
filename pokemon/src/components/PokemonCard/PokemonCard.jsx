import classes from "./PokemonCard.module.css";
import cardBack from "./../../../src/assets/card-back-side.jpeg"
import { useState } from 'react';

const PokemonCard = (props) => {
    const {img, type, values, id, name} = props
    const [isActive, setActive] = useState(false)
    const turnCard = () => {
        setActive(true)
    }
    return (
        <div className={classes.root} onClick={turnCard}>
            <div className={`${classes.pokemonCard} ${isActive ? classes.active : ''}`}>
                <div className={classes.cardFront}>
                        <div className={`${classes.wrap} ${classes.front}`}>
                        <div className={`${classes.pokemon} ${classes[type]}`}>
                            <div className={classes.values}>
                                <div className={`${classes.count} ${classes.top}`}>{values.top}</div>
                                <div className={`${classes.count} ${classes.right}`}>{values.right}</div>
                                <div className={`${classes.count} ${classes.bottom}`}>{values.bottom}</div>
                                <div className={`${classes.count} ${classes.left}`}>{values.left}</div>
                            </div>
                            <div className={classes.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={classes.info}>
                                <span className={classes.number}>#{id}</span>
                                <h3 className={classes.name}>{name}</h3>
                                <small className={classes.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.cardBack}>
                    <div className={`${classes.wrap} ${classes.back}`}>
                        <img src={cardBack} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard
