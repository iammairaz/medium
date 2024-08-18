import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { useState } from "react"
import LogoutPopup from "./LogoutPopup";

export const AppBar = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/signin');
    };

    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={"/blogs"}>
            <div className="flex flex-col justify-center">
                Medium
            </div>
        </Link>
        <div>
            <Link to={'/publish'}>
                <button type="button" className="mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700">
                    New
                </button>
            </Link>
            <Avatar name="Mohammad Mairaz" size="big" onClick={() => setShowPopup(true)} />
            {showPopup && (
                <LogoutPopup
                    onConfirm={onLogout}
                    onCancel={() => setShowPopup(false)}
                />
            )}
        </div>
    </div>
}