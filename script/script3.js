function fun1(){
    var i = document.getElementById("input1").value;
    var j = document.getElementById("input2").value;
    var k= document.getElementById("input3");
    if (k.value.length === 0) {
                    k.value = k.placeholder;
    }
    var l = k.value;
    var xhr= new XMLHttpRequest();
    xhr.open("POST","http://192.168.43.243/cgi-bin/main.py?cmd=" + "sudo kubectl run " + i + " --image=" + j + " -n " + l, false);
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
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
}

function fun3(){
    var i = document.getElementById("input4");
    if (i.value.length === 0) {
                    i.value = i.placeholder;
    }
    var j = i.value;
    var xhr= new XMLHttpRequest();
    xhr.open("POST","http://192.168.43.243/cgi-bin/main.py?cmd=" + "sudo kubectl get pods --namespace " + j, false);
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
