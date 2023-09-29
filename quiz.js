    function quiz() {
        const questions = [
          'How many moons does Earth have?',
          //add comma
          'How many moons does Saturn have?',
          'How many moons does Venus have?'
        ];
        const answers = [1, 82, 0];
      
        let score = 0;
        //change 1 to questions.length
        let num = Math.floor(Math.random() * questions.length);
        //change <= to <
        //change count to length. 
        for (let i = 0; i < questions.length; i++) {
          const question = questions[num];
          //should put a const since it's a variable
          const answer = prompt(question);
          
          if (answer == answers[num]) {
            //add in missing +
            score++;
            alert('Correct!');
          } else {
            alert('Wrong!');
          }
          num++;
          if (num === questions.length) {
            num = 0;
          }
        }
        //add a #(hashtag) since we are getting the id in the HTML.
        const scoreArea = document.querySelector('#score-area');
        scoreArea.innerHTML = `You got ${score} out of ${questions.length} questions correct!`;
      }
      
      alert('Are you ready for a quiz?');
      //not quaz. mispelling it's quiz! 
      quiz();