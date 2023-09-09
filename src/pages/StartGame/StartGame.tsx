import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import styles from './StartGame.module.scss'
import { useState } from 'react'
import { Modal } from '../../components/Modal'
import { contentForModal } from '../../utils/contentForModal'


export const StartGame = () => {
    const [rules, addRules] = useState(false)
    const [aboutGame, addDiscrtiption] = useState(false)

    const addComponentWithRules = () => {
        (rules) ? addRules(false) : addRules(true)
    }

    const addComponentWithDiscription = () => {
        (aboutGame) ? addDiscrtiption(false) : addDiscrtiption(true)
    }

    return (
        <div className={styles.root}>
            {
                (rules) ? <Modal 
                                content={contentForModal.rules}
                                title='Правила' 
                                onClick={addComponentWithRules} 
                            /> 
                : 
                <></>
            }
            {
                (aboutGame) ? <Modal 
                content={contentForModal.aboutGame}
                title='Об игре' 
                onClick={addComponentWithDiscription} 
            /> 
            : 
            <></>
            }
            <h1 className={styles.h1}>Tic-tac-toe</h1>
                <Link to={'/game'}>
                    <Button classname='menu'>Начать игру</Button>
                </Link>
                <Button classname='menu' onClick={addComponentWithRules}>Правила</Button>
                <Button classname='menu' onClick={addComponentWithDiscription}>Об игре</Button>
        </div>
    )
}
