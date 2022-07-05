import Navbar from "./Navbar"
import Hero from "./Hero";
import Card from "./Card";
import data from "./data"
import './App.css';


function App() {
  const cards=data.map(item=>{
    return (<Card
      key={item.id} 
      item={item}
  />)
  })
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <section className="cards-list">
        {cards}
        </section>
       
      </header>
    </div>
  );
}

export default App;
