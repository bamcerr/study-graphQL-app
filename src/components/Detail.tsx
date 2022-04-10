import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      id,
      title,
      medium_cover_image,
      description_full
    }
  }
`

export default () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(GET_MOVIE, {
    variables: { id }
  })

  if(loading) {
    return "loading";
  }

  if(data && data.movie) {
    return data.movie.title;
  }
}