import React, { FC } from "react";
import { MusicCard } from "../../ui-kit/components/music-card/music-card.component";
import { GenresMusic } from "../../constants/genres";
import PageWrapper from "../../ui-kit/components/page-wrapper/page-wrapper";

import { CatalogWrapper } from "./styles";


// const SONGS_QUERY = gql`
//     {
//         songs {
//             id
//             album
//             thumbnail
//             author
//             name
//             year
//             duration
//             genre
//         }
//     }
// `;

const Catalog: FC = (): JSX.Element => {
  // const { data, loading, error } = useQuery(SONGS_QUERY);
  // if (error) return <pre>{error.message}</pre>
  // if (loading) return <div>Loading...</div>;

  return (
    <PageWrapper>
      <CatalogWrapper>
        <MusicCard
          album={"Album"}
          thumbnail={"https://upload.wikimedia.org/wikipedia/ru/3/31/XXXTentacion.jpg"}
          author={"XXXTentacion"}
          name={"The spectacle before us was indeed sublime"}
          year={'April 26, 2019'}
          duration={200}
          genre={GenresMusic.HipHop}
        />
        <MusicCard
          album={"Album"}
          thumbnail={"https://upload.wikimedia.org/wikipedia/ru/3/31/XXXTentacion.jpg"}
          author={"XXXTentacion"}
          name={"The spectacle before us was indeed sublime"}
          year={'April 26, 2019'}
          duration={200}
          genre={GenresMusic.HipHop}
        />
        <MusicCard
          album={"Album"}
          thumbnail={"https://upload.wikimedia.org/wikipedia/ru/3/31/XXXTentacion.jpg"}
          author={"XXXTentacion"}
          name={"The spectacle before us was indeed sublime"}
          year={'April 26, 2019'}
          duration={200}
          genre={GenresMusic.HipHop}
        />
        <MusicCard
          album={"Album"}
          thumbnail={"https://upload.wikimedia.org/wikipedia/ru/3/31/XXXTentacion.jpg"}
          author={"XXXTentacion"}
          name={"The spectacle before us was indeed sublime"}
          year={'April 26, 2019'}
          duration={200}
          genre={GenresMusic.HipHop}
        />
        <MusicCard
          album={"Album"}
          thumbnail={"https://upload.wikimedia.org/wikipedia/ru/3/31/XXXTentacion.jpg"}
          author={"XXXTentacion"}
          name={"The spectacle before us was indeed sublime"}
          year={'April 26, 2019'}
          duration={200}
          genre={GenresMusic.HipHop}
        />
        <MusicCard
          album={"Album"}
          thumbnail={"https://upload.wikimedia.org/wikipedia/ru/3/31/XXXTentacion.jpg"}
          author={"XXXTentacion"}
          name={"The spectacle before us was indeed sublime"}
          year={'April 26, 2019'}
          duration={200}
          genre={GenresMusic.HipHop}
        />
        <MusicCard
          album={"Album"}
          thumbnail={"https://upload.wikimedia.org/wikipedia/ru/3/31/XXXTentacion.jpg"}
          author={"XXXTentacion"}
          name={"The spectacle before us was indeed sublime"}
          year={'April 26, 2019'}
          duration={200}
          genre={GenresMusic.HipHop}
        />
        <MusicCard
          album={"Album"}
          thumbnail={"https://upload.wikimedia.org/wikipedia/ru/3/31/XXXTentacion.jpg"}
          author={"XXXTentacion"}
          name={"The spectacle before us was indeed sublime"}
          year={'April 26, 2019'}
          duration={200}
          genre={GenresMusic.HipHop}
        />
        <MusicCard
          album={"Album"}
          thumbnail={"https://upload.wikimedia.org/wikipedia/ru/3/31/XXXTentacion.jpg"}
          author={"XXXTentacion"}
          name={"The spectacle before us was indeed sublime"}
          year={'April 26, 2019'}
          duration={200}
          genre={GenresMusic.HipHop}
        />
      </CatalogWrapper>
    </PageWrapper>
  );
}

export default Catalog;
