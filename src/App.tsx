import PlayerCard from './PlayerCard'
import './App.css'

function App() {

  const handleSelect = (name: string) => {
    console.log(`Player selected: ${name}`);
  }

   return (
    <>
    <PlayerCard name="Alice" level={5} characterClass="Warrior" title="Guild Leader" handleSelect={handleSelect} />
    <PlayerCard name="Bob" level={10} characterClass="Mage" handleSelect={handleSelect} />
    </>
  )
}

export default App
