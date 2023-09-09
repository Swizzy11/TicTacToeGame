import styles from './PlayFieldLayout.module.scss'
import { engine } from '../../engine'

export const PlayFieldLayout = () => {
    let row = engine();
    return (
            <div className={styles.field}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                        {
                            row[0].map((Element, index) => {
                            return ( 
                                <th key={index}>
                                    {Element}
                                </th>
                            )
                            })
                        }
                        </tr> 
                        <tr>
                        {
                            row[1].map((Element, index) => {
                                return ( 
                                    <th key={index}>
                                        {Element}
                                    </th>
                                )
                            })
                        }
                        </tr> 
                        <tr>
                        {
                            row[2].map((Element, index) => {
                                return ( 
                                    <th key={index}>
                                        {Element}
                                    </th>
                                )
                            })
                        }
                        </tr>
                    </thead> 
                </table>
            </div>
    )
}
