const filterButtons=document.querySelectorAll("button");
const filterableCards=document.querySelectorAll(".card")

filterButtons.forEach(button=>{

    button.addEventListener("click", (e)=>{
        
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        filterableCards.forEach(card=>{
            card.classList.add("hide");

            if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
                card.classList.remove("hide");
            }
        })
    })
});
