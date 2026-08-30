import PlayerCard from './PlayerCard'
import ActionButton from './ActionButton'
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

   return (
    <div>

    <PlayerCard name="Alice" level={5} characterClass="Warrior" title="Guild Leader" onSelect={handleSelect} />
    <PlayerCard name="Bob" level={10} characterClass="Mage" onSelect={handleSelect} />
    <br />s
    <ActionButton label="Save Game" onAction={handleSave} />
    <ActionButton label="Load Game" onAction={handleLoad} />
    <br />
    </div>
  )
}

export default App
