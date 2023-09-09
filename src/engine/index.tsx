import { FC, MouseEvent, MouseEventHandler, SetStateAction, useState } from "react"
import styles from '../pages/Game/Game.module.scss'
import { useNavigate } from "react-router-dom"
import { ticTacSchema, idSchema, emptySchema } from "../utils/scheme"
import { condition } from "../utils/conditionForTicTac"

type CellProps = {
    firstNumElement: number,
    secondNumElement: number
}

export const engine = () => {
    let currentMove = 'X'
  
    const Cell:FC<CellProps> = ({
        firstNumElement, 
        secondNumElement
    }) => {
        const [content, setContent] = useState('')
        const [disabled, setdisabled] = useState(false)
        const navigate = useNavigate()

        const onClick: MouseEventHandler = (e) => {
            changeOfCourse(e, setContent)
            setdisabled(true)
            condition(navigate)
        }
        return (
                <button 
                    className={`${styles.cell}`}
                    datatype={`${firstNumElement}${secondNumElement}`} 
                    disabled={disabled} 
                    onClick={onClick}
                >
                    {content}
                </button>
        )
    } 
    
    const changeOfCourse = (e: MouseEvent<Element, globalThis.MouseEvent>, setContent: { (value: SetStateAction<string>): void; (value: string): void }) => {
        const arr = e
                .currentTarget
                .getAttribute("datatype")!
                .split(' ');

            const idElement = e
                .currentTarget
                .getAttribute("datatype")!
                .split('')
                .map((item) => Number(item))

            if(currentMove === 'X') {
                setContent('X');
                if(arr[0] === idSchema[idElement[0]][idElement[1]]) {
                    ticTacSchema[idElement[0]][idElement[1]] = 'X'
                   
                }
                currentMove = '0'
            }else {
                setContent('0');
                if(arr[0] === idSchema[idElement[0]][idElement[1]]) {
                    ticTacSchema[idElement[0]][idElement[1]] = '0'
                }
                currentMove = 'X'
                
            };
    }
    
    for(let i = 0; i < emptySchema.length; i++) {
        for(let j = 0; j < 3; j++) {
            emptySchema[i][j] = <Cell 
                                    firstNumElement={i} 
                                    secondNumElement={j} 
                                />;
        }
    }
        
    return emptySchema
}
 