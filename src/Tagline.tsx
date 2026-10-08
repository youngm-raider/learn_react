interface TagLineProps {
    tags: string[];
}

const TagLine = ({ tags }: TagLineProps) => {
    return (
        <div>
        <ul>
        {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
        ))}
        </ul>
        </div>
    );
};

export default TagLine;