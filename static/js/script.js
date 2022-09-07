let objectss = document.getElementsByTagName("li")

for (let i=0; i<objects.length; i++) {
    objects[i].addEventListener("click", () => {
    objects[i].classList.toggle("finish")
    })
}
