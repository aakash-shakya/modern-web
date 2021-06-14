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
            <div className="table-center">
                <table border='1' className='table'>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Product</th>
                            <th>Sale</th>
                            <th>Country</th>
                        </tr>
                    </thead>
            { data?.map((item)=>
                    <tbody>
                        <tr>
                            <td key={item.id}>{item.year}</td>
                            <td>{item.product}</td>
                            <td>{item.sale}</td>
                            <td>{item.country}</td>
                        </tr>
                    </tbody>
        
                )}
                </table>
            </div>
        </div>
    )
}

export default Fetchdata;
