let pikohum_mode_flag = false;
function onclick_pikohum_mode_flag_change(target){
    if (pikohum_mode_flag) {
        pikohum_mode_flag =!pikohum_mode_flag;
        target.value="ピコハンモードをON";
    } else {
        pikohum_mode_flag =!pikohum_mode_flag;
        target.value="ピコハンモードをOFF";
    }
}