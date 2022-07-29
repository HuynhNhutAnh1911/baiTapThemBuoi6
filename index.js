// bai5 

function inSNT(){
    var e = document.getElementById("txt-sobai5").value, 
    t = "";
    for (n = 1;n <= e; n++) {
        kiemTraSNT(n) && (t += " " + n);
      }
      document.getElementById("result5").innerHTML = t;
}

function kiemTraSNT(a){
    if (a < 2){
        return !1;
    }
    for (var x = 2; x <= Math.sqrt(a); x++){
        if (a % x == 0){
            return !1;
        } 
    } 
    return !0;
 
}