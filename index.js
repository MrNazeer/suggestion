let doc = window.document;
let val = doc.querySelector(".inpute");
console.log(val.value);
let arr = ["Nazeer","Naveen","Naren"];
val.addEventListener("keyup",(e)=>{
    removeEle();
   for (const i of arr) {
    if (i.toLowerCase().startsWith(val.value.toLowerCase()) && val.value !=="" ) {
        let ls =  doc.createElement("li");
        ls.classList.add("list-item");
        ls.style.cursor="pointer";
        ls.setAttribute("onclick", "displayNames('" + i + "')");

        let word =  "<b>" + i.substring(0,val.value.length) + "</b>";
        word+=i.substring(val.value.length);
        ls.innerHTML=word;
        doc.querySelector(".list").appendChild(ls);
    }
   }
});

function displayNames(value) {
    val.value = value;
    removeEle();
    
}

function removeEle() {
    let items = doc.querySelectorAll(".list-item");
    items.forEach((item) => {
        item.remove();
});
}