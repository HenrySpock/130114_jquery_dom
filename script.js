$(document).ready(function() {
    // 1. When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
    console.log("Let's get ready to party with jQuery!");
  
    // 2. Give all images inside of an article tag the class of image-center
    $('article img').addClass('image-center');
  
    // 3. Remove the last paragraph in the article
    $('article p').last().remove();
  
    // 4. Set the font size of the title to be a random pixel size from 0 to 100
    var randomSize = Math.floor(Math.random() * 101);
    $('#title').css('font-size', randomSize + 'px');
  
    // 5. Add an item to the list; it can say whatever you want.
    $('ol').append('<li>New list item</li>');
  
    // 6. Empty the aside and put a paragraph in it apologizing for the list's existence.
    $('aside').empty().append("<p>I must apologize for the list's existence. It was an ill-conceived idea that sprang forth from my overzealous love for lists. It seemed like a good idea at the time, but ultimately proved to be utterly useless. Like a hitchhiker's towel. </p>");
  
    // 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
    $('input[type=number]').on('change', function() {
      var red = $('#red').val();
      var green = $('#green').val();
      var blue = $('#blue').val();
      $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    });
  
    // 8. Add an event listener so that when you click on the image, it is removed from the DOM.
    $('img').on('click', function() {
      $(this).remove();
    });

    // 9. Replace the lorem ipsum text with text from Monty Python.
    $('article').children('p').replaceWith("<p>I am instructed to read to you a message from the Executive Producer of the film. 'It has been brought to our attention that some of the jokes in this film are considered by certain people to be in bad taste, unfair, and offensive to some nationalities, peoples, and religious groups. We wish to offend as many people as possible so please be assured that no matter what your race, colour, or creed, you will be insulted by us.'</p>");

    // 9. Add a <p> element after the image with the text 'Here are some more thoughts:'.
    $('img').after('<p>Here are some more thoughts:</p>');
}); 

$(document).ready(function() {
  $('#movie-form').on('submit', function(event) {
    event.preventDefault();
    var movieTitle = $('#movie-title').val();
    var movieRating = $('#movie-rating').val();

    if (movieTitle.length < 2) {
      alert("Please enter a movie title with at least two characters.");
    } else if (isNaN(movieRating) || movieRating < 1 || movieRating > 10) {
      alert("Please enter a valid movie rating between 1 and 10.");
    } else {
      var movieInfo = $('<div class="movie-info"></div>');
      movieInfo.append('<p>' + movieTitle + ': ' + movieRating + '</p>');
      movieInfo.append('<button class="delete-button">Delete</button>');
      $('#movie-list').append(movieInfo);
      $('form')[0].reset();
    }
  });

  $('#movie-list').on('click', '.delete-button', function() {
    $(this).parent('.movie-info').remove();
  });
});

$(document).ready(function() {
  // code for appending movie elements

  $('#sort-title-asc').on('click', function() {
    var movieList = $('#movie-list');
    var items = movieList.children('.movie-info').sort(function(a, b) {
      var textA = $(a).find('p').text().toUpperCase();
      var textB = $(b).find('p').text().toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    movieList.empty().append(items);
  });

  $('#sort-title-desc').on('click', function() {
    var movieList = $('#movie-list');
    var items = movieList.children('.movie-info').sort(function(a, b) {
      var textA = $(a).find('p').text().toUpperCase();
      var textB = $(b).find('p').text().toUpperCase();
      return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
    });
    movieList.empty().append(items);
  });

  $('#sort-rating-hi').on('click', function() {
    var movieList = $('#movie-list');
    var items = movieList.children('.movie-info').sort(function(a, b) {
      var ratingA = parseInt($(a).find('p').text().split(': ')[1]);
      var ratingB = parseInt($(b).find('p').text().split(': ')[1]);
      return ratingB - ratingA;
    });
    movieList.empty().append(items);
  });

  $('#sort-rating-lo').on('click', function() {
    var movieList = $('#movie-list');
    var items = movieList.children('.movie-info').sort(function(a, b) {
      var ratingA = parseInt($(a).find('p').text().split(': ')[1]);
      var ratingB = parseInt($(b).find('p').text().split(': ')[1]);
      return ratingA - ratingB;
    });
    movieList.empty().append(items);
  }); 
}); 