import { AppBar } from "../components/AppBar";
import { BlogDetailCard } from "../components/BlogDetailCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams()
    const { loading, blog } = useBlog({
        id: id || ""
    });
    if (loading || !blog) {
        return <div>
            <AppBar />
            <div className="flex justify-center flex-col">
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    }
    return <div>
        <BlogDetailCard blog={blog} />
    </div>
}