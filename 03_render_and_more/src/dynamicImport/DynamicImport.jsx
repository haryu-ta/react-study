import { Suspense } from "react";
import BackToHome from "../components/BackToHome"
import { useState,lazy } from "react";
//import ComponentI from "../components/ComponentI";

const btnSytle = {
    width : "200px",
    height : "30px"
}

const LazyComponent = lazy(() => import("../components/ComponentI"))

const DynamicImport = () => {

    const [flg,setFlg] = useState(false); 

    const clickHandler = () => {
        setFlg((prev) => !prev);
    }

    return (
        <>
            <button style={btnSytle} onClick={ clickHandler}>ダイナミックインポート</button>
            <div>
                <Suspense fallback={<div>Loading・・・</div>}>
                    {flg && <LazyComponent />}
                </Suspense>
            </div>
            <br/>
            <br/>
            <BackToHome />
        </>
    )
}
export default DynamicImport;