import { Link } from "react-router-dom";

interface BlogCardProps {
    autherName: string;
    title: string;
    content: string;
    publishedDate: string;
    id?: string;
}
export const BlogCard = ({ autherName, title, content, publishedDate, id }: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex mt-3">
                <div className="flex justify-center flex-col">
                    <Avatar name={autherName} />
                </div>
                <div className="font-extralight pl-2">
                    {autherName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500">
                    {publishedDate}
                </div>
            </div>
            <div className="flex text-xl font-semibold">
                {title}
            </div>
            <div className="flex text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="flex text-slate-400 text-sm pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </Link>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 
    ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"}font-extralight text-gray-600 dark:text-gray-300`}>{name[0]}</span>
    </div>
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-400">

    </div>
}