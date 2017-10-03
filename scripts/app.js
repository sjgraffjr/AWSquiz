let correctAnswers = 0
let inCorrectAnswers = 0
const checkComplete = ()=> {

	return correctAnswers + inCorrectAnswers === $('[data-correct-answer]').length

}

const checkAnswer = (e)=> {
	const $el = $($('[data-correct-answer]')[correctAnswers + inCorrectAnswers])
	const correctAnswer = $el.data('correctAnswer')
	const selectedAnswer = $(e.target).data('possibleAnswer')
	if (correctAnswer === selectedAnswer){
		correctAnswers += 1
		// alert("Well done, Lad!")
		const $greenCheck = $('<img src ="http://www.thomasclausen.net/wp-content/plugins/wp-support-plus-responsive-ticket-system/asset/images/checkmark.png" alt="green check logo">').css({ width: '50px', height: '50px' });
		$('.greencheck_location').append($greenCheck);
	}else{
		inCorrectAnswers += 1
		const $redX = $('<img src="https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png">').css({ width: '50px', height: '50px' });
		$('.redx_location').append($redX);
	}
	$el.hide()

	const nextElement = $($('[data-correct-answer]')[correctAnswers + inCorrectAnswers])
	nextElement.show()
	if(checkComplete()){
		// alert(`You got ${correctAnswers} out of ${correctAnswers + inCorrectAnswers}`)
		const $p = $('<p class="final_score">').text(`You got ${correctAnswers} out of ${correctAnswers + inCorrectAnswers}`)
		$(".section").append($p)
		$("button").hide()
		//instead of alerting build a paragraph elemnt with jquery and add this as the text of it and append it to the page
		//hide the buttons that you can select answers with
	}	
}
$('[data-possible-answer]').on('click',checkAnswer)

