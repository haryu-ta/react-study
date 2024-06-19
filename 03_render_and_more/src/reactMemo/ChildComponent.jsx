import React from "react";

const BoxStyle = {
    width : "98%",
    background: "yellow",
    height: "fit-content",
    padding: "15px 15px"
}

// useMemo 子コンポーネントでの無駄なレンダリングの抑止
const ChildCoponent = React.memo(({value}) => {

    console.log("%cChildComponent Loaded","color:blue");

    return (
        <>
            <div style={BoxStyle}>
                <h2>
                    子コンポーネント領域
                </h2>
                ボタンBクリック回数:{value}
            </div>
        </>
    )
});
export default ChildCoponent;