var whatDay='SUNDAY';
var whatHour='12';
var whatYear='2018';
var whatCity='WARSAW';
var whatMusic='ROCK';
var correctAnswers=0;

//day
var inputDay=prompt('What day is it? ');
  if (inputDay.toUpperCase()===whatDay) {
    correctAnswers+=1;
    alert('Thats correct!');
  } else {
   alert('Thats false..'); 
  }

//hour
var inputHour=prompt('What hour?');
  if (inputHour===whatHour) {
   correctAnswers+=1;
    alert('Thats correct!');
  } else {
   alert('Thats false..'); 
  }

//Year
var inputYear=prompt('What year?');
  if (inputYear===whatYear) {
   correctAnswers+=1;
    alert('Thats correct!');
  } else {
   alert('Thats false..'); 
  }

//City
var inputCity=prompt('What city?');
  if (inputCity.toUpperCase()===whatCity) {
   correctAnswers+=1;
    alert('Thats correct!');
  } else {
   alert('Thats false..'); 
  }

//Music
var inputMusic=prompt('What music?');
  if (inputMusic.toUpperCase()===whatMusic) {
   correctAnswers+=1;
    alert('Thats correct!');
  } else {
   alert('Thats false..'); 
  }

alert('Your results: ' + correctAnswers);

if (correctAnswers===5) {
 alert('Gold!'); 
} else if (correctAnswers>=3 && correctAnswers<5) {
  alert('Silver!'); 
} else if (correctAnswers>=1 && correctAnswers<3) {
  alert('Bronze');
} else {
 alert('lul'); 
}


  