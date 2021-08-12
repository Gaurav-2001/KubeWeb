function fun1(){
    var d_name = document.getElementById("input1").value;
    var i_name = document.getElementById("input2").value;
    var j = document.getElementById("input5");
    if(j.value.length == 0){
        j.value = j.placeholder;
    }
    var replica = j.value;
    var k= document.getElementById("input3");
    if (k.value.length === 0) {
                    k.value = k.placeholder;
    }
    var ns_name = k.value;
    var xhr= new XMLHttpRequest();
    xhr.open("POST","http://192.168.43.243/cgi-bin/main.py?cmd=" + "sudo kubectl create deploy " + d_name + " --replicas=" + replica + " --image=" + i_name + " -n " + ns_name, false);
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
    var ns_name = i.value;
    var xhr= new XMLHttpRequest();
    xhr.open("POST","http://192.168.43.243/cgi-bin/main.py?cmd=" + "sudo kubectl get deployment --namespace " + ns_name, false);
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