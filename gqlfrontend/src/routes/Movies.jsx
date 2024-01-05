import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const ALL_MOVIE = gql`
  query getMovies {
    allMovie {
      title
      id
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;

const Movies = () => {
  const { data, loading, error } = useQuery(ALL_MOVIE);

  if (loading) {
    return <h1>...Loading</h1>;
  }

  if (error) {
    return <h1>could not fetch</h1>;
  }

  return (
    <ul>
      <h1>Movies</h1>
      {
        data.allMovie.map((movie, i) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>  
          </li>
          
        )
      )}

      <h1>Tweets</h1>
      {
        data.allTweets.map((tweet, i) => (
          <li key={tweet.id}>{tweet.text}/ by: {tweet.author.fullName}</li>
        )
      )}
    </ul>
  );
};

export default Movies;
