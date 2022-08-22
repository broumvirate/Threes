import { useEffect, useState } from "react"

export default function Broumvirate() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7203/api/Broumvirate").then((res) => res.json()).then(res => {
            setMembers(res);
        })
    }, [])

    const memberEntries = members.length === 0 ? <NoBroumvirate/> : members.map((el, i) => {
        return <div key={i} className="inline-block bg-green-300 rounded-md m-3 p-2">
            <h1>{el.name}</h1>
            {el.isFunny ? <h3>This guy's funny</h3> : null}
        </div>
    })
    return <div> {memberEntries} </div>
}

function NoBroumvirate()
{
    return <div className="inline-block bg-red-300 rounded-md m-3 p-2">
        <h1 className="text-xl font-bold p-2">No Broumvirate Members.</h1>
    </div>
}