import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


export function MovieDetails({ movieList }) {
  const { id } = useParams();
  console.log(id)
  const movie = movieList[id];
  console.log(movie);
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="480"
        src={movie.trailer}
        title="GangaaJal"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-spec">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="book-rating">⭐{movie.rating}</p>
        </div>
        <p className="book-summary">{movie.summary}</p>
        <Button
          onClick={() => navigate(-1)}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
