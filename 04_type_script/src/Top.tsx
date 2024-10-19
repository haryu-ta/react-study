import { useEffect, useState } from "react";

const Top = () => {
    
    const [val,setVal] = useState("");

    const delay = async ():Promise<string> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve("OK"),5000);
        });
    }

    useEffect(() => {
        const handle = async () => {
            const data = await delay();
            setVal(data);
        }
        handle();
    },[]);

    return (
        <>
            {val}
        </>
    )
}
export default Top;