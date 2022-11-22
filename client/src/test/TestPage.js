import { useState, useEffect } from "react";

const TestPage = () => {
    const [string, setString] = useState("disconnect");
    const [information,setInformation] = useState({
        name : "",
        userid : ""
    });
    const {name,userid} = information;

    useEffect(() => {
        fetch('http://localhost:8080/test')
        .then(res => {
            console.log('done');
            return res.json()
        })
        .then(res => {
            console.log(res);
            setString(res.content);
        })
    }, [])

    const contentSubmit = (e) => {
        const req = {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({information})
        };
        console.log("req.body : "+req.body);

        fetch('http://localhost:8080/testPost', req)
        .then((res) => res.json())
        .then((res) => {
            console.log(res[0].name);
            setInformation({
                name : res[0].name
            })
        })

        setInformation({
            name:"",
            userid:""
        })
    }

    const onChange = (e) => {
        const {name,value} = e.target;
        setInformation({
            ...information,
            [name]:value
        })
    }

    return (<section>
        <h1>this is test page</h1>
        <p>{string}</p>
        <input name="name" placeholder="name" onChange={onChange} value={name || ''}></input><p></p>
        <input name="userid" placeholder="userid" onChange={onChange} value={userid || ''}></input>
        <button type="submit" onClick={contentSubmit}>send</button>
    </section>)
};

export default TestPage;