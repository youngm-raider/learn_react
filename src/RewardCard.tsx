type RewardCardProps = {
    name: string;
    points: number;
    onClaim: (num: number) => void;
};

const RewardCard = ({ name, points, onClaim }: RewardCardProps) => {
    return (
        <div>
            {name} - {points} points
            <button onClick={() => onClaim(points)}>Claim Reward</button>
        </div>
    )
};

export default RewardCard;