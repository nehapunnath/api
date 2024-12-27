const url="https://www.omdbapi.com/?i=tt3896198&apikey=58987138"

const result=fetch(url)
result.then((item)=>{
    return item.json()
}).then(item=>{
    console.log(item)
    cards=''
    item.forEach(ms => {
        cards+=`
        <div class='card' style='width:18rem'>
            <div class='card-body'>
             <h1 class='card-title'>${ms.title}</h1>
             <p class='card-text'>${ms.released}</p>
             <p class='card-text'>${ms.director}</p>
             <p class='card-text'>${ms.writer}</p>
             <p class='card-text'>${ms.actors}</p>
             <p class='card-text'>${ms.language}</p>
             <p class='card-text'>${ms.country}</p>
             <p class='card-text'>${ms.award}</p>
             <p class='card-text'>${ms.posters}</p>
             <p class='card-text'>${ms.ratings}</p>
           </div>
        </div>
        `
    })

    mvs.innerHTML=cards

}).catch(err=>{
    console.log(err)
})




