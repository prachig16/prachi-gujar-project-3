// MVP for project 3: Secret santa selector!

// make sure the document is loaded before we start the functions: docready
    // create an empty array "memberArray" to include all the member names which will be provided when the form is submitted. keeping it ouside the event handler for a global scope

    // create an event listener for the form submit

        // make sure the form does not reset when refreshed: preventDefault
        // create an event listener for the user name submission
            // get the input, create a varible "userName" and store the input 
            // show this variable as an output on the screen by adding it to the html

        // create an event listener for the member names submission 
            // get the input from the user and store it in a variable "memberName"
            // add this variable to the empty array created at the beginning (in "memberArray")
            // add this input in the ul by append
            // along with appending, display each input on the screen as a list

        // create a varible "selectedMember" and assign it to the random array from "memberArray"

        // change the css/checkbox for the "selectedMember" (need to check if it needs delegation if the array is in the global scope)

        // add the "selectedMember" as a result in html "for the secret santa "userName" is matched with "selectedMember" 






// stretch goals: 
// getting multiple usernames and matching them randomly 
// during matching process, need to make sure that the member is not matched themselves or a repeat of attachment
// get members information and instead of showing the results , it will trigger a message to the information provided(not sure how to approach it, just an idea)
