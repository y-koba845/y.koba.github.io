const tabs = document.querySelectorAll(".tab")

tabs.forEach(tab=>{

tab.onclick=()=>{

document.querySelector(".tab.active").classList.remove("active")

tab.classList.add("active")

const id=tab.dataset.tab

document.querySelector(".tab-panel.active").classList.remove("active")

document.getElementById(id).classList.add("active")

}

})