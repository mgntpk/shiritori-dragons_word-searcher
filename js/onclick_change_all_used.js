function onclick_change_all_used(){
    for (let num1 = 0; num1 < word_list.length; num1++) {
        for (let num2 = 0; num2 < word_list[num1].length; num2++) {
            if (word_list[num1][num2]!=0) {
                word_used_flag_list[num1][num2]=1;
            }
            
        }
        
    }
    remain_num=0;
    remain_text.innerHTML=remain_num;
};