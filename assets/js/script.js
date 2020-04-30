// Card one

let flipCardContainer1 = document.querySelector(".flip-card-container1");
      flipCardContainer1.addEventListener("click", function() {
          console.log("flipCardContainer1 clicked")
        flipCardContainer1.classList.toggle("flip");
      });

// Card two

let flipCardContainer2 = document.querySelector(".flip-card-container2");
      flipCardContainer2.addEventListener("click", function() {
          console.log("flipCardContainer2 clicked")
        flipCardContainer2.classList.toggle("flip");
      });


// all atrributes cards alphabetically presented with Characters

let cards = [
  
  {
    'name': 'Bearz',
    'image_link': 'assets/images/Bear_card.png',
    'strength': 10,
    'weight': 140,
    'power': 10,
    'age': 5,
    'magic': 0.5,
  },
  {
    'name': 'Boobee',
    'image_link': 'assets/images/boobee_card.png',
    'strength': 2,
    'weight': 2,
    'power': 5,
    'age': 12,
    'magic': 10,
  },
    {
    'name': 'Catboy',
    'image_link': 'assets/images/Catboy_card.png',
    'strength': 10,
    'weight': 130,
    'power': 10,
    'age': 3,
    'magic': 9,
  },
  {
    'name': 'Cat Castle',
    'image_link': 'assets/images/Catcastle_card.png',
    'strength': 10,
    'weight': 10000,
    'power': 10,
    'age': 200,
    'magic': 10,
  },
  {
    'name': 'Catdog',
    'image_link': 'assets/images/Catdog_card.png',
    'strength': 7,
    'weight': 10,
    'power': 8,
    'age': 22,
    'magic': 7,
  },
  {
    'name': 'Daah',
    'image_link': 'assets/images/Daadee_card.png',
    'strength': 8,
    'weight': 85,
    'power': 8,
    'age': 30,
    'magic': 10,
  },
  {
    'name': 'Darbin',
    'image_link': 'assets/images/Darbin_card.png',
    'strength': 10,
    'weight': 117,
    'power': 9,
    'age': 45,
    'magic': 10,
  },
  {
    'name': 'Frog',
    'image_link': 'assets/images/Frog_card.png',
    'strength': 5,
    'weight': 1,
    'power': 6,
    'age': 900,
    'magic': 1,
  },
  {
    'name': 'Geko',
    'image_link': 'assets/images/Geko_card.png',
    'strength': 6,
    'weight': 5,
    'power': 7,
    'age': 25,
    'magic': 8,
  },
  {
    'name': 'Ghost',
    'image_link': 'assets/images/ghost_card.png',
    'strength': 7,
    'weight': 0,
    'power': 8,
    'age': 1000,
    'magic': 8,
  },
  {
    'name': 'Glammy',
    'image_link': 'assets/images/Glammy_card.png',
    'strength': 7,
    'weight': 60,
    'power': 7,
    'age': 49,
    'magic': 10,
  },
  {
    'name': 'Grand',
    'image_link': 'assets/images/grand_card.png',
    'strength': 10,
    'weight': 250,
    'power': 8,
    'age': 75,
    'magic': 8,
  },
  {
    'name': 'Karr',
    'image_link': 'assets/images/Karr_cards.png',
    'strength': 8,
    'weight': 90,
    'power': 8,
    'age': 21,
    'magic': 6,
  },
  {
    'name': 'Kay-kee',
    'image_link': 'assets/images/Kaykee_cards.png',
    'strength': 2,
    'weight': 0.1,
    'power': 2,
    'age': 1,
    'magic': 8,
  },
  {
    'name': 'Knotting-Mouth',
    'image_link': 'assets/images/Knottingmouth_card.png',
    'strength': 10,
    'weight': 400,
    'power': 9,
    'age': 100,
    'magic': 9,
  },
  {
    'name': 'Mar-Mee-duc',
    'image_link': 'assets/images/Marmee_card.png',
    'strength': 5,
    'weight': 68,
    'power': 6,
    'age': 28,
    'magic': 8,
  },
  {
    'name': 'Moo',
    'image_link': 'assets/images/Moo_card.png',
    'strength': 10,
    'weight': 300,
    'power': 9,
    'age': 35,
    'magic': 7,
  },
  {
    'name': 'Mook',
    'image_link': 'assets/images/Mook_cards.png',
    'strength': 3,
    'weight': 0.1,
    'power': 3,
    'age': 3,
    'magic': 7,
  },
  {
    'name': 'Mum-Mers',
    'image_link': 'assets/images/Mummers_card.png',
    'strength': 6,
    'weight': 70,
    'power': 8,
    'age': 70,
    'magic': 9,
  },
  {
    'name': 'Oppih',
    'image_link': 'assets/images/oppih_card.png',
    'strength': 7,
    'weight': 300,
    'power': 7,
    'age': 18,
    'magic': 8,
  },
  {
    'name': 'Pee-Peels',
    'image_link': 'assets/images/Peapeel_card.png',
    'strength': 10,
    'weight': 150,
    'power': 9,
    'age': 2000,
    'magic': 7,
  },
  {
    'name': 'Peet',
    'image_link': 'assets/images/Peet_card.png',
    'strength': 9,
    'weight': 94,
    'power': 7,
    'age': 42,
    'magic': 7,
  },
  {
    'name': 'Raaaa',
    'image_link': 'assets/images/Raaaaa_cards.png',
    'strength': 10,
    'weight': 450,
    'power': 9,
    'age': 50,
    'magic': 9,
  },
  {
    'name': 'Rory Dragon',
    'image_link': 'assets/images/Rory_Dragon_card.png',
    'strength': 10,
    'weight': 1000,
    'power': 10,
    'age': 700,
    'magic': 9,
  },
  {
    'name': 'T-Ruck',
    'image_link': 'assets/images/Truck_card.png',
    'strength': 8,
    'weight': 100,
    'power': 8,
    'age': 200,
    'magic': 7,
  },
  {
    'name': 'Twoo',
    'image_link': 'assets/images/Twoo_card.png',
    'strength': 7,
    'weight': 9,
    'power': 8,
    'age': 400,
    'magic': 7,
  },
  {
    'name': 'Upsteps',
    'image_link': 'assets/images/Upsteps_card.png',
    'strength': 9,
    'weight': 200,
    'power': 8,
    'age': 46,
    'magic': 8,
  },
  {
    'name': 'Weewoo',
    'image_link': 'assets/images/Weewoo_card.png',
    'strength': 7,
    'weight': 3,
    'power': 8,
    'age': 7,
    'magic': 9,
  },
  {
    'name': 'Whistle',
    'image_link': 'assets/images/Whistle_card.png',
    'strength': 7,
    'weight': 90,
    'power': 9,
    'age': 47,
    'magic': 8,
  },
   {
    'name': 'Winky-Face',
    'image_link': 'assets/images/Winky_Face_card.png',
    'strength': 4,
    'weight': 8,
    'power': 4,
    'age': 2,
    'magic': 10,
  }

];

// cards.length - 0 to 29. Use Math.random().

$(function() {
    $('.cardy').click(function(e) {
        e.preventDefault();
        var number = Math.floor(Math.random()*cards.length);
        //console.log(cards[number]);
        $(this).children('div').children('div').children('img').attr('src', cards[number]);
    });
});

cards[0] = "assets/images/cards/Bear_card.png"; //Bearz
cards[1] = "assets/images/cards/boobee_card.png"; //Boobee
cards[2] = "assets/images/cards/Catboy_card.png"; //Catboy
cards[3] = "assets/images/cards/Catcalstle_card.png"; //Cat Castle
cards[4] = "assets/images/cards/Catdog_card.png"; // Catdog
cards[6] = "assets/images/cards/Daadee_card.png"; // Daah
cards[5] = "assets/images/cards/Darbin_card.png"; // Darbin
cards[7] = "assets/images/cards/Frog_card.png"; //Frog
cards[8] = "assets/images/cards/Geko_card.png"; // Geko
cards[9] = "assets/images/cards/ghost_card.png"; // Ghost
cards[10] = "assets/images/cards/Glammy_card.png"; //Glammy
cards[11] = "assets/images/cards/grand_card.png"; //Grand
cards[12] = "assets/images/cards/Karr_card.png"; // Karr
cards[13] = "assets/images/cards/Kaykee_card.png"; // Kaykey
cards[14] = "assets/images/cards/Knottingmouth_card.png"; // Knotting-Mouth
cards[15] = "assets/images/cards/Marmee_card.png"; // Mar-me-Duc
cards[16] = "assets/images/cards/Moo_card.png"; // Moo
cards[17] = "assets/images/cards/Mook_card.png"; // Mook
cards[18] = "assets/images/cards/Mummers_card.png"; //Oppih
cards[29] = "assets/images/cards/oppih_card.png"; // Catdog
cards[20] = "assets/images/cards/Peapeel_card.png"; //Pee-Peels
cards[21] = "assets/images/cards/Peet_card.png"; // Peet
cards[22] = "assets/images/cards/Raaaaa_card.png"; // Raaaaa
cards[23] = "assets/images/cards/Rory_Dragon_card.png"; // Rory Dragon
cards[24] = "assets/images/cards/Truck_card.png"; // T-Ruck
cards[25] = "assets/images/cards/Twoo_card.png"; // Twoo
cards[26] = "assets/images/cards/Upsteps_card.png"; // UpSteps
cards[27] = "assets/images/cards/Weewoo_card.png"; // Weewoo
cards[28] = "assets/images/cards/Whistle_card.png"; // Whistle
cards[29] = "assets/images/cards/Winky_Face_card.png"; // Winky Face


// Player One Choses attribute().

function playGame() {
  // Wait for player 1 to click on their card
  // onclick
  let playerOneCharacter = chooseCharacter()
 
  // Wait for player 2 to click on their card
  // onclick
  let playerTwoCharacter = chooseCharacter()
 
  // Score should be some data structure that holds the scores for both players
  // There's probably a better way to do this, but for now, make it an array of two numbers.
  let score = getScore(playerOneCharacter, playerTwoCharacter)
 
  // Update a global variable keeping track of each character's score, and the page
 
  // I know I said no global variables, but we'll fix that later.
 
  // When the game is done, use an if statement to say who's the winner. Not
  // sure if this has to be in this function or another. Will let you decide.
 
}
 
/* Given two characters, compare them and return a score.
 
Args:
  characterOne, characterTwo: character objects. The characters to compare
 
Returns:
  array of two numbers: The scores for characterOne and characterTwo respectively.
*/



// Selecting a random character -- pick a random number between 0 and the 
// cards.length - 1. Use Math.random(). Getting a random integer between two values in the document below

function getScore(characterOne, characterTwo) {
  if (characterOne.strength > characterTwo.strength) {
	return [2, 0];
  }
 
  else if (characterOne.strength < characterTwo.strength) {
	return [0, 2];
  }
 
  else {
	return [1, 1];
  }
 
}
 
 
 
/* Choose a character from the list of characters in the characters array.
*/
function chooseCharacter(){
 
}

