
// function handleClick(ev) {
//     // Prevent the default action of the event
//     ev.preventDefault();
//     // declare variables for use
//     const body = document.querySelector('body');
//     // Get the value of the input field
//     const nameInput = document.getElementById('name');
//     const nameValue = nameInput.value;
//     console.log('nameValue:', nameValue);
//     alert('You clicked me!, ' + nameValue);
//     // Perform action: add class to body element
//     body.classList.add('form-submitted');
// }
const button = document.getElementById('submit');
button.addEventListener("click", (ev) => {
    // Prevent the default action of the event
    ev.preventDefault();
    // declare variables for use
    const body = document.querySelector('body');
    const nameOutput = document.getElementById('form-name');
    console.log(nameOutput);
    // Get the value of the input field
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    console.log('nameInput:', nameInput);
    console.log('nameValue:', nameValue);
    nameOutput.innerHTML = nameValue;
    // alert('You clicked me!, ' + nameValue);
    // Perform action: add class to body element
    body.classList.add('form-submitted');
    window.scrollTo(0, 0);
});