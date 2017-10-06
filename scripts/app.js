
let nextBtnClicksCount = 0 

//this function checks to see if all the questions are answered.
const gameComplete = () => {
	return nextBtnClicksCount === $('[data-correct-answer]').length 
}
//this function checks to see if the answer is correct
const checkAnswer = (e) => {
	const currentQuestionPosition = quizOrder[nextBtnClicksCount]
	const $currentQuestion = $($('[data-correct-answer]')[currentQuestionPosition])
	const correctAnswer = $currentQuestion.data('correctAnswer')
	const selectedAnswer = $(e.target).data('possibleAnswer') 
	// this logic lets the user choose one category and not change their answer.
	if(!$currentQuestion.data('userAnswer')){ //checking to see if it's been added to the div.
		$currentQuestion.data('userAnswer', selectedAnswer)//userAnswer  is  an attribue being added to question div.
		$('[data-runningscore]').text(`${correctAnswers()} / ${nextBtnClicksCount + 1}`)
	}
	const $correctIcon = $('[data-correct]').hide()
	const $incorrectIcon = $('[data-incorrect]').hide()
	
	if (correctAnswer === selectedAnswer){
		$correctIcon.show() 
	}else{
		$incorrectIcon.show() 
	}	
}
//this function counts the correct answers
const correctAnswers = () => {
 const $questions = $('[data-correct-answer]')
 let correctAnswerCount = 0 
 for(let i = 0; i < $questions.length; i++ ){
 	let $question = $($questions[i]) 
 	if($question.data('correctAnswer') === $question.data('userAnswer')){ 
 		correctAnswerCount += 1  
 	}
 }
 return correctAnswerCount 
}
//this function shows the next question
const nextQuestion = () => {
	 nextBtnClicksCount += 1
	 const currentQuestionPosition = quizOrder[nextBtnClicksCount]
	$('[data-correct-answer]').hide() 
	$('[data-correct]').hide() 
	$('[data-incorrect]').hide()
	const $question = $($('[data-correct-answer]')[currentQuestionPosition])
	$question.show()
	if(gameComplete()){ 
		
		const $p = $('<p class="final_score">').text(`You got ${correctAnswers()} out of ${nextBtnClicksCount} on your first try`)
		$(".section").append($p)
		$("button").hide()
	}	
}
//this function shuffles an array 
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// this logic puts the questions positions in an array
let quizOrder = []

for (let i = 0; i < $("[data-correct-answer]").length; i++){ 
  quizOrder[i] = i
}

quizOrder = shuffleArray(quizOrder)

//click on button and see if the answer is correct or incorrect. ,checkAnswer is the clickevent handler
$('[data-possible-answer]').on('click',checkAnswer)
//click on the next button to get to the nextQuestion
$('[data-next]').on('click',nextQuestion)
$($('[data-correct-answer]')[quizOrder[0]]).show()





