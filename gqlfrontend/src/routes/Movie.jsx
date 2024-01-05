import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieId:String!){
    movie(id:$movieId) {
      id
      title
    }
  }
`

const Movie = () => {

  const { id } = useParams();

  const { data, loading } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    }
  });
  console.log(data)
  console.log(loading)
  if(loading){
    return <h1>...fetching movie</h1>
  }

  return (  
    <div>
      {data.movie.title}
    </div>
  );
}
 
export default Movie;