import { GenresMusic } from "../../constants/genres";


export interface ICatalogStore {
  catalog: ICatalogElement[];
}

export interface ICatalogElement {
  album: string;
  thumbnail: string;
  author: string;
  name: string;
  year: number;
  duration: string;
  genre: GenresMusic;
}
