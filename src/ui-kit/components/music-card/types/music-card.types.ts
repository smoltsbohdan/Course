import { GenresMusic } from "@constants/genres";


export interface IMusicCardProps {
  album: string;
  thumbnail: string;
  author: string;
  name: string;
  year: string;
  duration: number;
  genre: GenresMusic;
}
