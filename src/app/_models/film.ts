import { Character } from './character';

export class Film {

    id: string;
    url: string;
    title: string;
    episodeId: number;
    openingCrawl: string;
    director: string;
    producer: string;
    releaseDate: Date;
    characters: Film[];
    planets: [];
    starships: [];
    vehicles: [];
    species: [];
    created: Date;
    updated: Date;

    constructor(obj: any) {
        this.url = obj.url || '';
        this.id = this.url ? this.parseId() : '';
        this.title = obj.title || '';
        this.episodeId = obj.episode_id || null;
        this.openingCrawl = obj.opening_crawl || '';
        this.director = obj.director || '';
        this.producer = obj.producer || '';
        this.releaseDate = obj.release_date ? new Date(obj.release_date) : null as any;
        this.characters = obj.characters ? obj.characters.map((character: Character) => ( new Film({url: character}))) : [];
        this.planets = obj.planets || [];
        this.starships = obj.starships || [];
        this.vehicles = obj.vehicles || [];
        this.species = obj.species || [];
        this.created = obj.created ? new Date(obj.created) : null as any;
        this.updated = obj.edited ? new Date(obj.edited) : null as any;

    }

    parseId(): any {
        const strInArray: any = this.url.split('/');
        const indexId = strInArray.length - 2;
        return strInArray[indexId];
    }

}
