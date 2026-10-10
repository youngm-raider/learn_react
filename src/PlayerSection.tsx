import PlayerSummary from './PlayerSummary';
import type { Player } from './PlayerSummary';

export interface PlayerSectionProps {
    players: Player[];
}


const PlayerSection = ({ players }: PlayerSectionProps) => {
    return (
        <div>
            {players.map((player) => (
                <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                    Player Section
                    <PlayerSummary key={player.name} player={player} />
                </div>
            ))}
        </div>
    );
};

export default PlayerSection;