import { Link } from "react-router-dom";

export default function Navbar(){
    return <header className="h-20 px-8 bg-green-100">
                <div className="md:w-2/3 w-full mx-auto pt-5 flex flex-row justify-between">
                    <div>
                        <Link to="/">
                            <h1 className="text-2xl font-bold cursor-pointer">Home</h1>
                        </Link>
                    </div>
                    <div className="pt-1 text-lg flex flex-row">
                        <div className="mx-2">
                            <Link to="/new">
                                New Three
                            </Link>
                        </div>
                        <div className="ml-2">
                            <Link to="/observatories">
                                My Observatories
                            </Link>
                        </div>
                    </div>
                </div>
    </header>
}