import React from "react";
import { useState, useEffect } from "react";

interface Movie{
    Title: string;
    Year: string;
    Rated: string;
    Director:string;
    Plot:string;
    Images: string[];
}

export default function Movies(){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/075b6aaba5ee43554ecd55006e5d080a8acf08fe/Film.JSON");
                if (!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Movie[] = await response.json();
                setMovies(data);
                setIsLoading(false);
            }
            catch (err:any){
                setError(err.message);
                setIsLoading(false);
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchMovies();
    }, [])

    if (isLoading){
        return <div>Loading...</div>;
    }
    if (error){
        return <div>Error: {error}</div>;
    }

    return(
        <div>
            <h1 className="text-5xl text-blue-400 text-center mb-8">Movies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    movies.map((movie, index) => (
                        <div id={`movie-${index}`} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                    <img
                    src={movie.Images[1]}
            alt={movie.Title} />
             </figure>
  <div className="card-body">
    <h2 className="card-title">{movie.Title}</h2>
    <p>{movie.Plot}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                        
                    ))
                }

            </div>
        </div>
    )

}