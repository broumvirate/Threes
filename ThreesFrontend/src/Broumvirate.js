import { useEffect, useState } from "react"

function Broumvirate() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7203/api/Broumvirate").then((res) => res.json()).then(res => {
            console.log("fetched em")
            setMembers(res);
        })
    }, [])

    const memberEntries = members.map((el, i) => {
        return <div key={i}>
            <h1>{el.name}</h1>
            {el.isFunny ? <h3>This guy's funny</h3> : null}
        </div>
    })
    return <div> {memberEntries} </div>
}

export default Broumvirate