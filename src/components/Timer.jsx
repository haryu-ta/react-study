import { useState,useEffect } from 'react';

const Timer = () => {

    const [ count,setCount ] = useState(0);
    const [ isExec,setIsExec ] = useState(true);

    // 空想配列の場合は初回レンダリング時に一度のみ実行
    useEffect(() => {
        console.log('useEffect');
        // 破棄時に実行
        return ( () => {
            console.log('useEffect Destroy');
        })
    },[])

    // 第２引数に指定したstateが変更されるたびに破棄→再作成
    useEffect(() => {
        let id = null;
        if(isExec){
            id = window.setInterval(() => {
                setCount(prev => ++prev)
            },1000);
        }
        return ( () => {
            window.clearInterval(id);
        })
    },[isExec])

    useEffect(() => {
        console.log('useEffect2');
        document.title = 'counter:' + count;
        // 破棄時に実行
        return (() => {
            console.log('useEffect2 Destroy');
        })
    },[count])

    return (
        <div style={ {"border": "solid","padding": "5px"}}>
            <button onClick={() => setIsExec(prev => !prev)}>{isExec ? "一時停止" : "再開"}</button>
            <span> カウント:{count}</span>
        </div>
    )
}
export default Timer