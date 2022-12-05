import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../redux/types';


function CalculusPage(props) {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    let result = useSelector(state => state.result);


    const dispatch = useDispatch();
    
    const sumNum = (e) => {
        dispatch({
            type: types.SUM_NUM,
            payload: parseInt(num1)+ parseInt(num2),
            num1: num1,
            num2: num2
        })
    }
    const minusNum = (e) => {
        dispatch({
            type: types.MINUS_NUM,
            payload: num1-num2,
            num1: num1,
            num2: num2
        })
    }
    const multiplyNum = (e) => {
        dispatch({
            type: types.MULTIPLY_NUM,
            payload: num1*num2,
            num1: num1,
            num2: num2
        })
    }
    const divideNum = (e) => {
        dispatch({
            type: types.DIVIDE_NUM,
            payload: num1/num2,
            num1: num1,
            num2: num2
        })
    }


    return (
        <div>
            <input type="number" onChange={e => setNum1(e.target.value)}/>
            <input type="number" onChange={e => setNum2(e.target.value)}/>
            <button onClick={ ()=>{sumNum()} }>+</button>
            <button onClick={()=>{minusNum()}}>-</button>
            <button onClick={()=>{multiplyNum()}}>*</button>
            <button onClick={()=>{divideNum()}}>/</button>
            <p> Result: <span> {result} </span></p>
        </div>
    )
}

export default CalculusPage