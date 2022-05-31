import { ICatalogElement } from "../types";
import { GenresMusic } from "../../../constants/genres";


export const mockCatalog: ICatalogElement[] = [
  {
    album: "Particles E.P",
    thumbnail: 'test',
    author: "MOON",
    name: "Plus Four",
    year: 2012,
    duration: 320,
    genre: GenresMusic.Electronic,
  },
  {
    album: "Bad Vibes Forever",
    thumbnail: 'test',
    author: "XXXTENTACION",
    name: "NUMB",
    year: 2018,
    duration: 140,
    genre: GenresMusic.HipHop,
  },
]
