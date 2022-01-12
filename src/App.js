import './style.css';
import NavBar from './NavBar'
import Card from './Card'
import data from './data'

export default function App() {
  
  const cards = data.map(item => { return (
    <Card 
      key={item.id}
      item={item}
    />
  )})

  return (
    <div>
      <NavBar />
      <div>
        {cards}
      </div>
    </div>
    
  )
}
  


