export function Button() {

    function handleClick(userName) {
        console.log('Hello world!' + userName)
    }

    return (
        <>
            <button onClick={() => {
                handleClick('Sam')
            }}>Click me!</button>
        </>
    )
}



// in vanilla JS
// doucment.getElementById
// addEventListner
// event to listen for and the function to run.

// ()'s so it doesn't run 
// what if I'm passing an argument to the funciton?