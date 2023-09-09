import { NavigateFunction } from "react-router-dom"
import { clearSchema, ticTacSchema } from "./scheme"


let schema = ticTacSchema;

export const condition = (navigate:NavigateFunction) => {
    if(schema[0][0] === 'X' 
    && schema[1][1] === 'X' 
    && schema[2][2] === 'X') {
        clearSchema(schema)
        navigate('/end')
    }
    if(schema[0][0] === '0' 
    && schema[1][1] === '0' 
    && schema[2][2] === '0') {
        clearSchema(schema)
        navigate('/end')
    }

    if(schema[0][0] === 'X' 
    && schema[0][1] === 'X' 
    && schema[0][2] === 'X') {
        clearSchema(schema)
        navigate('/end')
    }
    if(schema[0][0] === '0' 
    && schema[0][1] === '0' 
    && schema[0][2] === '0') {
        clearSchema(schema)
        navigate('/end')
    }

    if(schema[0][0] === 'X' 
    && schema[1][0] === 'X' 
    && schema[2][0] === 'X') {
        clearSchema(schema)
        navigate('/end')
    }
    if(schema[0][0] === '0' 
    && schema[1][0] === '0' 
    && schema[2][0] === '0') {
        clearSchema(schema)
        navigate('/end')
    }

    if(schema[0][2] === 'X' 
    && schema[1][2] === 'X' 
    && schema[2][2] === 'X') {
        clearSchema(schema)
        navigate('/end')
    }
    if(schema[0][2] === '0' 
    && schema[1][2] === '0' 
    && schema[2][2] === '0') {
        clearSchema(schema)
        navigate('/end')
    }

    if(schema[2][0] === 'X' 
    && schema[2][1] === 'X' 
    && schema[2][2] === 'X') {
        clearSchema(schema)
        navigate('/end')
    }
    if(schema[2][0] === '0' 
    && schema[2][1] === '0' 
    && schema[2][2] === '0') {
        clearSchema(schema)
        navigate('/end')
    }

    if(schema[1][0] === 'X' 
    && schema[1][1] === 'X' 
    && schema[1][2] === 'X') {
        clearSchema(schema)
        navigate('/end')
    }
    if(schema[1][0] === '0' 
    && schema[1][1] === '0' 
    && schema[1][2] === '0') {
        clearSchema(schema)
        navigate('/end')
    }

    if(schema[0][1] === 'X'
    && schema[1][1] === 'X'
    && schema[2][1] === 'X') {
        clearSchema(schema)
        navigate('/end')
    }
    if(schema[0][1] === '0'
    && schema[1][1] === '0'
    && schema[2][1] === '0') {
        clearSchema(schema)
        navigate('/end')
    }

    if(schema[1][0] === 'X'
    && schema[1][1] === 'X'
    && schema[1][2] === 'X') {
        clearSchema(schema)
        navigate('/end')
    }
    if(schema[1][0] === '0'
    && schema[1][1] === '0'
    && schema[1][2] === '0') {
        clearSchema(schema)
        navigate('/end')
    }
    
    if(schema[0][0] !== ''
    && schema[0][1] !== ''
    && schema[0][2] !== ''
    && schema[1][0] !== ''
    && schema[1][1] !== ''
    && schema[1][2] !== ''
    && schema[2][0] !== ''
    && schema[2][1] !== ''
    && schema[2][2] !== '') {
        clearSchema(schema)
        navigate('/end')
    }
}
