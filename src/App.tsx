import PlayerCard from './PlayerCard'
import ActionButton from './ActionButton'
import './App.css'

function App() {

  const handleSelect = (name: string) => {
    console.log(`Player selected: ${name}`);
  }

   return (
    <div>

    <PlayerCard name="Alice" level={5} characterClass="Warrior" title="Guild Leader" onSelect={handleSelect} />
    <PlayerCard name="Bob" level={10} characterClass="Mage" onSelect={handleSelect} />
    <br />
    <ActionButton label="Save Game" onAction={() => console.log('Game saved!')} />
    <ActionButton label="Load Game" onAction={() => console.log('Game loaded!')} />
    <br />
    </div>
  )
}

export default App
