import { useEffect, useState } from "react"
import NewThreeForm from "../components/forms/NewThreeForm";
import { validateThreePagesCount } from "../lib/validations";
import { useNavigate } from "react-router-dom";

export default function NewThree() {

    // Initial data for the form
    const [initialData, setInitialData] = useState({pages: 3});
    const navigate = useNavigate();

    // On first render, loads last used values from localStorage to populate initial form data
    useEffect(() => {
        const pageCount = localStorage.getItem('newThreePages');
        const observatoryName = localStorage.getItem('newThreeObservatory');

        const data = {pages: validateThreePagesCount(pageCount).value};
        if(observatoryName != null) data.observatoryName = observatoryName;
        console.log(data);
        setInitialData(data);
    }, [])

    const onSubmit = async(data) => {
        localStorage.setItem('newThreePages', data.pages);
        localStorage.setItem('newThreeObservatory', data.observatoryName);
        navigate("/");
    }

    return <div className="flex justify-center container mx-auto px-4">
        <h1 className="text-2xl font-bold p-2">Yousa be makin a new three?</h1>
        <NewThreeForm onSubmit={onSubmit} initialValues={initialData} />
    </div>
}