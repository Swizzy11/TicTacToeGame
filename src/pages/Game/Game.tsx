import React, { useEffect } from "react"
import styles from './Game.module.scss'
import { PlayFieldLayout } from "../../layout/PlayFieldLayout"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { clearSchema, ticTacSchema } from "../../utils/scheme"

export const Game = () => {
    const onClick = () => {
        clearSchema(ticTacSchema)
    }

    return (
    <div className={styles.root}>
        <header>
            <Link to={'/start'}>
                <Button classname='exit' onClick={onClick}>
                    Exit
                </Button>
            </Link>
        </header>
        <main>
            <PlayFieldLayout />
        </main>
        <footer>
            <b>TG: <a href="/">@kotovskij01</a></b>
            <b>Mail: kotovskij.01@yandex.ru</b>
        </footer>
    </div> 
    )
}
