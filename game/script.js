var win = false
const word = "words"
var x = 1
row = "row"+String(x);
function test(){
    console.log("button #2 worked");
}
function ask(){
    if (win==false){
        guess = prompt("Enter your guess", "Enter a 5 letter Word");
        if (guess != null){
            if (guess == word){
                document.getElementById(row).innerHTML = "You Won";
            }else{
                process(guess)
            }
        }
    }
} 
function process(guess){
    if (guess != null){
        shown_word = guess.split();
        if (guess.length != 5){
            ask()
        }
        for (let i = 0; i < guess.length; i++){
            if (word.includes(guess[i])){
                shown_word[i+1] = String(guess[i])+"[!?]";
            }
            if (guess[i] == word[i]){
                shown_word[i+1] = String(guess[i])+"[!!]";
            }
        }
        if (shown_word != null){
            document.getElementById(row).innerHTML = String(shown_word[0]);
        }
        console.log("it continued")
        for (let i = 1; i < shown_word[shown_word.length]; i++){
                help_list =+ shown_word[i];
                console.log(shown_word[i]+" is the help list["+String(i)+"]");
        }
        x = x + 1;
        console.log(String(shown_word));
    }
}