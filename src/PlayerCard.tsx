type PlayerCardProps = {
    name: string;
    level: number;
    characterClass: string;
    title?: string;
}

const PlayerCard = ({ name, level, characterClass, title }: PlayerCardProps) => {
    return (
        <div className="player-card">
            <h2>{name}</h2>
            <p>Level: {level}</p>
            <p>Class: {characterClass}</p>
            {title && <p>Title: {title}</p>}
        </div>
    );
}

export default PlayerCard;