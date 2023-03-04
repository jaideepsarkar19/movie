import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import { useState } from "react";
import moviedata from "./data.json";
import { AddColors } from "./AddColor";
import { Home } from "./Home";
import { UserList } from "./UserList";
import { AddMovie } from "./AddMovie"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";



console.log(moviedata);

console.log(moviedata[2].summary);

const INITIAL_MOVIE_LIST = [
  {
    name: "Baby",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTdhNjBjZDctYTlkYy00ZGIxLWFjYTktODk5ZjNlMzI4NjI3XkEyXkFqcGdeQXVyMjY1MjkzMjE@._V1_SX300.jpg",
    rating: 9,
    summary:
      "An elite counter-intelligence unit learns of a plot, masterminded by a maniacal madman. With the clock ticking, it's up to them to track the terrorists.",
    trailer: "https://youtu.be/-Yu_2nyOP5o",
  },
  {
    name: "Special 26",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ1NDI5MjMzNF5BMl5BanBnXkFtZTcwMTc0MDQwOQ@@._V1_SX300.jpg",
    rating: 7.8,
    summary:
      "Based on a real life group of con artists who pulled off many clever robberies during 1980s, and robbed famous businessmen and politicians by pretending to be the CBI or Income tax officers and conducting raids, on the pretext of conducting raids they would take away all the black money hoarded by them.",
  },
  {
    name: "GangaaJal ",
    poster: "https://m.media-amazon.com/images/M/MV5BYjRjOWViZTgtYjA4Ny00MWJiLTkxYzktMzdlOGRmMWYwOTdjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    rating: 8.9,
    summary:
      "An IPS officer motivates and leads a dysfunctional, corrupt police force of Tezpur to fight against a corrupt politician.",
  },
  {
    name: "Naam Shabana",
    poster: "https://m.media-amazon.com/images/M/MV5BMTkxMDk1Mjc2NF5BMl5BanBnXkFtZTgwNjk4Njk3MTI@._V1_SX300.jpg",
    rating: 7.2,
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from Link catalogue",
  },
  {
    name: "Dangal",
    poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg",
    rating: 8.8,
    summary:
      "Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.",
  },
  {
    name: "Sultan",
    poster: "https://m.media-amazon.com/images/M/MV5BNDc0OTU3M2MtMGFhMi00ZGVlLWI4YmItODA1ZTc0OGY0NmJlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
    rating: 7,
    summary:
      "After the death of his son, Sultan Ali Khan, a middle-aged wrestler, gives up the sport. Years later, he sets out to revive his career as he needs the prize money and wants to regain his lost respect.",
  },
  {
    name: "Vikram",
    poster: "https://m.media-amazon.com/images/M/MV5BMDRiOWNjYjUtMDI0ZC00MDMyLTkwZDItNTU5NWQ1NjEyNGYxXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_SX300.jpg",
    rating: 8.1,
    summary:
      "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.",
  },
  {
    name: "Shinam",
    poster: "https://m.media-amazon.com/images/M/MV5BNGM0M2VhMzAtNDcwMS00OWEzLWFmNjUtYmNhNjE5M2Y1M2IzXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg",
    rating: 7.0,
    summary:
      "A decent movie with a good message. There are some people who responded with as not much of a crime thriller or an 1960's movie storyline. But one thing women and children abuse are increasingly high only post 2000. So these kind of movie let's the parents know to educate boys on how they should behave with women and how to educate girls about the society and how rotten it got into. Overall a good attempt, and my kudos to the director and actors..",
  },
];



export default function App() {


  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate();

  return (
    <ThemeProvider  theme={theme}>
      <CssBaseline />
      <div>
        <AppBar className="theme" position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/movies")}>
              MovieList
            </Button>
            <Button color="inherit" onClick={() => navigate("/movies/add")}>
              AddMovie
            </Button>
            <Button color="inherit" onClick={() => navigate("/add-colors")}>
              AddColors
            </Button>
            <Button color="inherit" onClick={() => navigate("/user-profile")}>
              UserList
            </Button>
            <Button className="toggle"
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? "dark" : "light"} Mode
            </Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/add" element={<AddMovie />} />
          <Route path="/add-colors" element={<AddColors />} />
          <Route path="/user-profile" element={<UserList />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
  //JSX Ends
}

function MovieList() {
  const movieList = INITIAL_MOVIE_LIST;
  return (
    <div className="movie-list">
      {movieList.map((mk, index) => (
        <Movie key={index} movie={mk} id={index} />
      ))}
    </div>
  );
}



function Movie({ movie, id }) {


  const [show, setShow] = useState(true);
  //true = visible
  //false -hidden
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const summaryStyle = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-spec">
        <h2 className="movie-name">
          {movie.name} - {id}
        </h2>
        <p style={styles} className="movie-rating">
          ⭐{movie.rating}
        </p>
      </div>
      <IconButton
        aria-label="toggle-description"
        color="primary"
        onClick={() => setShow(!show)}>

        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      <IconButton
        aria-label="info"
        color="primary"
        onClick={() => navigate("/movies/" + id)}>
        <InfoIcon />
      </IconButton>


      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}
