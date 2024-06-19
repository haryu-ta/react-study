import React from "react";

const BoxStyle = {
    width : "98%",
    background: "yellow",
    height: "fit-content",
    padding: "15px 15px"
}

const ChildCoponent = React.memo(({value,clickHandler}) => {

    console.log("%cChildComponent Loaded","color:salmon");

    return (
        <>
            <div style={BoxStyle}>
                <h2>
                    子コンポーネント領域
                </h2>
                <label>
                    <button onClick={clickHandler}>ボタンB</button>
                    このpropsに渡すstate更新
                </label>
                ボタンBクリック回数:{value}
            </div>
        </>
    )
});
export default ChildCoponent;