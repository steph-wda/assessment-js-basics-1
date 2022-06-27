

//initialize password string
const password = 'detroitTigers22#';

//initialize passwordArray to hold array of chars in password
let passwordArray = password.split('');

//flag to keep count of constraints that have been met
let meetConstraintsCount = 0;

//array of lowercase letters
const lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//array of uppercase letters
const upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//array of numbers
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//array of symbols
const symbols = ['!', '@', '#', '^', '$', '%', '&', '(', ')', '*', '+'];


// checking to make sure that password is at least 10 chars and no more than 20 chars. The check for no more than 20 chars is an extra constraint.
if(password.length >= 10 && password.length <= 20){
  
  for(let i = 0; i < passwordArray.length && meetConstraintsCount < 1; i++ ){
    //testing password to make sure it has at least one lowercase letter. As soon as a lowercase letter is found, meetConstraintsCount is incremenmented by 1 and this for loop is exited.
    if(lowerAlpha.includes(passwordArray[i])){
      meetConstraintsCount +=1
    }
  }
  for(let i = 0; i < passwordArray.length && meetConstraintsCount === 1; i++ ){
    //testing password to make sure it has at least one uppercase letter. As soon as an uppercase letter is found, meetConstraintsCount is incremenmented by 1 and this for loop is exited. This was an extra constraint
    if(upperAlpha.includes(passwordArray[i])){
      meetConstraintsCount +=1
    }
  }
  for(let i = 0; i < passwordArray.length && meetConstraintsCount === 2; i++ ){
    //testing password to make sure it has at least one number. As soon as a number is found, meetConstraintsCount is incremenmented by 1 and this for loop is exited.
    if(numbers.includes(passwordArray[i])){
      meetConstraintsCount +=1
    }
  }
  for(let i = 0; i < passwordArray.length && meetConstraintsCount === 3; i++ ){
    //testing password to make sure it has at least one symbol. As soon as symbol is found, meetConstraintsCount is incremenmented by 1 and this for loop is exited. This was an extra constraint
    if(symbols.includes(passwordArray[i])){
      meetConstraintsCount +=1
    }
  }
  //If the meetConstraintsCount flag is set to four, then the password is accepted. Will print ascii art.
  if(meetConstraintsCount === 4){
    console.log(`
     ___                       ___  
    (o o)                     (o o) 
   (  V  ) Password Accepted (  V  )
   --m-m-----------------------m-m--`)
    //If the meetConstraintsCount flag is not set to four, then the password is not accepted. Will print ascii art
  }else{
    console.log(` 
       ___                           ___  
      (o o)                         (o o) 
     (  V  ) Password Not Accepted (  V  )
     --m-m---------------------------m-m--`)
  }
  //If the password is less than 10 chars or more than 20, then the password is not accepted. Will print ascii art.
}else{
       console.log(`
         ___                           ___  
        (o o)                         (o o) 
       (  V  ) Password Not Accepted (  V  )
       --m-m---------------------------m-m--`); 
}




