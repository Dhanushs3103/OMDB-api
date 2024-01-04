let apiKey = `fefe62f8`;
let movieContainer = document.querySelector(`#movies-container`);
let searchBtn = document.querySelector(`#search`);
let movieImg = document.getElementById(`movie-img`);
let movieDetails = document.getElementById(`movie-details`);

    function getData () {
        let movieNameInput = document.querySelector(`#movie-input`);
        let movieName = movieNameInput.value;
        fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`)
        .then((res) => res.json())
        .then((res) => displayData(res))
        .catch(function (err) {
          console.log(`error:${err}`)
        })

        movieNameInput.value = "";
    }


    function displayData(moviedata) {
        movieImg.innerHTML = "";
        movieDetails.innerHTML = "";
        
        if (!moviedata.Title || moviedata.length === 0) {
           alert("Movie not found");
           movieDetails.style.display ="none";
        }
        else {
            let img = document.createElement(`img`);
            // image creation
            img.src = moviedata.Poster;
            movieImg.appendChild(img);
            // Name creation
            let name = document.createElement(`h3`);
            name.textContent = `Movie Title: ${moviedata.Title}`;
            // Release date
            let releaseDate = document.createElement(`h3`);
            releaseDate.textContent = `Release Date: ${moviedata.Released}`;
            // Actors
            let actors = document.createElement(`h3`);
            actors.textContent = `Actors: ${moviedata.Actors}`;
            // BoxOffice
            let boxOffice = document.createElement(`h3`);
            boxOffice.textContent = `BoxOffice: ${moviedata.BoxOffice}`;
            // Director name
            let director = document.createElement(`h3`);
            director.textContent = `Director: ${moviedata.Director}`;
            // Rating
            let rating = document.createElement(`h3`);
            rating.textContent = `Rating: ${moviedata.imdbRating}`;
            // Genre
            let genre = document.createElement(`h3`);
            genre.textContent = `Genre: ${moviedata.Genre}`;
            // Language
            let language = document.createElement(`h3`);
            language.textContent = `Language: ${moviedata.Language}`;
            // imdbId
            let imdbId = document.createElement(`h3`);
            imdbId.textContent = `imdbId: ${moviedata.imdbID}`;
            
            movieDetails.style.backgroundColor = `#F2F1EB`;
            movieDetails.append(name, releaseDate, actors, boxOffice, director, rating, genre, language, imdbId);

            movieContainer.append(movieImg, movieDetails);
        }

    }
