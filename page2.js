var bgtText = document.getElementById("bgText");
var prevDiv = document.getElementById("preview");
var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var picChooser = document.getElementById("picChooser")

var numUse = 0;

bgText.addEventListener("keyup", function(ev){
    //console.log(ev.keyCode);
    
    if(ev.keyCode == 13){
        //do something to the background
        
        console.log(c1.checked, c2.checked, c3.checked);
        
        if(c1.checked){
            //document.body.style.backgroundColor = bgText.value;
            if(bgText.value == "city1"){
                document.body.style.backgroundImage = "url(imgs/1.jpg)";
            } else if(bgText.value == "city2"){
                document.body.style.backgroundImage = "url(imgs/2.jpg)";
            } else if(bgText.value == "boat"){
                document.body.style.backgroundImage = "url(imgs/3.jpg)";
            } else {
                document.body.style.backgroundColor = bgText.value;
            }
            
        } else if(c2.checked){
            //prevDiv.style.backgroundColor = bgText.value;
            if(bgText.value == "city1"){
                prevDiv.style.backgroundImage = "url(imgs/1.jpg)";
            } else if(bgText.value == "city2"){
                prevDiv.style.backgroundImage = "url(imgs/2.jpg)";
            } else if(bgText.value == "boat"){
                prevDiv.backgroundImage = "url(imgs/3.jpg)";
            } else {
                prevDiv.style.backgroundColor = bgText.value;
            }
            
        } else if(c3.checked){
            //menu.style.backgroundColor = bgText.value;
            if(bgText.value == "city1"){
                menu.style.backgroundImage = "url(imgs/1.jpg)";
            } else if(bgText.value == "city2"){
                menu.style.backgroundImage = "url(imgs/2.jpg)";
            } else if(bgText.value == "boat"){
                menu.style.backgroundImage = "url(imgs/3.jpg)";
            } else {
                menu.body.style.backgroundColor = bgText.value;
            }
            
        } else{
            alert("choose an option");
        }
        //prevDiv.style.backgroundColor = bgText.value;
        bgText.value = "";
        
        numUse++;
        console.log(numUse);
        if(numUse > 5){
            //alert("You've reached the limit. Please pay to use more!");
            document.getElementById("display").innerHTML = "You've reached the limit. Please pay to use more!";
        }
    }
});

picChooser.addEventListener("change", function(){
    var picNum = parseInt(picChooser.value);
    
    if(picNum > 3){
        picChooser.value = 1;
    }
    
    if(picNum < 1){
        picChooser.value = 3;
    }
    
    prevDiv.style.backgroundImage = "url(imgs/"+picChooser.value+".jpg)";
});