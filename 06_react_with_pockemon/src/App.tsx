import { useEffect, useState } from 'react';
import './App.css'
import "./assets/css/Footer.css";
import { apiResultType, apiType, detailType } from './type/type';
import Card from './components/Card';
import Navbar from './components/Navbar';

// API BaseURL
const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const getPockemonInfo = async (url:string): Promise<apiType> => {
  const responseResult = await fetch(url);
  return responseResult.json();
}

const getPockemonDetail = async (results: apiResultType[]): Promise<detailType[]> => {
  const datas: detailType[] = await Promise.all(
    results.map(async (data) => {
      const response = await fetch(data.url);
      return response.json();
    })
  );
  return datas;
}

// わざと遅延させる関数
const waitTimer = async (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function App() {

  const [results, setResults] = useState<detailType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextURL,setNextURL] = useState<string>("");
  const [prevURL,setPrevURL] = useState<string|null>(null);
  
  const getPockemonData =  async (url:string) => {
    await waitTimer(1500);
    const dataSet: apiType = await getPockemonInfo(url);
    setNextURL(dataSet.next);
    setPrevURL(dataSet.previous);
    const datas: detailType[] = await getPockemonDetail(dataSet.results);
    setResults(datas);
    setLoading(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      // 全てのポケモンの情報を取得
      await getPockemonData(baseUrl);
    };
    fetchData();
  }, []);
  

  const nextPage = async () => {
    setLoading(true);
    await getPockemonData(nextURL);
    window.scrollTo(0,0);
  }

  const prevPage = async () => {
    if(prevURL){
      setLoading(true);
      await getPockemonData(prevURL);
      window.scrollTo(0,0);
    }
  }

  return (
    <>
      <Navbar />
      <div className='App'>
        {loading ?
          <h1>Now Loading...</h1> :
          <div>
            <div className="pokemonCardContainer">
              {results.map((pokemon) => (
                <Card key={pokemon.id} content={pokemon} />
              ))
              }
            </div>
            <div className="Footer">
              <input type="button" value="前へ" disabled={prevURL ? false : true} onClick={prevPage}/>
              <input type="button" value="次へ" disabled={nextURL ? false : true} onClick={nextPage} />
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default App

