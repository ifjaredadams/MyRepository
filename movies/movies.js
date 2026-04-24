// Define the Movie class
class Movie {
  // title, cast, description, rating
  #title;
  #cast;
  #description;
  #rating;

  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

  // Method to update the rating of the movie
  updateRating(newRating) {
    this.#rating = newRating;
  }

  getTitle() {
    return this.#title;
  }

  // Method to display the movie's information
  displayInfo() {
    const div = document.getElementById("movie-info");

    div.innerHTML += `
      <p><strong>Title:</strong> ${this.#title}</p>
      <p><strong>Cast:</strong> ${this.#cast.join(", ")}</p>
      <p><strong>Description:</strong> ${this.#description}</p>
      <p><strong>Rating:</strong> ${this.#rating}</p>
      <br>
    `;
  }
}


// Test your implementation

const movie1 = new Movie(
  "The Shawshank Redemption",
  ["Tim Robbins", "Morgan Freeman"],
  "Two imprisoned men bond over a number of years, finding eventual redemption through acts of common decency.",
  9.3
);
const movies = [movie1];

// Display the initial information of the movie
movie1.displayInfo();


// Function to update movie rating
function updateMovieRating(title, newRating) {
  for (let movie of movies) {
    if (movie.getTitle() === title) {
      movie.updateRating(newRating);

      const div = document.getElementById("movie-info");
      div.innerHTML += "<h3>Updated rating:</h3>";

      movie.displayInfo();
    }
  }
}


// Update the rating of the movie
updateMovieRating("The Shawshank Redemption", 9.5);

// Display the updated information of the movie