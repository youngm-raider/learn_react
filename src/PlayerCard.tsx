type PlayerCardProps = {
    name: string;
    level: number;
    characterClass: string;
    title?: string;
    handleSelect: (name: string) => void;
}

const PlayerCard = ({ name, level, characterClass, title = "Guild Member", handleSelect }: PlayerCardProps) => {
    return (
        <div className="player-card">
            <h2>{name}</h2>
            <p>Level: {level}</p>
            <p>Class: {characterClass}</p>
            <p>Title: {title}</p>
            <button onClick={() => handleSelect(name)}>Select Player</button>
        </div>
    );
}

export default PlayerCard;