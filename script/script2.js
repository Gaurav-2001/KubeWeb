function fun1(){
    var i = document.getElementById("input1").value;
    var xhr= new XMLHttpRequest();
    xhr.open("POST","http://192.168.43.243/cgi-bin/main.py?cmd=" + "sudo " + i.slice(2,), false);
    xhr.send();
    var output = xhr.responseText;
    var outputbox = document.getElementById("output");
    outputbox.style.color = "green";
    outputbox.style.fontFamily = "'Courier New', Courier, monospace";
    outputbox.style.fontWeight = "bold";
    outputbox.style.fontSize = "120%";
    outputbox.style.textAlign = "center";
    outputbox.style.margin = "0";
    document.getElementById("output").innerHTML=output;
}

function fun2(){
    document.getElementById("output").innerHTML = " ";
    document.getElementById("input1").value = "> ";
}
