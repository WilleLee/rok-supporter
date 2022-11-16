import { useState, useEffect } from "react";

const TestPage = () => {
    const [string, setString] = useState("enter");
    useEffect(() => {
        fetch('http://localhost:8080/test')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            setString(data.content);
        })
    }, [])

    return (<section>
        <h1>this is test page</h1>
        <p>{string}</p>
        <input type="button"></input>
    </section>)
};

export default TestPage;