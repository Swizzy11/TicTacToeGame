import { ReactNode } from "react";

export const emptySchema:Array<Array<ReactNode>> = [
        [<></>, <></> ,<></>], 
        [<></>, <></> ,<></>], 
        [<></>, <></> ,<></>]
    ];
export const idSchema = [
        ['00', '01', '02'], 
        ['10', '11', '12'], 
        ['20', '21', '22']
    ]
export const ticTacSchema = [
        ['', '', ''], 
        ['', '', ''], 
        ['', '', '']
    ]


export const clearSchema = (schema:Array<Array<string>>) => {
    for(let i = 0; i < 3; i++) {
        schema[0][i] = '';
        schema[1][i] = '';
        schema[2][i] = '';
    }
}
