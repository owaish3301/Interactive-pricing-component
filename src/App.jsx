import './App.css'
import Heading from './components/Heading'
import { HeroCard } from './components/HeroCard'

function App() {

  return (
    <div className='bg-backgroundPattern bg-paleBlue min-h-screen w-screen'>
      <Heading />
      <HeroCard />
    </div>
  )
}

export default App
