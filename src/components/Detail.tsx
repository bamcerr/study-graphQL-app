import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      id,
      title,
      rating,
      language,
      medium_cover_image,
      description_full,
      isLiked @client
    }
    movie_suggestions(id: $id) {
      id,
      medium_cover_image
    }
  }
`

type sugesstion = {
  medium_cover_image: string;
}

export default () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(GET_MOVIE, {
    variables: { id }
  })

  return <>
    <div>{loading && 'loading'}</div>
    <span>{data?.movie?.isLiked ? "L": "U"}</span>
    <p>{data?.movie?.title}</p>
    <p>{data?.movie?.rating}</p>
    <p>{data?.movie?.language}</p>
    <p>{data?.movie?.medium_cover_image}</p>
    <p>{data?.movie?.description_full}</p>

    <p>{data?.movie_suggestions.map((sugesstion:sugesstion) => sugesstion.medium_cover_image)}</p>
  </>
}