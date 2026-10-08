interface Player {
    name: string;
    level: number;
}

interface PlayerSummaryProps {
    player: Player;
}

const PlayerSummary = ({ player }: PlayerSummaryProps) => {
    return (
        <div>
            <h2>{player.name}</h2>
            <p>Level: {player.level}</p>
        </div>
    );
};

export default PlayerSummary;