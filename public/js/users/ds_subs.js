
   let quiz_data = JSON.parse(localStorage.getItem('quiz1_details'))
   let rec = document.getElementById('rec');

let first_line = document.getElementById('first_line');

first_line.textContent = 'Hi' +' '+ quiz_data.name;

   rec.textContent = quiz_data.name+"'s" + ' Recommended Vedix Regimen For Healthy & Clear Skin Is 100% Natural';