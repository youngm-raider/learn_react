import PlayerSummary from './PlayerSummary';
import type { PlayerSummaryProps } from './PlayerSummary';


const PlayerSection = ({player}: PlayerSummaryProps) => {
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}>
            Player Section
            <PlayerSummary player={player} />
        </div>
    );
};

export default PlayerSection;