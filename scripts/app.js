//data, how it should look, how the user interacts

let questionsAnswered = 0 //starting at 0 because they haven't answered any questions
//this function checks to see if all the questions are answered.
const checkComplete = () => {
	return questionsAnswered === $('[data-correct-answer]').length //counting the number of correct answers. data-correct-answer.length is the number of questions. returning true or false. 
}
//this function checks to see if the answer is correct
const checkAnswer = (e) => {
	const $el = $($('[data-correct-answer]')[quizOrder[questionsAnswered]])//questionsanswered is the position and you are getting something out at that position.
	const correctAnswer = $el.data('correctAnswer')//$el=div, data=attr,correctAnswer is camelcase version of the attribute. trying like "Database"or "Storage"
	const selectedAnswer = $(e.target).data('possibleAnswer') //$e.target is the button, you want to wrap in JQuery.
	//letting the user choose one category and not changing their answer.
	if(!$el.data('userAnswer')){ //checking to see if it's been added to the div.
		$el.data('userAnswer', selectedAnswer)//userAnswer  is  an attribue being added to question div. Putting it on the div.
		$('[data-runningscore]').text(`${correctAnswers()} / ${questionsAnswered + 1}`)//this is score in top right of page
	}
	const $correctIcon = $('[data-correct]').hide()//finding data attr "data-correct" calling hide.//finding green check logo and hiding it.
	const $incorrectIcon = $('[data-incorrect]').hide()//finding data attr "data-incorrect"calling hide.//finding red x logo and hiding it.
	
	if (correctAnswer === selectedAnswer){
		$correctIcon.show() //showing the green check logo
	}else{
		$incorrectIcon.show() //showing the red x logo 
	}	
}
//this function counts the correct answers
const correctAnswers = () => {
 const $els = $('[data-correct-answer]')//storing questions in variable called $els. 
 let count = 0 //let because it changes--it's not constant. starts at 0
 for(let i = 0; i < $els.length; i++ ){
 	let $el = $($els[i]) //we got a dom element we have to wrap in a JQuery element. 
 	if($el.data('correctAnswer') === $el.data('userAnswer')){ //$el = <div> correctAnswer = "Database" or "Storage". userAnswer 
 		count += 1 //the counter in the upper right going up by 1 if it's corret answer. 
 	}
 }
 return count //if you didn't do this you would get undefined on line 53 ${correctAnswers()
}
//this function generates the next question
const nextQuestion = () => {
	 questionsAnswered += 1 //going to the next question 
	$('[data-correct-answer]').hide() //hiding the question 
	$('[data-correct]').hide() //hiding the green check
	$('[data-incorrect]').hide()// hidding the red x
	const nextElement = $($('[data-correct-answer]')[quizOrder[questionsAnswered]])//finds the next qustion
	nextElement.show()//showing the next question
	if(checkComplete()){ 
		
		const $p = $('<p class="final_score">').text(`You got ${correctAnswers()} out of ${questionsAnswered} on your first try`)
		$(".section").append($p)
		$("button").hide()
		//instead of alerting build a paragraph elemnt with jquery and add this as the text of it and append it to the page
		//hide the buttons that you can select answers with
	}	
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let quizOrder = []

for (let i = 0; i < $("[data-correct-answer]").length; i++){ 
  quizOrder[i] = i
}

quizOrder = shuffleArray(quizOrder)

//click on button and see if the answer is correct or incorrect. ,checkAnswer is the clickevent handler
$('[data-possible-answer]').on('click',checkAnswer)
//click on the next button to get to the nextQuestion
$('[data-next]').on('click',nextQuestion)





