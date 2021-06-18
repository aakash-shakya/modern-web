import React , {useState} from 'react';

const Postdata =() =>{
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onTitleChange = e => setTitle(e.target.value)
    const onBodyChange= e => setBody(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();

        const data = { title, body };

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
    };
    fetch('http://localhost:8000/posts/',requestOptions).then(response=>response.json()).then(res=>console.log(res));

}
return(
    <div>
        <form>
            <input type='text' name = 'title' value = {title} onChange={onTitleChange}></input>
            <input type='text' name = 'body' value={body} onChange={onBodyChange}></input>
            <button type='submit' onClick={handleSubmit}></button>
        </form>
    </div>
)


}

export default Postdata;