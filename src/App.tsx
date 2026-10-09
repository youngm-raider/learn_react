import PlayerCard from './PlayerCard'
import ActionButton from './ActionButton'
import ScoreButton from './ScoreButton'
import RewardCard from './RewardCard'
import Panel from './Panel'
import PlayerSection from './PlayerSection'
import TagLine from './Tagline'
import './App.css'

function App() {

  const tag1: string[] = ["React", "TypeScript", "Vite"];
  const tag2: string[] = ["JavaScript", "HTML", "CSS"];

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
    <Panel title="Game Info" footer={<button>Press this</button>}>
      <p>Welcome to the game! Select your player and start playing.</p>
    </Panel>
    <Panel title="A button to press" footer={<button>Also press me</button>}>
    <p> Trying something new</p>
    </Panel>
    <PlayerSection player={{ name: "Alice", level: 5 }} />
    <PlayerSection player={{ name: "Bob", level: 10 }} />
    <br />
    <TagLine tags={tag1} />
    <TagLine tags={tag2} />
    </div>
  )
}

export default App
