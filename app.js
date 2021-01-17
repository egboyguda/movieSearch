const form = document.querySelector("form")
//dd pag gin sumbit execute n
form.addEventListener("submit",async(e)=>{
    e.preventDefault()//in ini para di magload next page an html
    let search = await e.target.elements.search.value //dd man gn kuwa an gn type sa user
    let movie = await getMovie(search) // dd an return sa function sa getmovie gin store sa variable na movie
    await console.log(movie)//for debuging purpose gin print ko la kun nanu an sulud sa movie
   for(let i of movie){// nyn ky aray an sulud sa movie kada element nadto ig susulud sa i
       try {// try catch pag di mag eerror n tadi guris
        console.log(i.show.image.medium)
        img(i.show.image.medium)

       } catch (error) {
           console.log(error)
           img(null)
       }
    } 

})
//function mag rereturn data o url sa movie
const getMovie = async(movie)=>{
    try {
        let urls = await axios.get(` http://api.tvmaze.com/search/shows?q=${movie}`)
        let arrMov = urls.data
        return urls.data
    } catch (error) {
        console.log(error)
        return null
    }
}

//function na mag crecreate image na element sa body
const img= async(url)=>{
    let image = await document.createElement("img")
    image.src= await url
    document.body.appendChild(image)

}