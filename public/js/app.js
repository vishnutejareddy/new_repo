
const weatherform = document.getElementById("inputbutton")
const address = document.getElementById("inputplace")
const msg = document.getElementById("msg")

address.addEventListener("keypress",(e)=>{
    if(e.keyCode==13){e.preventDefault()}
    linkbut.href="weather?address="+address.value
})

const linkbut = document.getElementById("linkbut")
linkbut.addEventListener("focus",()=>{
    linkbut.href="weather?address="+address.value
})
