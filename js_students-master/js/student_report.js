var message = '';
var student;
var search;
var report;

function print(message) {
 var outputDiv = document.getElementById('output');
 outputDiv.innerHTML=message;
}

function getStudentReport(student) {
    report = '<h2> Student: ' + student.name + '</h2>';
    report += '<p> Track: ' + student.track + '</p>';
    report += '<p> Points: ' + student.points + '</p>';
    report += '<p> Achivements: ' + student.achivements + '</p>';
}

while (true) {
  search = prompt('Search student records: type a name [Jody] or type a "quit" to end');
  if (search === null || search.toLowerCase()==='quit') {
    break;
  }
  
  for (i=0; i<students.length; i+=1) {
    student = students [i];
    if (student.name === search) {
      message = getStudentReport(student);
      print(message);
    }
  }
}



