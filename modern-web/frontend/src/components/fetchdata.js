import React, {useState, useEffect, Component} from 'react';


// FUNCTION BASED COMPONENT

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


// CLASS BASED COMPONENT


class FetchData extends Component{
    constructor(props){
        super(props)
        this.state ={
            data:[],
            loading:true,
            error:null,
        };
    }

    componentDidMount(){
        const url = 'http://localhost:8000/get/';

        const getDatas = () => 
        fetch(url).then(response=>{
                if(response.ok){
                    return response.json()
                }
                else{
                    this.setState({error:response.error(),loading:false})
                }
            });
        

        getDatas().then(data => this.setState({data:data, loading:false}))
                 .catch(error=>this.setState({error:error,loading:false}));
    }

    render(){

        const { data, loading, error } = this.state;

        if (error){
            return(
                <div>
                    <h1>Error occured</h1>
                </div>
            )
        }

        return(
            <div>

        { loading ? <h1>Loading</h1> :
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
        }

        </div>
            
        )
            
    }
}

export default FetchData;
