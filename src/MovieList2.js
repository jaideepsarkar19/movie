import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Book } from "./Book";
import { API } from "./global";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export function MovieList() {

    const movieList = INITIAL_MOVIE_LIST;
  const [bookList, setBookList] = useState([]);

//   const getBooks = () => {
//     fetch(`${API}/books`, {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((bks) => setBookList(bks));
//   };

//   useEffect(() => getBooks(), []); // called only once
  const navigate = useNavigate();
  return (
    <div>
      <div className="movie-list">
        {movieList.map((mk, index) => (
          <Movie
            key={mk.id}
            movie={mk}
            id={mk.id}
            deleteButton={
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  fetch(`${API}/books/${mk.id}`, {
                    method: "DELETE",
                  }).then(() => getBooks());
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="edit"
                color="secondary"
                onClick={() => navigate(`/movies/edit/${mk.id}`)}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}