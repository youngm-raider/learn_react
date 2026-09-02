import PlayerCard from './PlayerCard'
import ActionButton from './ActionButton'
import ScoreButton from './ScoreButton'
import './App.css'

function App() {

  const handleSelect = (name: string) => {
    console.log(`Player selected: ${name}`);
  }

  const handleSave = () => {
    console.log('Game saved!');
  }

  const handleLoad = () => {
    console.log('Game loaded!');
  }

  const handleScore = (points: number) => {
    console.log(`Scored ${points} points!`);
  }

   return (
    <div>
      <PlayerCard name="Alice" level={5} characterClass="Warrior" title="Guild Leader" onSelect={handleSelect} />
      <PlayerCard name="Bob" level={10} characterClass="Mage" onSelect={handleSelect} />
    <br />
      <ActionButton label="Save Game" onAction={handleSave} />
      <ActionButton label="Load Game" onAction={handleLoad} />
    <br />
      <ScoreButton points={5} onScore={handleScore} />
      <ScoreButton points={10} onScore={handleScore} />
        
    </div>
  )
}

export default App
