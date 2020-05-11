# The Game by 2nd Landmark Assignment for The Code Institute by Robin Collins

My 2nd Landmark assignment with the code institute showcasing additional skills in JavaScript.

I chose to design a game similar to the concept of the Game Top Trumps as it remains still popular since 1978.

As a creative person I have also always drawn doodles on paper during my thinking process and over since my early childhood I have 
developed a very unique and comical style over time therefore rather than use stock images I will rely on my own images like previous assignement.

I started thinking of basing it on a Fantasy style element as a big fan of that genre.

Studying my doodles, I noticed they all characters based around my great nephews’ key words. He is a nearly 3-year-old.
Who identifies himself as Catboy (I'm aware there is a Televison show he watches called Catboy but what he acts out is something co,mpletely different).
It is with this I therefore have designed a comic book theme which is still very popular in 2020 since 2000's X-men and going forward with the current success
of the Disney and Marvel franchise.

I'd like to think the age group this game would appeal to is ages 2 to 99. Adult supervision always would be required for the younger age group.
I belive there is a level of educational value to the game comparing traits and second guessing the opponent’s cards as experienced 
players will be familiar with deduction and strategy. This is providing I can allow all 5 traits to be successfully executed.

### UX. 

I used Balsamiq wireframe for my designs which can be found in the UX-designs folder within images. 
I like to think I have taken on a simplistic approach with a title with a simple 3 button navigation.

The colours I have selected the green and yellow complement each other and suit the cartoon font bangers I have selected
as primary font for this assignment my second choice of font is Roboto this will be used for paragraph text, scores and the footer
copyright symbol.

The Navigation links also feature the Bangers font almost representing chapter within a comic. A hamburger menu replaces these on
a responsive design. On click however open across the page stacked on top of each other.

### Features. 

I intend to have a Jumbotron with 3 pages of navigation Home/Restart About/Rules and Contact. It will also feature a footer as
standard. At the early stages I have chosen not to include any footer social media links as that would require additional set up
which is something I'd rather come up with once I have a functioning product, I am happy with as in these early stages I have
an idea what to do but not entirely certain how to execute it but that I imagine is normal for a first JavaScript assignment.

It will feature my artwork.

#1, Will Do

The cards will feature a animation to make them look like authentic cards.
Have a challenge using the strength ability with random cards selected. Player one goes first it then give a score between player 
one and players two. 

#2, Stretch Goal

I would like to allow the abilities other than strength to be viable as will increase usability allowing more competition 
this will also make it more playable as more competition between player one and player two.

#3, Won’t Do

At this stage I won't make it for additional players 3, 4, 5 and 6. I also won't have additional cards but definitely viable and
possible when I come back to this project post assessment as there is so much depth that could be added. I could even polish
the style of cards even opens up its user base to adults but there would be fun to be gained out of this for adults.

This project will feature an even deck of cards (26 to 32) divided by 2 players.

Player 1 click on their card and choses any attribute they think will beat their opponent. On selecting their choice player 2
card can be turned with a click of automatically when they not the primary player. Primary player is also determined by who won the 
previous round. Player 1 will always start a game who starts shouldn't influence a game.

All cards are selected at random and divided equally. No card should duplicate.

If a card has an identical score as the other player, then the cards are either classed as a draw or the points are divided equally.
I cannot at this stage determine how to keep the point of the draw roll over for result of next round to administer
points to successful player. This may be a function completed at a later date when I become more familiar with JavaScript.
If player 1 wins any round they get to continue to choose attribute until they lose round, then Player 2 will lead and
continue in the same way.

Scores will be displayed between two cards stating clearly who is winning or losing.

All cards are discarded after each round limiting games to number of turns 12 to 16 based on the number of cards. For example
12 cards each is 24 cards in total and 16 cards is 32 cards in total.

When the outcome result is made, I click (the player) on the Home/Reset button will start the game again. A more complex way
of recording scores results maybe considered if progress is made and time constraints allow it.

The About page will feature the rules of the game. It will also have a brief history of the characters featured within the game.

The Contact page will be for people interested in submitting additional card or character ideas or just to keep in touch regarding
alternate games I may choose to develop in the future when JavaScript becomes second nature.

### Technologies Used.

Boostrap was used for my layout. Originally, I was using Font awesome but chose to remove my it when I found it wasn't
necessary within my design and did have a few implementation problems and found that it wasn't essential for my project at this
stage. I would consider it possibly in the future should I get time to implement it and it complemented the site design.
https://getbootstrap.com/

I did look at jQuery and Jasmine to see if I required them for my assignments but feel I need more hands on experience to
become more familiar with them. https://jquery.com/

I have focused mainly with JavaScript directly to get to grips with it more.

EmailJS was used to set up the contact form. https://www.emailjs.com/

Balsamiq was used for the wireframes found in the UX design folder https://balsamiq.com/

Google fonts used as highlighted at the top off style.css are Banger and Roboto https://fonts.google.com/

### Testing.

Testing was testing from the beginning as I felt I still needed to iron out the issues addressed with my first 
Landmark Assignment focusing on the aesthetic look of the website and making sure it was mobile friendly first.
Within a week I am still addressing these issues. I completely understand the principle behind it that is why 
my H2 heading responds as I would expect however the Bootstap Nav bar I am using isn't cooperating, so I continue
to read their resources page hoping to rectify this before the hard work starts which I believe to be the JavaScript.

This could be seen as an excuse but I chose it to be an argument. The Mobile phone responsive view doesn't work as
I would like it to work but would also justify that probably not that important for this project as with the current
global situation of Covid-19 having a game on a phone when a handset is to be shared would be quite irresponsible of
me. I would like to point out it does display as I'd expect with Desktop and Tablet.

To further this point, I wanted to start adding the JavaScript as soon as I see some graphical animation in practise 
starting to work I think I will then get my light bulb moment however; I have been experiencing problem in the console 
which I have notice since google made an update a few months back on 2014 iMac. This has also affected my course work
as 3rd party application imbedded within a website prevents them functioning which has prolonged a task by having to 
open Safari and take the links then open the independent link because Safari has its issues also. Then reopen in google.

Further testing in the early stages has left me in a mind of despair - I believe this it that imposter syndrome I was warned about.
I have literally had three days broken into the hours 7am to 10am then 1pm to 6pm where I was just testing without any small victory.
This is on top of nights of vivid dreaming just code but no real understanding of where to place it. Thank goodness for the
support of the tutors, student support and my mentor reassuring me with a few weeks to go I’m quite capable of achieving this.

I used repl.it to run various bit of code I found a tutorial online for a card flipping on click using CSS so I
could make further progress. Unfortunately, I came into a number of errors which I'm still trying to resolve as despite not requiring 80%
for my purpose I chose to write 100% of the code to check it worked. I found it odd that it didn't work accurately and when researching 
through comments made on the video one user did state the desired outcome was not visible on iMac. I chose to check this with my 
PC laptop and I actually noticed additional errors. I am reluctant to do this over again to the script but feel
I could focus back on the Bootstrap issues I'm still having.

After some brief meditation I started to check the console with Google inspect tools and a little victory my variables are 
working. I've just got to refresh my memory and apply some more research to glue it together with everything else.

After a successful second attempt with Repl.it I managed to get the flip card working. I then managed to successfully incorporate it within GitPod
However, noticed I need to be careful when using it with Bootstrap as it turned the cards into paddles. Knowing this means further inspection is required
where more than one card resides on the same page to allow me to use the grid system.

I finally made progress when a misplaced colon was replaced with a full stop allowing my flip testing to finally work and reassure that I wasn't far
wrong initially the euphoria and Ululation on this little victory has given me the confidence I needed at this stage to make the next step.

Some additional progress was being made as now the images are rotating randomly. Now I need the attributes to be active on a click
this is the stage where I realised that I have been a little over ambitious as to click on card then flip the card and select and 
attribute, preventing player 2 to flip their card until it’s been requested to prevent cheating as a different attribute could be 
chosen to their advantage. I really did think I planned this which I did but hadn't broke it down - I feel I trying to run before
I can walk. At the same time a bite size approach would have been more rewarding. I am definitely learning by my mistakes.

Looking at my assignment in its current state it works not as smoothly as I like but it works on the principle of playing with
random cards. What I do realise is that the better the function the more the user will enjoy the game.

I have now got to a point where I feel stuck as testing various code hasn't had a positive outcome in 4 days and I only have a 
week before my deadline. I have been given encouragement that I'm doing well by my mentor and student support but require
knowledge and can't quite grasp why I feel so stuck. I have gone over course notes and even the modules but the answers not
presenting themselves as I'd expect. I won't lie I feel like a fraud but Capricorn’s are not quitters. What I do know is there is the 
growing possibility that I will complete this assignment once I'm more experienced in JavaScript and could have been a little
over ambitious with my choice of project. I have found it quite a lonely experience as I am the most advanced person, I know that 
uses computers in my area and despite the country in lockdown I don't have a buddy who has the knowledge to guide me to continue confidently
and successfully. As I write this, I am waiting for a friend of a friend to call with additional advice. I am really concerned
but there is part of me that is extremely excited that I will be good at JavaScript in the not too distant future.


Another 4 hours testing snippets of code in the console with google inspect tool and no results. Checking code with checkers
it's a May Bank Holiday Monday but not in UK this year due to change then VE Day celebrations due to happen on Friday. However 
I'm stuck in my tracks, I have gone over all old course material and unfortunately it doesn't give me the answers to what I 
require. I have had feedback from a friend who is talented but secretive in JavaScript and won’t help me due to secrecy. I'm now wondering what
to do now. In all honesty I am at a position where I think I should just submit the assignment and hope for the best but that is against my better judgement.
In my head I know what I'm doing - in practise nothing coming from my hard work.

I understand the learning process comes from research but a little confused as I have researched a lot of wrong information and 
fail to remember the correct information because of the wrong answers found first with people using forums like me. At this late
stage I am going to purchase books in a bid to grasp this part of the course. I'm not going to be beaten even if I ready
to submit at this stage as I am successfully wasting time and not learning anything but despair and a sense of isolation.

I am now back on the course in a bid to manipulate the DOM (Document Object Model) in a bid to get this function working.
Further testing proved still to be causing me problems so with the deadline approaching I took a different approach.
I remembered the contact form needed the function so I used googles EmailJS. I set up the template with the Catboy identity 
so, I could find it for quick reference as overtime I'm sure I can build numerous amounts of websites and I haven't come
across many that didn't have a contact form.

I linked the account to my google account following the instructions required. On a successful test I took the code snippet
displayed in the test and added it to the JavaScript sendEmail with other code provided in the documents for hosting.
I also added other JavaScript within the contact HTML and instructed the form with onSumbit information. The problems I encountered 
only came from adding code to the index page rather than the Contact page in error but it didn't take long to realise my mistake.

Further tests and the functions are working perfectly I made a commit at this stage happy I had made some progress after a long 
period where I have just been researching how to progress further through this assignment.

I have noticed the card oppih won't come up in tests despite the link being correct - This is very odd as makes no sense.
However when I looked closely the numbering was wrong and wasn't link up correctly.

Further tests to get the score working have proven unsuccessful and I am really disappointed as this part is taking more
time than I anticipated. Part of me feels I have got silly errors in my code. Therefore, anything small will prevent something
so big being executed.

I actually managed to centre the contents finally using the Bootstrap command "d-flex justify-content-center" within the row class
this has made me extemely happy as today the website is looking like what it set out to look like however despite doing further tests 
on scoring I still haven't managed to get the website score system to function. I will continue to look for this. I think the
time and effort I have put in should reward me this success so I will continue to push through.

I decided to space the layout even more with "d-flex justify-content-around" Boostrap command.

It has become apparent that with less than 24 hours before I have to submit my assignment, I am still having difficulties
getting my score system to work. I have to state I will use those hours to achieve what I set out to do and
accept some defeat however, I will also have pride in what I have achieved and remember this is still just the beginning.
There is so much I still need to learn and what I have figured out is when I'm wrong it can be something as minor as
a colon in the wrong place. I have gone through lots of emotion with this assignment a lot of despair but at
this stage I feel a sense of pride with what I have achieved and really do look forward in completing this project as
I ambitiously envisioned in the stages of UX.

I had a productive 12 hours my test for rounds and score are working but I'm again finding it difficult to manipulate
the DOM to display the score then reset the game. I have less than 12 hours to submit the assignment so asking for 
tutor support to get me through this last little bit, the last push for potential greatness as it will me the world
to me to do well on this as I image all students do. 

I felt like I was flowing yesterday finally grasping what I was doing. I really do understand I have to think logically
plotting all steps along the way as too often I think I was having a begining a middle and an end not realising that
little steps need to be made. This made more sense by physically making the cards and talking to myself describing what
i am doing. For example cards are face down, card on is turned then card two. Then score is required. That is what needs to
be done.

Eureka I finally think I'm grasping it getting it as scores are working I now need to announce a winner and confirm 
reset buuton working. getElementById was required as expected but clearly had got myself confused with previous HTML
ID's from original tests.

I have to confess I have used more than one H1 which I was advised against with my studies this will be altered when
I complete my website portfolio after the assignment has been graded.

I've just seen a project on LinkedIn from another student at this stage and it is so good and full of detail I 
realise how I need to raise the bar in future. I wished I had the full game completed not just one part but like I 
said I will complete it one day.

Now with only a few hours to go I am working on an if statement to get the winner announced. This is also now working
I did find it was adding the details of the winner prior to turning the card after a click I then remembered to use
the delay setTimeOut delay function. I'm starting to feel like the pressure has eased off and I know its me applying
this pressure but I want to be an achiever that is all.

I am aware that player one can cheat and so can player two by clicking on their card numerous times this will have to be
a correction I make when I come back to the assignment as the deadline getting closer.

Another issue I am aware of is the Draw will state player two the Winner.

Now to get the reset button to work then I will be ready to submit my project in its current state which I have
to admit I'm proud I have got this far and apologies about my journey of dispair on the way.

I will now accept some defeat that I couldn't solve my reset button issue despite looking at numerous sources of code
on numerous website. It is at this stage that I now submit this assignment. What I will say that it probably not required
as It does have a restart button in the navigation. 

I will point for the project the game has two turns each I will increase this when I return to complete assignment post
assesment.

I have to say I have enjoyed and hated the challenge and everytime I use it I get that little bit better even if it
is two steps forward one step back. I will continue to read up and revise on JavaScript on a daily basis but might
just take a day off first.



### Deployment.

Like the previous assignment I am using GitHub and GitPod to set up and Edit and save my repositories - I would like to point out during 
one of my commits I made the error of forgetting to add a comment in the quotes where I had become distracted in trying to
find a solution to get my cards to score. I imediately made another commit adding a quote but no changes had been made and the commit
didn't count.

The correct process it:

git status

git add .

git commit -m "COMMENTS HERE"

git push 

if the repository doesn't exist 

start with git init

When deploying my project within GitHub I click on repositories then click the repository I require in this
case the game master. I then click on the settings tab and scroll doen the page to GitHub pages, clicking on the 
none button allows me to change it to Master Branch which I select.

After this is live i then go to the Code Institute website module and click on a link for the student Pre-subbmission
checklist.

### Credits.

Credits go to Coding Journey for their video on card flip effects on YouTube the link can be found in the Acknowledgments
section. 

I also like to thank the tutors for their help and advice in particular Scott, Stephen, Tim and Haley.

### Content.

A large part of the content was my card flipping 90% taken from the website YouTube tutorial which I link to in the credits and Acknowledgments 
I added enough of my own code and images that I wasn't blatantly copying this wonderful educational video. I even left a comment on his YouTube video
with a like stating how good it was. Give credit where credit due.

All character write up and back story come from the vocabulary of my two nearly 3 year old Great Nephew Master Lennox Fox Markham 
Bearz his favorite crisps, Boobee (use your imagination), Catboy his alter ego when he wants to wrestle, Cat Castle the dens he makes, Catdog
as he trys to say them both at the same time if seen together. Daadee aka Daah his amazing Dad, Darbin is me I could have slightly bias stats.
Frog his bath toy, Gecko another toy. Ghost a statue in the garden, Glammy his glamourous (not in the picture) his Grandma. Grand his great Grandfather
nothing like the picture I just had a spare doodle. Karr should be spelt Car as he obsessed with cars but I needed characters. KayKee a pet name for cake.
Knotting mouth aka 'not in mouth' something he says If you try and steal his cake. Mar-me-Duc his very loving Mummy the duc she inherited from her uncles walking like
a duck when she had a nappy on at a similar age.

Mook is cup of milk, Mummers what he calls his Great Grandma who is missing him terribly during lockdown. Oppih - Hippo backwards his aunties nickname.
Pea-peels which should be Peoples I created a villain a round the name just based on you cannot trust everybody. Peet my brother the Viking called Pete.
Raaa every dinosaur or crocodile call Raaaa, Rory Dragon his great Grandma when angry. T-ruck like Car really a Truck. Twoo and Owl, Weewoo the family Cat
should be Willow. Upsteps a villian as without a baby gate he keeps clibming them. Whistle the noise had to chose older doodle of friend and finally 
Winky face Lennox being cheeky winks is so funny.

I have noticed similarities with one of my cards to a Disney character the Gecko but I didn't copy him it was straight from my head and a complete
conincidence. 

### Media.

All Images are by my hand and then converted with Graphic Tablet either with Adobe Photoshop or Adobe Illustrator.
https://www.adobe.com/uk/creativecloud.html?gclid=Cj0KCQjwncT1BRDhARIsAOQF9Ll_Bca-NXe26KiWDJDZQHr8VZ7z-pGWIAlW9j6H97CA_9F86lLbKyAaAmCiEALw_wcB&sdid=88X75SKR&mv=search&ef_id=Cj0KCQjwncT1BRDhARIsAOQF9Ll_Bca-NXe26KiWDJDZQHr8VZ7z-pGWIAlW9j6H97CA_9F86lLbKyAaAmCiEALw_wcB:G:s&s_kwcid=AL!3085!3!273769967928!e!!g!!adobe%20cc
NB: Not sure why they require a link this long

The idea is loosely based on Top trumps http://www.toptrumps.com/

Used SitePoint JavaScript books for reference there is a wealth of knowledge I can get here. https://www.sitepoint.com/

### Acknowledgments.

Google fonts used are Roboto and Bangers.

Card Flip Effect (HTML & CSS) by Coding Journey https://www.youtube.com/watch?v=Lc6wyl1KdOc
As mentioned about I used this to educate myself and practice making various variations.

I used this video to use a scoring system which was unsucessful when checking the code
with a checker it seemed to be riddled with missing information. Its by Edureka https://www.youtube.com/watch?v=9XRufzemZNc

I used stack overflow for reference on flipping the random images.

WC3 Schools was always a place to go as a reference library.  https://www.w3schools.com

Tutors and Student Services at the Code Institute 

I like to express my gratitude to Brian Macharia for his support advice and understanding as my mentor with this project.
Additional support was in place by student support who reassured me I have the skills in doing well despite my doubts at this
stage of the course.

