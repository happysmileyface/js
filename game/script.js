var win = false
const word = "words"
var x = 1
row = "row"+String(x);
help_list = []
function test(){
    console.log("button #2 worked");
}
function ask(){
    if (win==false){
        guess = prompt("Enter your guess", "Enter a 5 letter Word");
        if (guess != null){
        guess = guess.toLowerCase()
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
        }//it writes !? to shown_word[4] because guess[4] is a good letter and doesnt write to the next up index
        // because it checks for guess[i(which is equal to 4) and write to shown_word[i(which is still equal to 4)]]
        count = 1
        for (let i = 0; i < 5; i++){
            if (word.includes(guess[i])){
                shown_word[count] = String(guess[i])+"[!?]";
            }
            if (guess[i] == word[i]){
                shown_word[count] = String(guess[i])+"[!!]";
            }
            if (shown_word[count] != undefined){
                count=count+1
            } 
        }
        if (shown_word != null){
            document.getElementById(row).innerHTML = String(shown_word[0]);
        }
        console.log("it continued")
        for (let i = 1; i < Object.keys(shown_word).length; i++){
                if (help_list.includes(shown_word[i])==false){
                    help_list = String(help_list) + String(shown_word[i]);
                }
                console.log(shown_word[i]+" is the help list["+String(i)+"]")
        }
        if ("row1"!=row){
            document.getElementById(row).innerHTML
        }
        
        console.log(help_list+"is help_list");
        x = x + 1;
        console.log(String(shown_word[0])+" is shown_word[0]");
        console.log("there are "+String(Object.keys(shown_word).length)+" indexes in shown_word")
    }
}