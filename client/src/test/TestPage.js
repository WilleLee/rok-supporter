import { useState, useEffect } from "react";

const fetching = async () => {
    const res = await fetch("http://localhost:8080/test");
    const json = res.json();
    console.log(json);
};

const TestPage = () => {
    const [string, setString] = useState("enter");
    useEffect(() => {
        fetching();
    }, []);
    return (<section>
        <h1>this is test page</h1>
        <p>{string}</p>
    </section>)
};

export default TestPage;