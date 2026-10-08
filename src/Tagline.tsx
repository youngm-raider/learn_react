interface TagLineProps {
    tags: string[];
}

const TagLine = ({ tags }: TagLineProps) => {
    return (
        <p>{tags.join(', ')}</p>
    );
};

export default TagLine;