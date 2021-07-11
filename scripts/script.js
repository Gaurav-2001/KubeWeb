function fun1(){
    var i = document.getElementById("input1").value;
    var xhr= new XMLHttpRequest();
    xhr.open("POST","http://192.168.47.35/cgi-bin/main.py?cmd=" + "sudo" + i.slice(2,), false);
}