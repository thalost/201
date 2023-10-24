<><script>
    let name = prompt("Who are you?");
    alert("Hello, " + name);  // Fixed typo in "Hellol" to "Hello"
    console.log(name);
</script><p style="background-color: gray; color: green">
        What is your favorite place?
    </p><script>
        let place = prompt("Where are you from");  // Changed variable name from "from" (a reserved word) to "place"
        alert(place + " sounds like a lovely place!");  // Fixed typo in "lovey" to "lovely"
        console.log(place);  // Fixed the variable name in console.log
    </script><p style="background-color: brown; color: orange">
        Do you know how old Eugene is?
    </p><script>
        let food = prompt("What's your favorite food?");
        alert("Yum! I love " + food);
        console.log(food);
    </script><p style="background-color: pink; color: purple">
        What is my favorite car?
    </p><script>
        let car = prompt("What is your favorite car?");
        alert(car + " Maybe, but that seems slow");
        console.log(car);
    </script></>




let person = "Eugene";
console.log(person);

let age = 36;

let height = false;

let Student = {
    name: "Eugene",
    location: "California",
    class: "Software Development"
}






let userName = prompt("What is your name?");
alert("Whats up " + userName + "! Welcome to my site!");


let questions = [
    "Is Eugene in your  201 class? (yes/no)",
    "Does Eugene wear glasses? (yes/no)",
    "Is he a Millionare? (yes/no)",
    "Has Eugene been to Outerspace? (yes/no)",
    "Does Eugene know what he's doing in class? (yes/no)"
];


let answers = [
    "yes",
    "yes",
    "no",
    "no",
    "no"
];


function askQuestion(question, answer) {
    let userAnswer = prompt(question).toLowerCase();

    if (userAnswer === "y") {
        userAnswer = "yes";
    }
    if (userAnswer === "n") {
        userAnswer = "no";
    }

    
    if (userAnswer === answer) {
    
        alert("Yup!");
    } else {
    
        alert("Nope!");
    }
}