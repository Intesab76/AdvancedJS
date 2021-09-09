import fetch from 'node-fetch';

(async () => {
   const movieData = await fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json').then(response => response.json())

//    console.log(movieData[0].title)

    // const data = JSON.stringify(movieData)

    // console.log(movieData.cast)

    // const replacer = (key , value) =>{
    //     typeof value === 'undefined' ? null :value;
    // }

    // const stringified = JSON.stringify(movieData , replacer)
    // const parsed = JSON.parse(stringified)
    // console.log(parsed)
    // console.log(Object.values(movieData['cast']))
    const byGenres1 = movieData.filter(obj => obj.genres[0] == 'Thriller' || obj.genres[0] == 'Action' )    
    for(let i=0;i<byGenres1.length;i++){
        // console.log('executed')
        const actor = movieData[i].cast
        console.log(actor)
    
    }

    
    const byGenres2 = movieData.filter(obj => obj.genres[0] == 'Comedy' || obj.genres[0] == 'Drama')
    for(let i=0;i<byGenres2.length;i++){
        // console.log('executed')
        const actor = movieData[i].cast
        console.log(actor)
    
    }
  

    
})();