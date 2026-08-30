type ScoreButtonProps = {
    points: number;
    onScore: (points: number) => void;
};

const ScoreButton = ({ points, onScore }: ScoreButtonProps) => {

    return (
        <button onClick={() => onScore(points)}>Add {points} points</button>
    )
};

export default ScoreButton;