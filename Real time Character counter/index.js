const textareaEl = document.getElementById("textarea")
const totalcharEl = document.getElementById("totalcharacter")
const RemainEl = document.querySelector(".Remaining")

textareaEl.addEventListener("keyup", ()=>{
    // console.log("key is pressed")
    updateCounter()
})

updateCounter();

function updateCounter(){
    totalcharEl.innerText =  textareaEl.value.length
    RemainEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length
} 