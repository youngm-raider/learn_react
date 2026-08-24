type PlayerCardProps = {
    name: string;
    level: number;
    characterClass: string;
    title?: string;
    onSelect: () => void;
}

const PlayerCard = ({ name, level, characterClass, title = "Guild Member", onSelect }: PlayerCardProps) => {
    return (
        <div className="player-card">
            <h2>{name}</h2>
            <p>Level: {level}</p>
            <p>Class: {characterClass}</p>
            <p>Title: {title}</p>
            <button onClick={onSelect}>Select</button>
        </div>
    );
}

export default PlayerCard;