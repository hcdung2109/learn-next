import React from 'react';

async function getPost(id = 5) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
        throw new  Error();
    }

    return res.json();
}

const DashBoardSettingDetail = async ({ params}) => {

    const post = await getPost(params.id);

    return (
        <div>
            <h1>page detail : {params.id}</h1>
            <p>{post?.id}</p>
            <p>{post?.title}</p>
            <p>{post?.body}</p>
        </div>
    );
};

export default DashBoardSettingDetail;