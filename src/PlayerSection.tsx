import PlayerSummary from './PlayerSummary';
import type { Player } from './PlayerSummary';

export interface PlayerSectionProps {
    players: Player[];
}


const PlayerSection = ({ players }: PlayerSectionProps) => {
    return (
        <div>
            <ul>
            {players.map((player) => (
                <li key={player.name} style={{ listStyleType: 'none' }}>
                <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                    Player Section
                    <PlayerSummary player={player} />
                </div>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default PlayerSection;