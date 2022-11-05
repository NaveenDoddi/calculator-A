function point(){
    
    document.getElementById("input").append(".")
}
function zero(){
    
    document.getElementById("input").append("0")
}
function twozero(){
    
    document.getElementById("input").append("00")
}
function one(){
    
    document.getElementById("input").append("1")
}
function two(){
    
    document.getElementById("input").append("2")
}
function three(){

    document.getElementById("input").append("3")
}
function four(){
    
    document.getElementById("input").append("4")
}
function five(){

    document.getElementById("input").append("5")
}
function six(){
    
    document.getElementById("input").append("6")
}
function seven(){
    
    document.getElementById("input").append("7")
}
function eight(){
 
    document.getElementById("input").append("8")
}
function nine(){
    
    document.getElementById("input").append("9")
}
function sum(){
    document.getElementById("input").append("+")
}
function sub(){
    document.getElementById("input").append("-")
}
function mul(){
    document.getElementById("input").append("*")
}
function div(){
    document.getElementById("input").append("/")
}
function per(){
    document.getElementById("input").append("%")
}
function ans(){
    document.getElementById("output").innerHTML="="
    var input = document.getElementById("input").innerHTML
    let Array=[];
    for(let x=0; x<input.length; x++){

        if(input[x]=="+"){
            
            var inputvalue=input.split("+");
    
            Array=inputvalue;
            let num1=parseFloat(Array[0]);
            let num2=parseFloat(Array[1]);
            document.getElementById("output").append(num1+num2);
        }
        if(input[x]=="-"){

            var inputvalue=input.split("-");
    
            Array=inputvalue;
            let num1=parseFloat(Array[0]);
            let num2=parseFloat(Array[1]);
            document.getElementById("output").append(num1-num2); 
        }
        if(input[x]=="*"){
            var inputvalue=input.split("*");
    
            Array=inputvalue;
            let num1=parseFloat(Array[0]);
            let num2=parseFloat(Array[1]);
            document.getElementById("output").append(num1*num2); 
        }
        if(input[x]=="/"){
            var inputvalue=input.split("/");
    
            Array=inputvalue;
            let num1=parseFloat(Array[0]);
            let num2=parseFloat(Array[1]);
            document.getElementById("output").append(num1/num2); 
        }
        if(input[x]=="%"){
            var inputvalue=input.split("%");
    
            Array=inputvalue;
            let num1=parseFloat(Array[0]);
            let num2=parseFloat(Array[1]);
            document.getElementById("output").append(num1%num2)
        }

    }

}
function ac(){
    document.getElementById("input").innerHTML=" ";
    document.getElementById("output").innerHTML=" ";

  
}
function del(){

    var input = document.getElementById("input").innerHTML
    var slicedData=input.slice(0, -1)
    document.getElementById("input").innerHTML=" "
    document.getElementById("input").append(slicedData)

}





// setTimeout(() => {window.location.reload();}, 1000);
