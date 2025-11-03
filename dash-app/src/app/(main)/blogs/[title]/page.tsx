"use client";
import * as React from 'react';

interface IDetailBlogProps {
    params: Promise<{
        title: string;
    }>;
}

const DetailBlog: React.FunctionComponent<IDetailBlogProps> = async (
  props
  ) => {
    const params = await props.params;
    return (
        <div>
            <h1 className="text-4xl">
                Detail Page <span>{params.title}</span>
            </h1>
        </div>
    );
};

export default DetailBlog;
