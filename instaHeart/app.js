let container = document.querySelector("#container");
let love = document.querySelector("i");

container.addEventListener("dblclick", function(){
    love.style.transform="translate(-50% , -50%) scale(1)"
    love.style.opacity="0.8"
    setTimeout(function(){
      love.style.opacity="0"
    
    }, 2500)
    setTimeout(function(){
        love.style.transform="translate(-50% , -50%) scale(0)"
    
    }, 2500)
})

