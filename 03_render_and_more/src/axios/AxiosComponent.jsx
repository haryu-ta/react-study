import { useEffect,useState } from "react";
import axios from "axios"

const AxiosComponent = () => {

    const [data,setData] = useState([]);
    // const [res,setRes] = useState([]);

    useEffect(() => {
        const response = [ 
            {id : "1",name: "Go"},
            {id : "2",name: "Akina"},
            {id : "3",name: "Yu"},
            {id : "4",name: "Kei"},
        ]
        setData(response);
        const getData = async () => {
            const response = await axios.get("http://localhost:3003/teams");
            console.log(response);
        }
        getData();
    },[])

    return (
        <>
            {data.map((_data) => {
                return (
                    <div key={_data.id}>{_data.id}</div>
                )
            })}
        </>
    )

}
export default AxiosComponent