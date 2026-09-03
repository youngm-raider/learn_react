type PlayerCardProps = {
    name: string;
    level: number;
    characterClass: string;
    title?: string;
    isFeatured?: boolean;
    onSelect: (name: string) => void;
}

const PlayerCard = ({ name, level, characterClass, title = "Guild Member", isFeatured = false, onSelect }: PlayerCardProps) => {
    return (
        <div className="player-card">
            <h2>{name}</h2>
            <h3>{isFeatured ? "Featured Player" : ""}</h3>
            <p>Level: {level}</p>
            <p>Class: {characterClass}</p>
            <p>Title: {title}</p>
            <button onClick={() => onSelect(name)}>Select Player</button>
        </div>
    );
}

export default PlayerCard;