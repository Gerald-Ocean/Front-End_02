"use client";
import { title } from 'process';
import * as React from 'react';
import axios from 'axios';

interface IDetailBlogProps {
    params: Promise<{
        title: string;
    }>;
}
const getDetailByTitle=async (title: string) => {
    try { 
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?title=${title}`
        );
        console.log(res.data);

        return res.data[0];
    } catch (error) {
            console.log(error);
            return error
        }
    };

const DetailBlog: React.FunctionComponent<IDetailBlogProps> = async (
  props
  ) => {
    const params = await props.params;
    const detail = await getDetailByTitle(params.title);
    return (
        <div>
            <h1 className="text-4xl">
                Detail Page <span>{params.title}</span>
            </h1>
        </div>
    );
};

export default DetailBlog;
