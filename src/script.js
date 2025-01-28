let links = document.querySelectorAll(".options a");
let bodyid = document.querySelectorAll("body").id;


for(let option of options){
    if(option.dataset.active == bodyid){
        option.classList.add("active");
    }
}