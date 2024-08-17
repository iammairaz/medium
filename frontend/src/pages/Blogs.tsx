import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>
            <AppBar />
            <div className="flex justify-center flex-col">
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    }
    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    autherName={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    publishedDate="15th Aug 2024"
                />)}
            </div>
        </div>
    </div>
}