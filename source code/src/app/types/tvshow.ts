import { Movie, MoviesDto } from './movie';

export type TvShow = {
    id: number;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
    first_air_date: string;
    number_of_episodes?: number;
    number_of_seasons?: number;
    tagline?: string;
    status?: string;
};

export type TvShowsDto = {
    page: number;
    results: TvShow[];
    total_pages: number;
    total_results: number;
};

export function mapToMovies(tvshows: TvShow[]): Movie[] {
    return tvshows.map((tvshow: TvShow) => {
        return {
            ...tvshow,
            title: tvshow.name,
            original_title: tvshow.original_name,
        };
    });
}

export function mapToMovie(tvshow: TvShow): Movie {
    return {
        ...tvshow,
        title: tvshow.name,
        original_title: tvshow.original_name,
    };
}

export function mapToMoviesDto(tvshowDto: TvShowsDto): MoviesDto {
    return {
        results: tvshowDto.results.map(mapToMovie),
        total_pages: tvshowDto.total_pages,
        total_results: tvshowDto.total_results,
        page: tvshowDto.page,
    };
}
