type PlayerCardProps = {
    name: string;
    level: number;
    characterClass: string;
    title?: string;
    isFeatured?: boolean;
    status: "online" | "offline";
    onSelect: (name: string) => void;
}

const PlayerCard = ({ name, level, characterClass, title = "Guild Member", isFeatured = false, status, onSelect }: PlayerCardProps) => {
    return (
        <div className="player-card">
            <h2>{name}</h2>
            {isFeatured && <h3>Featured Player</h3>}
            <p>Level: {level}</p>
            <p>Class: {characterClass}</p>
            <p>Title: {title}</p>
            <p>Status: {status}</p>
            <button onClick={() => onSelect(name)}>Select Player</button>
        </div>
    );
}

export default PlayerCard;