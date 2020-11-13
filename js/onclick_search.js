(function (){
    const icon_size = 160;
    const image_width =160;
    const image_height=160;
    const image_magnification = 0.2;//倍率
    const style_sheet = document.styleSheets.item(0);
    style_sheet.insertRule("img { width:"+image_width*image_magnification+"px;height:"+image_height*image_magnification+"px; }",  style_sheet.cssRules.length);
    style_sheet.insertRule(".p {font-size:"+image_width*image_magnification+"px; }",  style_sheet.cssRules.length);
})();

function onclick_search(){
    const initial_box = document.getElementById("initial");
    const initial = initial_box.value;
    initial_box.focus();
    initial_box.value="";
    const start_=document.getElementById("start");
    const char_start_=document.getElementById("char_start");
    const char_used_=document.getElementById("char_used");
    char_start_.innerHTML = initial;
    char_used_.innerHTML = initial;
    let str = "";
    let str_used = "";
    const num1 = checker(initial);
    if(num1!=69&&word_list[num1]!=0){
        let i=word_list[num1][0][1];
        let i_num=0;
        let flag_case_used0=0;
        let i_used;
        let i_num_used;
        for (let num2 = 0; num2 < word_list[num1].length; num2++) {
            if(word_used_flag_list[num1][num2]==0){
                if (!(word_list[num1][num2][1]==i)) {
                    i = word_list[num1][num2][1];
                    i_num++;
                    str=str+"<br>";
                }
                str+=str_plus_p(word_list[num1][num2][0],num1,num2,word_list[num1][num2][2],true);
            }
            else if(word_used_flag_list[num1][num2]==1){
                if(flag_case_used0===0){
                    flag_case_used0=1;
                    i_used=word_list[num1][0][1];
                    i_num_used=0
                }
                if (!(word_list[num1][num2][1]==i_used)) {
                    i_used = word_list[num1][num2][1];
                    i_num_used++;
                    str_used=str_used+"<br>";
                }
                str_used+=str_plus_p(word_list[num1][num2][0],num1,num2,word_list[num1][num2][2],false);
            }
        }
        start_.innerHTML = str;
        used_.innerHTML = str_used;
    }else{
        start_.innerHTML = "";
        used_.innerHTML = "";
    }
    
}
function str_plus_p(string,i,j,k,flag){
    let text;
    let w_or_u;
    if (flag) {
        w_or_u = "word";
    } else {
        w_or_u = "used";
    }
    if(pikohum_mode_flag){
        if(pi_until_1(string)){
            text="<p class = 'p change_text_color2' onclick = 'onclick_p_"+w_or_u+"_list("+i+","+j+")' >"+
                '<img src="./pic/pic/'+k+'.png">'+string+"</p>";
        } else if(pi_until_3(string)){
            text="<p class = 'p change_text_color4' onclick = 'onclick_p_"+w_or_u+"_list("+i+","+j+")' >"+
                '<img src="./pic/pic/'+k+'.png">'+string+"</p>";
        } else {
            text="<p class = 'p' onclick = 'onclick_p_"+w_or_u+"_list("+i+","+j+")' >"+
                '<img src="./pic/pic/'+k+'.png">'+string+"</p>";
        }
    } else {
        text="<p class = 'p' onclick = 'onclick_p_"+w_or_u+"_list("+i+","+j+")' >"+
            '<img src="./pic/pic/'+k+'.png">'+string+"</p>";
    }
    return text;
}

function pi_until_1(str) {
    const str_slice = str.slice(-1);
    if (str_slice==="ぴ"||str_slice==="ピ") {
        return true;
    } else{
        return false;
    }
}
function pi_until_3(str) {
    const str_slice = str.slice(-1);
    if (str_slice==="あ"||str_slice==="ア"||
        str_slice==="き"||str_slice==="キ"||
        str_slice==="ぎ"||str_slice==="ギ"||
        str_slice==="ぐ"||str_slice==="グ"||
        str_slice==="し"||str_slice==="シ"||
        str_slice==="ち"||str_slice==="チ"||
        str_slice==="だ"||str_slice==="ダ"||
        str_slice==="ほ"||str_slice==="ホ"||
        str_slice==="ぱ"||str_slice==="パ"||
        str_slice==="ま"||str_slice==="マ"||
        str_slice==="め"||str_slice==="メ") {
        return true;
    } else{
        return false;
    }
}