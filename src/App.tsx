import PlayerCard from './PlayerCard'
import './App.css'

function App() {
   return (
    <>
    <PlayerCard name="Alice" level={5} characterClass="Warrior" title="Guild Leader" />
    <PlayerCard name="Bob" level={10} characterClass="Mage" />
    </>
  )
}

export default App
