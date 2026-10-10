interface TagLineProps {
    tags: {id: number, name: string }[];
}

const TagLine = ({ tags }: TagLineProps) => {
    return (
        <div>
        <ul>
        {tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
        ))}
        </ul>
        </div>
    );
};

export default TagLine;