// ドロワー

const menuBtn = document.getElementById("menuBtn")
const drawer = document.getElementById("drawer")

menuBtn.onclick = () => {

drawer.classList.toggle("open")

}


// 検索

const form = document.getElementById("searchForm")

form.addEventListener("submit", e => {

e.preventDefault()

const word = document.getElementById("searchInput").value

location.href = "search.html?q=" + encodeURIComponent(word)

})