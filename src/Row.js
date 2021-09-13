import React  from 'react';
import './App.css';
import './List.css';

function Row({title ,fetchUrl}){
    const [data,setData]=React.useState([]);
    console.log(title)
    console.log(fetchUrl)
    
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

    React.useEffect(async()=>{
        const url = 'https://api.themoviedb.org/3'+fetchUrl;
        console.log(url);
        let res = await fetch(url);
        let data =await  res.json();
        console.log(data)
        setData(data.results);


    },[]);
    return(
        <div className="row">
           <h2 class="title">{title}</h2>
           <div className="row_posters">
              
            
                {   
                    data ? data.map(eachitem =>{
                        const image = IMG_PATH + eachitem.poster_path;
                        return (<div key={eachitem.id}><img class="row_poster" src= {image} alt="img" />      
                        </div>)
                    }):<div>Loading...</div>

                }
                </div>

        </div>
    )
}
export default Row;