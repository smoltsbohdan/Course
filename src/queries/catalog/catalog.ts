import { gql } from "@apollo/client";


export const songsQuery = gql`
    query Catalog {
        songs {
            id
            album
            thumbnail
            author
            name
            year
            duration
            genre
        }
    }
`
