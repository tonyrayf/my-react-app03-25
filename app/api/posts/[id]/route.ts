import { NextResponse } from 'next/server';

const posts = [
  { id: 1, title: 'Пост 1', content: 'Содержание поста 1' },
  { id: 2, title: 'Пост 2', content: 'Содержание поста 2' },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postId = parseInt(params.id, 10);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return NextResponse.json({ error: 'Пост не найден' }, { status: 404 });
  }

  return NextResponse.json(post);
}