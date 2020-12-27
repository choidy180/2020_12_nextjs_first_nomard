import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/Movie.entitiy';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    // 전체 보기
    getAll(): Movie[] {
        return this.movies;
    }
    
    // 상세보기
    getOne(id: number): Movie{
        const movie = this.movies.find(movie => movie.id === id);
        if(!movie){
            throw new NotFoundException(`Movie with ID ${id} not found/`);
        }
        return movie;
    }

    // 하나지우기
    deleteOne(id: number) {
        this.getOne(id)
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    // 생성하기
    create(movieData){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }

    // 업데이트하기
    update(id: number, updateData){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});
    }
}
