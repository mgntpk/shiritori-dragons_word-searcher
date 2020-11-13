function onclick_return(){
    const return_word = document.getElementById("return_word").value;
    let num1;
    if(!(isHiragana(return_word.charAt(0)))) {
        num1 = checker(kanaToHira(return_word.charAt(0)));
    }
    else{
        num1 = checker(return_word.charAt(0));
    }
    for (let num2 = 0; num2 < word_list[num1].length; num2++) {
        if (return_word===word_list[num1][num2][0]&&word_used_flag_list[num1][num2]==1) {
            word_used_flag_list[num1][num2]=0;
            output_log(return_word+"を未使用に登録しました。");
            remain_num++;
            remain_text.innerHTML=remain_num;
            break;
        }
    }
}