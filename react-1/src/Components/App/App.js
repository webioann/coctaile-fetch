import React,{useState,useEffect} from 'react';
import './App.scss';

function App() {
  const[load,setLoad] = useState(false);
  const[data,setData] = useState([]);

  useEffect(() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
    fetch(url)
      .then(respons => respons.json())
      .then((data) => {
        setLoad(false)
        setData(data.drinks)
      })
            console.log('component  Did  Mount()')
        },[]);
    
    if (load) {
      return (
        <div className="App">
          <h2> ...LOADING...</h2>
        </div>
      )
    }else{
      return (
        <div className="App">
          <h2 style={{color:'white'}}> HELLO</h2>
          <div className='work-area'>
            <ul>
              {data.map((data,name) => <li key={data.name} className='li'>
              <img src={data.strDrinkThumb} alt=''/>
              {data.strDrink}
              <p>{data.idDrink}</p>
              </li> )}
            </ul>
          </div>
        </div>
      )
    
    }


}

export default App;
