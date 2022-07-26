import { useEffect, useState } from "react"

export default function Broumvirate() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7203/api/Broumvirate").then((res) => res.json()).then(res => {
            setMembers(res);
        })
    }, [])

    const memberEntries = members.map((el, i) => {
        return <div key={i} className="bg-green-300 rounded-md m-3 p-2">
            <h1>{el.name}</h1>
            {el.isFunny ? <h3>This guy's funny</h3> : null}
        </div>
    })
    return <div className="container mx-auto px-4"> { members.length === 0 ? <NoBroumvirate/> : memberEntries } </div>
}

function NoBroumvirate()
{
    return <div className="bg-red-300 rounded-md m-3 p-2">
        <h1 className="text-xl font-bold p-2">No Broumvirate Members.</h1>
    </div>
}