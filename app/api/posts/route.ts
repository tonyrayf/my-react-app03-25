import { NextResponse } from 'next/server';

const posts = [
    {id: 1, title: 'Post 1', content: 'Content 1'},
    {id: 2, title: 'Post 2', content: 'Content 2'},
];

export async function GET() {
    return NextResponse.json(posts);
}