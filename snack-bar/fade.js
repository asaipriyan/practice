function fadeFunction(){
    let s = document.getElementById('snackbar');
    s.className = "show";
    setTimeout(function(){s.className = s.className.replace("show","");},3000)
}