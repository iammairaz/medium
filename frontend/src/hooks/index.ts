import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    id:string;
    title:string;
    content:string;
    author:{
        name:string
    }
}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/fetchBlogs`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                setBlogs(response.data.response.data);
                setLoading(false);
            })
    }, [])
    return {
        loading,
        blogs
    }
}
export const useBlog = ({id}:{id:string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/fetchBlog/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                const res = response.data;
                setBlog(res.response.data);
                setLoading(false);
            })
    }, [])
    return {
        loading,
        blog
    }
}

