console.log("BIG TEST");

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


// strength cards alphabetically presented with Characters

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

]

// cards.length - 0to25. Use Math.random().

$(function() {
    $('a.click').click(function(e) {
        e.preventDefault();
        var number = Math.floor(Math.random()*randomImage.length);
        $(this).html('<img src="'+randomImage[number]+'" />');
    });
});

/*let bearz = cards[0]
let catboy = cards[1]
let CatCastle = cards[2]
let Darbin = cards[3]
let Daah = cards[4]
let Frog = cards[5]
let Geko = cards[6]
let Glammy = cards[7]
let Karr = cards[8]
let KayKee = cards[9]
let KnottingMouth = cards[10]
let MarMeeDuc = cards[11]
let moo = cards[12]
let mook = cards[13]
let mummers = cards[14]
let peepeels = cards[15]
let peet = cards[16]
let Raaaa = cards[17]
let roryDragon = cards[18]
let tRuck = cards[19]
let twoo = cards[20]
let upsteps = cards[21]
let weewoo = cards[22]
let Whistle = cards[23]
let winkyface = cards[24]
let catDog = cards[25]  use this when you know what you are actually doing*/

// cat_boy.strength


// Selecting a random character -- pick a random number between 0 and the 
// cards.length - 1. Use Math.random(). Getting a random integer between two values in the document below


