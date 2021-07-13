const API = "https://api.themoviedb.org/3";

export function get(path){
    return    fetch(API+path, {
        headers: {
          Authorization:
            " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGJkMWI2MDdhODY2OGZiZDM3YmQ4OGM1N2NhMTlkNyIsInN1YiI6IjYwYmFiNjE5MzdiM2E5MDA0MGJkZTg4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jhhpmvE66vGid3-brV2RMVbnCiMUESkzAZfEATk9Ahw",
          "Content-Type": "application/json;charset=utf-8",
        },
      }).then(result => result.json());
}