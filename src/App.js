import { React } from 'react';
import Category from './components/Category';
import Food from './components/Food';
import FoodCards from './components/FoodCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <FoodCards />
     <Food />
     <Category />
    </div>
  );
}

export default App;
