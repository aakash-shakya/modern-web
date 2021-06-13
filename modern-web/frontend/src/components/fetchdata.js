import React, {useState, useEffect} from 'react';

const Fetchdata=()=>{
    const [data, setData] = useState(null);
    const url = "http://localhost:8000";
    
    const getData = () =>
        fetch(`${url}/get`)
            .then((res) => res.json())
    

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])

    return(
        <div>
        {
        data?.map((item)=>
        <ul>
            <li>{item.product}</li>
        </ul>
            )
        }
        </div>
    )
}

export default Fetchdata;
