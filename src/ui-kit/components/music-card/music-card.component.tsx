import React, { FC, memo } from 'react';

import {
  AdditionalInfoWrapper,
  MainInfoWrapper,
  MusicCardAlbum,
  MusicCardDate,
  MusicCardThumbnail,
  MusicCardTitle,
  MusicCardWrapper
} from './styled';
import { IMusicCardProps } from './types/music-card.types';


export const MusicCard: FC<IMusicCardProps> = memo((
  {
    album,
    thumbnail,
    author,
    name,
    year,
    duration,
    genre,
  }
): JSX.Element => (
  <MusicCardWrapper>
    <MusicCardAlbum>
      {album}
    </MusicCardAlbum>
    <MusicCardThumbnail background={thumbnail}/>
    <MainInfoWrapper>
      <MusicCardDate>
        {year}
      </MusicCardDate>
      <MusicCardTitle>
        {name}
      </MusicCardTitle>
    </MainInfoWrapper>
    <AdditionalInfoWrapper>
      {author}
    </AdditionalInfoWrapper>
  </MusicCardWrapper>
));
