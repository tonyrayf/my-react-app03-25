interface UserCardProps
{
    name: string;
    age: number;
    hobby: string;
}

export default function UserCard({name, age, hobby}: UserCardProps)
{
    return (
        <div>
            <h2>{name}</h2>
            <p>Возраст {age}</p>
            <p>Хобби: {hobby}</p>
        </div>
    )
}