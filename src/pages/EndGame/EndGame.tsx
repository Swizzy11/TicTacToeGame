import { Link } from 'react-router-dom'
import styles from './EndGame.module.scss'
import { Button } from '../../components/Button'

export const EndGame = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h1>Давай по новой :)</h1>
                <Link to={'/start'}>
                    <Button classname='menu'>На старт, внимание...</Button>
                </Link>
            </div>
        </div>
    )
}
