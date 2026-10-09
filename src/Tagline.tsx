interface TagLineProps {
    tags: string[];
}

const TagLine = ({ tags }: TagLineProps) => {
    return (
        <div>
        <ul>
        {tags.map((tag) => (
            <li key={tag}>{tag}</li>
        ))}
        </ul>
        </div>
    );
};

export default TagLine;