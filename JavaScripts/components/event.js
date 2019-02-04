// SEARCH

const searchMovie = () => {
  $('#search_input').keyup(function () {
    let chartyped = $('#search_input').val();
    $('.movieLoc').show();
    $('.movieLoc').not(`:contains(${chartyped})`).closest('.movieLoc').hide();
  });
};

//  Buttons filter

const filterCards = () => {
  $('#morning_btn').on('click', (e) => {
    $('.movieLoc').each((i, MovieCard) => {
      // 'each' is looking for in each individual card
      $(MovieCard).show();
      $(MovieCard).not(':contains("Morning")').hide();
    });
  });

  $('#afternoon_btn').on('click', (e) => {
    $('.movieLoc').each((i, MovieCard) => {
      $(MovieCard).show();
      $(MovieCard).not(':contains("Afternoon")').hide();
    });
  });

  $('#evening_btn').on('click', (e) => {
    $('.movieLoc').each((i, MovieCard) => {
      $(MovieCard).show();
      $(MovieCard).not(':contains("Evening")').hide();
    });
  });

  $('#afterdark_btn').on('click', (e) => {
    $('.movieLoc').each((i, MovieCard) => {
      $(MovieCard).show();
      $(MovieCard).not(':contains("After Dark")').hide();
    });
  });

  $('#showall_btn').on('click', (e) => {
    $('.movieLoc').each((i, MovieCard) => {
      $(MovieCard).show();
    });
  });
};

export { searchMovie, filterCards };