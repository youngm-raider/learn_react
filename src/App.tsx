import PlayerCard from './PlayerCard'
import './App.css'

function App() {

  const onSelect = (name: string) => {
    console.log(`Player selected: ${name}`);
  }

   return (
    <>
    <PlayerCard name="Alice" level={5} characterClass="Warrior" title="Guild Leader" onSelect={() => onSelect("Alice")} />
    <PlayerCard name="Bob" level={10} characterClass="Mage" onSelect={() => onSelect("Bob")} />
    </>
  )
}

export default App
