function isHiragana(str){
    str = (str==null)?"":str;
    if(str.match(/^[ぁ-んー　]*$/)){    //"ー"の後ろの文字は全角スペースです。
      return true;
    }else{
      return false;
    }
}
function kanaToHira(str) {
    return str.replace(/[\u30a1-\u30f6]/g, function(match) {
        let chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}
const used_ =document.getElementById("used");
const used = document.getElementById("used_word");
let remain_num = 505;
const remain_text = document.getElementById("remain_text");
remain_text.innerHTML=remain_num;
function onclick_change_used(){
    const used_word =used.value;
    let num1;
    if(!(isHiragana(used_word.charAt(0)))) {
        num1 = checker(kanaToHira(used_word.charAt(0)));
    }
    else{
        num1 = checker(used_word.charAt(0));
    }
    for (let num2 = 0; num2 < word_list[num1].length; num2++) {
        if (used_word===word_list[num1][num2][0]&&word_used_flag_list[num1][num2]==0) {
            word_used_flag_list[num1][num2]=1;
            output_log(used_word+"を使用済みに登録しました。");
            remain_num--;
            remain_text.innerHTML=remain_num;
            break;
        }
    }
}