import './App.css';
import Item from './components/item/index'
import Card from './components/Card/index'

function App() {
  return (
    <>
      <h1>Minha primeira aplicação em react</h1>
      <ul>       
        <Item>Item 1</Item>  
        <Item>Item 2</Item>  
        <Item>Item 3</Item>   
      </ul>
      <Card />
    </>
  );
}

export default App;
