var size = document.querySelectorAll(".drumbutton").length;

for(var i=0;i<size;i++){
    document.querySelectorAll(".drumbutton")[i].addEventListener("click",function(){
        var key= this.innerHTML;
        playsound(key);
        buttonanimation(key);

});
}

  function playsound(key){
    switch(key){
        case "w": 
        var wsong = new Audio("music/tom-1.mp3");
        wsong.play();
        break;

        case "a": 
        var asong = new Audio("music/tom-2.mp3");
        asong.play();
        break;
        
        case "s": 
        var ssong = new Audio("music/tom-3.mp3");
        ssong.play();
        break;

        case "d": 
        var dsong = new Audio("music/tom-4.mp3");
        dsong.play();
        break;

        case "j": 
        var jsong = new Audio("music/snare.mp3");
        jsong.play();
        break;

        case "k": 
        var ksong = new Audio("music/crash.mp3");
        ksong.play();
        break;

        case "l": 
        var lsong = new Audio("music/kick-bass.mp3");
        lsong.play();
        break;


    }
}

document.addEventListener("keypress",function(event){
    playsound(event.key);
    buttonanimation(event.key)
});

function buttonanimation(key){
    var newbutton= document.querySelector("."+key);
    newbutton.classList.add("shadow");
    setTimeout(function() {
        newbutton.classList.remove("shadow");
    }, 200);
}