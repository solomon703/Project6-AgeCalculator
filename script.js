                                    // ! input value
let userInput  = document.getElementById("date");

                                   // ! till today date condition
userInput.max = new Date().toISOString().split("T")[0];

                                 // ! final result to display age to user
let result = document.getElementById("result");

                                // ! function to calculate the age of the user.
function calculateAge(){
  let birthDate = new Date(userInput.value);
  
                                   // ! users date of birth
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() +1;
  let y1 = birthDate.getFullYear();
                                  // ! present date condition
  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth()+1;
  let y2 = today.getFullYear();

                                 // ! storages for new final output
 let d3, m3, y3;
  y3 = y2-y1;  //! year condition
  if(m2 >= m1){
    m3 = m2-m1;
  }else{
    y3--;
    m3 = 12 + m2-m1;
  }

  if(d2 >= d1){
    d3 = d2-d1
  }else{
    m3--;
    d3 = getDaysInMonth(y1,m1) + d2-d1;
  }

  if(m3 < 0){
    m3 = 11;
    y3--;
  }

  //! to display final output
  result.innerHTML = 
  `You are <span>${y3}</span>
   years,<span> ${m3}</span> 
   months and <span>${d3}</span>days Old.`
}

function getDaysInMonth(year,month){
  return new Date(year,month,0).getDate();
}