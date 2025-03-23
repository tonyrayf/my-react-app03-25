import styles from "../app/styles/Home.module.css";
interface Post {
    id: number;
    title: string;
    content: string
}

export default async function Home()
{
    const response = await fetch('http://localhost:3000/api/posts/');
    const posts = await response.json();
    return (
        <div>
            <div className={styles.container}></div>
                <h1>Hello</h1>
            <button className={styles.button}>Узнать больше</button>
            <ul>
                {posts.map((post: Post) => (
                    <li key={post.id}>
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}