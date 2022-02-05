async function getJsonData() {
  const response = await fetch(
    "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "38d0607357msh93f7b87eaae52c3p15d8b9jsn35654a2ba12d",
      },
    }
  );
  const data = await response.json();
  return data;
}
console.log(await getJsonData());

export { getJsonData };
