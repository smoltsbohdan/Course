import { GenresMusic } from "../../constants/genres";


export interface ICatalogStore {
  catalog: ICatalogElement[];
}

export interface ICatalogElement {
  album: string;
  thumbnail: string;
  author: string;
  name: string;
  year: string | number;
  duration: string | number;
  genre: GenresMusic;
}
