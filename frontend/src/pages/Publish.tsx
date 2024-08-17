import { ChangeEvent, useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    async function sendRequest() {
        try {
            const requestBody = {
                title: title,
                content: content
            }
            await axios.post(`${BACKEND_URL}/api/v1/blog/createBlog`, requestBody, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            navigate("/blogs");
        } catch (error) {

        }
    }
    return <div>
        <div>
            <AppBar />
            <div className="flex justify-center w-full pt-6">
                <div className="max-w-screen-md w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog</label>
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter title" required />
                    <TextEditor onChange={(e) => {
                        setContent(e.target.value)
                    }} />
                    <button onClick={sendRequest} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Publish post
                    </button>
                </div>
            </div>
        </div>
    </div>
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return <form>
        <div className="mt-4 w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="py-2 bg-white rounded-b-lg dark:bg-gray-800">
                <textarea onChange={onChange} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required ></textarea>
            </div>
        </div>
    </form>
}