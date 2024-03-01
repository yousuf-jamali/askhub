function check() {
    var x=document.getElementById('answer');
    if (x.value==="") {
        alert("Submit Your Answer.");
    }
    else {
        document.write(x.value);
    }
}
console.log(window.location.href);
function likee() {
    alert("Post is liked!");
}
function dislikee() {
    alert("Post is disliked");
}
