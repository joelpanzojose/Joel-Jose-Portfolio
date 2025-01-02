
window.addEventListener("scroll", () => {
    const cabeca = document.getElementById("header")
    if (window.scrollY > 0){
        cabeca.setAttribute("class","headerScroll")
    }else{
        cabeca.setAttribute("class"," ")
    }
    
})

const observador = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add('show')
    } else{
        entry.target.classList.remove('show')
    }
      
  })
})
const elementos = document.querySelectorAll('.hidden')
elementos.forEach((el) => observador.observe(el))


const menuLinks = document.querySelectorAll(".menu a")

function positionelement(elemento){
    const id = elemento.getAttribute("href")
    return document.querySelector(id).offsetTop
}

function scrollnativo(distanciadotopo){
    window.scroll({
        top: distanciadotopo,
        behavior: "smooth"
    })
}

function sCrollTosection(event){
    event.preventDefault();
    const el = event.target
    const id = el.getAttribute("href")
    const section = document.querySelectorAll(id)

    const distanciadotopo = positionelement(event.target) - 90
    scrollnativo(distanciadotopo)

    console.log(section)
}
console.log(menuLinks)
menuLinks.forEach((link)=>{
    link.addEventListener("click", sCrollTosection)
})

const tema = document.getElementById("tema")
const btntrocarEscuro = document.getElementById('trocarEscuro')
const btntrocarClaro = document.getElementById('trocarClaro')
const divIcon = document.getElementById('iconnav')

btntrocarEscuro.addEventListener("click",()=>{
    tema.href = "css/escuro.css"
    btntrocarEscuro.style.display = "none"
    btntrocarClaro.style.display = "block"
})
btntrocarClaro.addEventListener("click",()=>{
    tema.href = "css/claro.css"
       btntrocarEscuro.style.display = "block"
       btntrocarClaro.style.display = "none"
})