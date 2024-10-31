const buttons = document.querySelectorAll('.timeline button');
buttons.forEach((button)=>{
    button.addEventListener("click", function(){
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "none" ? "" : "none";
    });
    button.click();
});