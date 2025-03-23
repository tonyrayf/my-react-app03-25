import { NextResponse } from 'next/server';

const posts = [
    {id: 1, title: 'Post 1', content: 'Content 1'},
    {id: 2, title: 'Post 2', content: 'Content 2'},
];

export async function GET(request: Request, {params}: {params: {id: string}}) {
    const postId = parseInt(params.id, 10);
    const post = posts.find((p) => p.id === postId);

    return NextResponse.json(post);
}