import Link from "next/link";

export default function Header()
{
    return (
        <nav>
            <Link href="/main">Главная</Link> | {' '}
            <Link href="/about">О нас</Link> | {' '}
            <Link href="/contacts">Контакты</Link> | {' '}
        </nav>
    );
}