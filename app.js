let searchBtn = document.getElementById('searchBtn')
let addBtn = document.getElementById('addBtn')
let displayAll = document.getElementById('displayAll')
let jscards = document.getElementById('jscards')
let searchJsCards = document.getElementById('searchJsCards')
let contShowAll = document.getElementById('showAll')
let books = []


let addElement = () => {
    
    jscards.style.display = 'flex'
    
    searchJsCards.style.display = 'none'
   
    contShowAll.style.display= 'none'
    
    
    let bookId = 1
    
    let title = document.getElementById('titleB')
    let author = document.getElementById('authorB')
    let publiDate = document.getElementById('publi_dateB')
    let genre = document.getElementById('genreB')
    
    let newItem = {Titulo: title.value, Autor: author.value, FechaPublicacion: publiDate.value, Genero: genre.value}
    books.push(newItem)
    let newBook = document.createElement('div')
    newBook.id = `newBook${bookId}`
    bookId += 1
    newBook.classList.add('div1')
    jscards.appendChild(newBook)
    
    let newTitle = document.createElement('h1')
    newTitle.innerText = `Titulo: ${title.value}`
    newBook.appendChild(newTitle)
    let newAuthor = document.createElement('h1')
    newAuthor.innerText = `Autor: ${author.value}`
    newBook.appendChild(newAuthor)
    let newPubliDate = document.createElement('h1')
    newPubliDate.innerText = `Fecha publicacion: ${publiDate.value}`
    newBook.appendChild(newPubliDate)
    let newGenre = document.createElement('h1')
    newGenre.innerText = `Genero: ${genre.value}`
    newBook.appendChild(newGenre)
}

let searchElement = () => {
    let checkTit = document.getElementById('checkTit')
    let checkAuth = document.getElementById('checkAuth')
    let checkDate = document.getElementById('checkDate')
    let checkGenre = document.getElementById('checkGenre')
    
    contShowAll.style.display= 'none'
    jscards.style.display = 'none'
    searchJsCards.style.display = 'flex'
    searchJsCards.innerHTML = ''

    let searchByTitle = document.getElementById('titleA') 
    let searchByAuthor =  document.getElementById('authorA') 
    let searchByPubliDate =  document.getElementById('publi_dateA') 
    let searchByGenre =  document.getElementById('genreA') 
   
    let dataArray = []   
    let newObj = {}
/*     let title 
    let author 
    let publiDate
    let genre 
 */

    if (checkTit.checked){
        newObj.Titulo = searchByTitle.value
    }
    if (checkAuth.checked){
        newObj.Autor = searchByAuthor.value
    }
    if (checkDate.checked){
        newObj.FechaPublicacion = searchByPubliDate.value
    }
    if (checkGenre.checked){
        newObj.Genero = searchByGenre.value
    }
    dataArray.push(newObj)
   
    console.log(dataArray)
    
    console.log(books)
    console.log(dataArray.titulo)
    console.log(books.title)
    for (let i=0; i < books.length; i++){
        

        if (books[i].Titulo == dataArray.Titulo || books[i].Autor == dataArray.Autor || books[i].FechaPublicacion ==  dataArray.FechaPublicacion || books[i].Genero == dataArray.Genero){
            let newRes = document.createElement('div')
            searchJsCards.appendChild(newRes)
            newRes.classList.add('div1')

            let newTitle = document.createElement('h1')
            newTitle.innerText = `Titulo: ${books[i].Titulo}`
            newRes.appendChild(newTitle)
            let newAuthor = document.createElement('h1')
            newAuthor.innerText = `Autor: ${books[i].Autor}`
            newRes.appendChild(newAuthor)
            let newPubliDate = document.createElement('h1')
            newPubliDate.innerText = `Fecha publicacion: ${books[i].FechaPublicacion}`
            newRes.appendChild(newPubliDate)
            let newGenre = document.createElement('h1')
            newGenre.innerText = `Genero: ${books[i].Genero}`
            newRes.appendChild(newGenre)
              
        }
    }
}

let showAll = () => {
    searchJsCards.style.display = 'none'
    jscards.style.display = 'none'
    contShowAll.style.display = 'flex'
    
    for (let i=0; i < books.length; i++){
        let newRes = document.createElement('div')
        contShowAll.appendChild(newRes)
        newRes.classList.add('div1')

        let newTitle = document.createElement('h1')
        newTitle.innerText = `Titulo: ${books[i].Titulo}`
        newRes.appendChild(newTitle)
        let newAuthor = document.createElement('h1')
        newAuthor.innerText = `Autor: ${books[i].Autor}`
        newRes.appendChild(newAuthor)
        let newPubliDate = document.createElement('h1')
        newPubliDate.innerText = `Fecha publicacion: ${books[i].FechaPublicacion}`
        newRes.appendChild(newPubliDate)
        let newGenre = document.createElement('h1')
        newGenre.innerText = `Genero: ${books[i].Genero}`
        newRes.appendChild(newGenre)

    }
}
searchBtn.addEventListener('click', searchElement)
addBtn.addEventListener('click', addElement)
displayAll.addEventListener('click', showAll)




