import { Film } from './index';

export class Character {

    id: string;
    name: string;
    height: string;
    mass: string;
    hairColor: string;
    eyeColor: string;
    birthYear: string;
    gender: string;
    homeworld: string;
    skinColor: string;
    films: Film[];
    species: string[];
    vehicles: string[];
    starships: string[];
    url: string;
    avatar: string;
    created: Date;
    updated: Date;

    constructor(obj: any) {
        this.name = obj.name || '';
        this.height = obj.height || '';
        this.mass = obj.mass || '';
        this.hairColor = obj.hair_color || '';
        this.eyeColor = obj.eye_color || '';
        this.birthYear = obj.birth_year || '';
        this.gender = obj.gender || '';
        this.homeworld = obj.homeworld || '';
        this.skinColor = obj.skin_color || '';
        this.films = obj.films ? obj.films.map((film: Film) => ( new Film({url: film}))) : [] as any[];
        this.species = obj.species || [];
        this.vehicles = obj.vehicles || [];
        this.starships = obj.starships || [];
        this.url = obj.url || '';
        this.avatar = obj.avatar || `https://eu.ui-avatars.com/api/?name=${this.name.split('')[0]}&background=4fa0f3&color=fff&size=180`;
        this.created = obj.created ? new Date(obj.created) : null as any;
        this.updated = obj.edited ? new Date(obj.edited) : null as any;
        this.id = this.url ? this.parseId() : '';
    }

    parseId(): any {
        const strInArray: any = this.url.split('/');
        const indexId = strInArray.length - 2;
        return strInArray[indexId];
    }
}
