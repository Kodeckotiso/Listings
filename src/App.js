import logo from './logo.svg';
import './App.css';


const data =
[
  {
    Location : "Kitusuru",
    description : "Near a police station",
    Rooms :"3" ,
    Price : "16,000 Kshs",
  },
  {
    Location : "Langata",
    description : "Near a supermarket",
    Rooms :"5" ,
    Price : "100,000 Kshs",
  },
  {
    Location : "Mombasa",
    description : "Near a garage",
    Rooms :"4" ,
    Price : "60,000 Kshs",
  },


]

const propertyList = data.map(myList =>{
  const items = `${myList.Location} - ${myList.description} - ${myList.Rooms} - ${myList.Price}`
  return <li>{items}</li>
}
);
function App() {
  return (
   <div>
    <ul>
      {propertyList}
    </ul>
   </div>
   

  );
}

export default App;
