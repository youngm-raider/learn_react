import PlayerCard from './PlayerCard'
import ActionButton from './ActionButton'
import ScoreButton from './ScoreButton'
import RewardCard from './RewardCard'
import Panel from './Panel'
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

  const handleReward = (points: number) => {
    console.log(`Claimed reward with ${points} points!`);
  }

   return (
    <div>
      <PlayerCard name="Alice" level={5} characterClass="Warrior" title="Guild Leader" isFeatured status="online" onSelect={handleSelect} />
      <PlayerCard name="Bob" level={10} characterClass="Mage" status="offline" onSelect={handleSelect} />
    <br />
      <ActionButton label="Save Game" onAction={handleSave} />
      <ActionButton label="Load Game" onAction={handleLoad} />
    <br />
      <ScoreButton points={5} onScore={handleScore} />
      <ScoreButton points={10} onScore={handleScore} />

    <br />
      <RewardCard name="Epic Sword" points={50} onClaim={handleReward} /> 
      <RewardCard name="Magic Wand" points={30} onClaim={handleReward} />

    <br />
    <Panel title="Game Info">
      <p>Welcome to the game! Select your player and start playing.</p>
    </Panel>
    <Panel title="A button to press">
      <ActionButton label="Press Me" onAction={() => console.log('Button pressed!')} />
    </Panel>
    </div>
  )
}

export default App
