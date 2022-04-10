import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_MOVIES = gql`
{
  movies {
    id
    medium_cover_image
  }
}
`

interface Movie {
  id: number,
  medium_cover_image: string
}

export default () => {
  const { loading, data, error } = useQuery(GET_MOVIES)

  return (<>
    <div>
      {loading && <div>Loding...</div>}
      {!loading && data?.movies.map((movie: Movie) => { return <div key={movie.id}><Link to={`${movie.id}`}>{movie.id}</Link></div> })}
    </div>
  </>)
}