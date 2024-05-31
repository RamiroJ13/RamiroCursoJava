const btnAnterior = document.getElementById("btnAnterior");
const btSiguiente = document.getElementById("btnSiguiente");
const btnContenedor = document.getElementById("btnContenedor");

let pagina = 1;

btnAnterior.addEventListener("click", ()=>{
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
});

btnSiguiente.addEventListener("click", ()=>{
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async()=>{

   try{

    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=af62bc071f091bac5863b762aa5e15bf&language=es-MX&page=${pagina}`)
    console.log(respuesta);

    if(respuesta.status === 200){

        const datos = await respuesta.json();
        console.log(datos);

        let peliculas = [];

        datos.results.forEach(pelicula => {
            peliculas += `
            <div class="movies">
                <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="" />
                <div class="movie-titulo">
                    <h3>${movie.name}</h3>
                    
                </div>
            </div>
            `;            
        });

        btnContenedor.innerHTML = peliculas;

    }

   }
   
   catch(error){
    console.log(error.message);

   }

}

cargarPeliculas();

