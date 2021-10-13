class MovieDB {
    constructor() {
        this.numberOfFilms = 2;
        this.personalMovieDb = {
            count: this.numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            privat: false
        };
        this.lastFilm();
        console.log(this.personalMovieDb);
    }
    
    lastFilm() {
        for(let i = 0; i < 2; i++) {
            let film = prompt('film')
            let filmRate = prompt('filmRate')
            this.personalMovieDb.movies[film] = filmRate;
        }
    }
}

new MovieDB()