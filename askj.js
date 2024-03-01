function titleCheck() {
    var a=document.getElementById('titleSearch');
    if (a.value.length==0) {
        alert("Please Enter Title.");
        document.getElementById("titleSearch").focus();
        document.getElementById("titleSearch").style.backgroundColor="red";
        
    }
}
function selectCheck() {
    var b=document.getElementsByName("choice");
    for (var i=0;i<b.length;i++) {
        if (b[i].checked) {
            return true;
        }
    }
    alert("Please Select Type");
}
function checkbox() {
    var c=document.getElementsByName("select");
    for (var i=0;i<c.length;i++) {
    if (c[i].checked) {
        return true;
    }
}
alert("Please select the category.");
}
function status() {
    var d=document.getElementsByName("mark");
    for (var i=0;i<d.length;i++) {
        if (d[i].checked) {
            return true;
        }
    }
    alert("Please select the status.")
}
function description() {
 var e=document.getElementById("ask");
 if (e.value.length==0) {
    alert("Please enter the description");
 }  
}