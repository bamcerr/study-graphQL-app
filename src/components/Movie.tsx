import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!) {
    toggleLikeMovie(id:$id) @client
  }
`

interface Props {
  id: number,
  title?: string,
  medium_cover_image?: string,
  isLiked?: boolean
}

export default ({id, title, medium_cover_image, isLiked}:Props) => {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, { variables: { id: +id } });

  return <>
    <div>
      <Link to={`${id}`}>{id}</Link>
      <button onClick={() => toggleLikeMovie()}>{ isLiked ? 'Unlike' : 'Like'}</button>
    </div>
  </>
}