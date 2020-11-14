
// MVP for project 3: Secret santa selector!


// make sure the document is loaded before we start the functions: docready
$(document).ready(function() {
        
        // create an empty array "memberArray" to include all the member names which will be provided when the form is submitted. keeping it ouside the event handler for a global scope
        const memberArray =[];

        // creating a function to select random member from the array created above
        const randomizer = function (array) {
                // store a generated random integer which does not exceed the length of the array
                const randomNumber = Math.floor(Math.random() * array.length);
                return array[randomNumber];
        }
        
        
        // create an event listener for the member names submission 
        $('form').on('submit', function(){
                event.preventDefault();
                // get the input from the user and store it in a variable "userInput"
                const userInput = $('input#userName').val();
                
                // check if the input is not an empty string
                if (userInput !== '') {
                        $('#userName').val('');

                        // add this variable to the empty array created at the beginning (in "memberArray")
                        memberArray.push(userInput);

                        // along with appending, display each input on the screen as a list
                        const userNameItem = (`<li><span class='fas fa-snowflake'></span> ${userInput}</li>`);
                        
                        // add this input in the ul by append
                        $('.userNameInput ul').append(userNameItem);
                }else{
                        alert('Cannot Submit an empty string');
                }
        });


        // create an event listener for the  "submit" button
        $('button').on('click', function(){
                // make sure the form does not reset when refreshed: preventDefault:
                event.preventDefault();
                
                //selecting the random member from the member array: 
                const selectedMember = randomizer(memberArray);
                
                // Display the results with slected member:
                $('.resultContainer').html(`<h3>Your Secret Santa match is <span class="selectedMatch">"${selectedMember}"</span></h3>`);

                // animate the smooth scroll to go to the results
                $('html').animate({
                        scrollTop: $('.resultContainer').offset().top
                }, 1000);
        });
  });

   


// stretch goals: 
// getting multiple usernames and matching them randomly 
// during matching process, need to make sure that the member is not matched themselves or a repeat of attachment


// For the future:
// get members information and instead of showing the results , it will trigger a message to the information provided(not sure how to approach it, just an idea)
