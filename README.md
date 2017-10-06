# Amazon Web Services Quiz

As I developer I've heard about Amazon Web services but I didn't really know what it was. So I created a quiz to get users to know about Amazon Web Services. 

(https://wireframe.cc/DKuJWK "wireframe")

## Technical Overview
### The home page 
The home page loads and  you the user can click the beginner button that will switch to the quiz.

### Beginner Quiz
 This page has 15 descriptions of AWS and 5 categories that each description belongs in.
 There are 5 different targets that javascript manuipulates:
 1. Score
 2. The user answer
 3. THe question
 4. The green check logo or the red x logo
 5. The Next button

The different actions the user can make to change the page:
1. Clicking The next button
2. Clicking the 5 category buttons

Randomization of the questions happens by counting all the questions on the page and building an array with the question positions and the randomizes them.

## Future Versions
I would like to make rounds. I would also like to make an expert button, where the user will have to list all the web sevices in the game.

## Other Tips 
1. avoid using the css classes to find elements on the page because designers generally manipulate them. 
instead of 
```
$('.next')
```
do
```
$('[data-next]')
```
2. You can store data on an html element 
```
$el.data('userAnswer', selectedAnswer)
```
Even though you add the data to the element in chrome dev tools you can't see  it when you look at the element.