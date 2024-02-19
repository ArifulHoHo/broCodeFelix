export type Genres = {
    id: number
    name: string
}

export type GenresDto = {
    genres: Genres[];
}

export type Movie = {
    id: number,
    backdrop_path: string,
    genre_ids: number[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
    vote_count: number
    revenue?: number
    budget?: number
    runtime?: number
    tagline?: string
    status?: string
    genres?: Genres[]
    first_air_date?: string,
    last_air_date?: string,
    number_of_episodes?: number,
    number_of_seasons?: number
}

export type MoviesDto = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}