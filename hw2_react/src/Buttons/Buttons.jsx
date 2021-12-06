import {useState} from 'react';

export function Buttons() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    function handleClick1() {
        setCount1(count1 + 1);
    }

    function handleClick2() {
        setCount2(count2 + 2);
    }

    function handleClick3() {
        setCount3(count3 + 3);
    }

    return <>
        <button onClick = {handleClick1}>{count1}</button>
        <button onClick = {handleClick2}>{count2}</button>
        <button onClick = {handleClick3}>{count3}</button>
        <p>{count1 + count2 + count3}</p>
    </>
}