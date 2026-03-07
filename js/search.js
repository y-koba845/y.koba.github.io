const params=new URLSearchParams(location.search)

const q=params.get("q")

const results=document.getElementById("results")

pages.forEach(p=>{

if(p.text.includes(q)){

let index=p.text.indexOf(q)

let start=Math.max(0,index-50)
let end=index+50

let snippet=p.text.substring(start,end)

const div=document.createElement("div")

div.innerHTML=`

<a href="${p.url}">
<h3>${p.title}</h3>
</a>

<p>${snippet}</p>

`

results.appendChild(div)

}

})