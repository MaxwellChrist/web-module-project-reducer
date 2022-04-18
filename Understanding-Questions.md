# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* the onClick event handler fires and invokes the addOne function inside the dispatch method
* the addOne function is ran and the value is stored as the parameter value inside the dispatch method
* the dispatch method dispatches the onClick event to our reducer function
* the reducer function gets ran and when going through the switch statement, the ADD_ONE case is ran
* the value total gets updated as well as the value passed as props
* application gets re-rendered
* TotalDisplay shows the total plus 1.