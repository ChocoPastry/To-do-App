let inp = document.querySelector(".inp");
let btn = document.querySelector("button");




let h3 = document.querySelector("h3");
btn.addEventListener("click", e => {
    let li = document.createElement('li');
    /^[A-Za-z ]+$/.test(e.data) || e.preventDefault()
    li.innerText = (inp.value);
    inp.value = '';
    h3.append(li);
    let delBtn = document.createElement("button");
    delBtn.innerText = "del -";
    delBtn.classList.add("delBtn");
    li.appendChild(delBtn);
});


let ul = document.querySelector("ul");

ul.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        let par = event.target.parentElement;
        par.remove();
    }
})