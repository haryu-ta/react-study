import React,{useMemo} from "react";

const BoxStyle = {
    width : "98%",
    background: "yellow",
    height: "fit-content",
    padding: "15px 15px"
}

const ChildCoponent = ({value}) => {

    console.log("%cChildComponent Loaded","color:#DE3163");

    return useMemo( () => {
        console.log("%cuseMemo","color:#DE3163");
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
    },[value]);
};
export default ChildCoponent;