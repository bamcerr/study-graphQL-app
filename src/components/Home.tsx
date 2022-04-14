import { useQuery, gql, useMutation } from "@apollo/client";
import Movie from "./Movie"

const GET_MOVIES = gql`
{
  movies {
    id
    title
    medium_cover_image
    isLiked @client
  }
}
`

interface Movie {
  id: number,
  title: string,
  medium_cover_image: string,
  isLiked: boolean
}

export default () => {
  const { loading, data, error } = useQuery(GET_MOVIES);
  
  return (<>
    <div>
      {loading && <div>Loding...</div>}
      {
        !loading && data?.movies.map((movie: Movie) => {
          return <Movie  key={movie.id} id={movie.id} title={movie.title} medium_cover_image={movie.medium_cover_image} isLiked={movie.isLiked} />
        })
      }
    </div>
  </>)
}