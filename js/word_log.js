const word_log = document.getElementById("word_log"); 
let log_array = ["","","","","",
                 "","","","","",
                 "","","","",""
                ];//15
function output_log(str){
    let text = "";
    for (let num1 = log_array.length-1; num1 > 0; num1--) {
        log_array[num1]=log_array[num1-1];
    }
    log_array[0]=str;
    for (let num1 = 0; num1 < log_array.length; num1++) {
        text+="<p>"+log_array[num1]+"</p>"
    }
    word_log.innerHTML = text;
}
output_log("");