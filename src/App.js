import React, {Fragment,useState,useEffect} from 'react'
import Formulario from './Components/Formulario';
import Header from './Components/Header'
import Listadonoticias from './Components/ListadoNoticias';


function App() {

  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    
    const consultarAPI = async () => {
      const APIKEY = 'bb25434fad0645a6aeef7fbcd3d98cdb'
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${APIKEY}`
    
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])


  return (
    <Fragment>
      <Header
        title="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario setCategoria={setCategoria}/>
        <Listadonoticias noticias={noticias}/>
      </div>
    </Fragment>
  );
}

export default App;
