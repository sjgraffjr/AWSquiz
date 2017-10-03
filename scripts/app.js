let questionsAnswered = 0
const checkComplete = ()=> {

	return questionsAnswered === $('[data-correct-answer]').length

}

const checkAnswer = (e)=> {
	
	const $el = $($('[data-correct-answer]')[questionsAnswered])
	const correctAnswer = $el.data('correctAnswer')
	const selectedAnswer = $(e.target).data('possibleAnswer')
	$el.data('userAnswer', selectedAnswer)
	const $correctIcon = $('[data-correct]').hide()
	const $incorrectIcon = $('[data-incorrect]').hide()
	if (correctAnswer === selectedAnswer){
		$correctIcon.show()
	}else{
		$incorrectIcon.show()
	}
	
}

const correctAnswers = () =>{
 const $els = $('[data-correct-answer]')
 let count = 0
 for(let i = 0; i < $els.length; i++ ){
 	let $el = $($els[i]) 
 	if($el.data('correctAnswer') === $el.data('userAnswer')){
 		count += 1
 	}
 }
 return count
}

const nextQuestion = () =>{
	questionsAnswered += 1
	const $el = $($('[data-correct-answer]')[questionsAnswered - 1])
	$el.hide()
	$('[data-correct]').hide()
	$('[data-incorrect]').hide()
	const nextElement = $($('[data-correct-answer]')[questionsAnswered])
	nextElement.show()
	if(checkComplete()){
		
		const $p = $('<p class="final_score">').text(`You got ${correctAnswers()} out of ${questionsAnswered}`)
		$(".section").append($p)
		$("button").hide()
		//instead of alerting build a paragraph elemnt with jquery and add this as the text of it and append it to the page
		//hide the buttons that you can select answers with
	}	
}
$('[data-possible-answer]').on('click',checkAnswer)
$('[data-next]').on('click',nextQuestion)

