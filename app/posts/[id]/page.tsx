export default async function Post({ params }: { params: { id: string } }) {
    const response = await fetch(`http://localhost:3000/api/posts/${params.id}`);
    const post = await response.json();
  
    return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
    );
  }