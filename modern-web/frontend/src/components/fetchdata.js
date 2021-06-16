import React, {useState, useEffect} from 'react';

const Fetchdata= () =>{
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
            <div className="container">
                <div className="tableFixHead">
                <table className="table table-striped table-light table-bordered">
                    <thead className="table-dark">
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
        </div>
    )
}

export default Fetchdata;
