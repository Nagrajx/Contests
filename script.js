
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for (item in contests) {
        console.log(contests[item])
        ihtml += `
               <div class="card" style="width: 22rem;">
               <img src="https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title">${contests[item].name}</h5>
                 <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                 <p class="card-text"> In 24 Hours ${contests[item].in_24_hours}</p>
                 <p>Starts at: ${contests[item].start_time}
                 <p> Ends at: ${contests[item].end_time}
                 <a href="${contests[item].url}" class="btn btn-primary">Visit Contests</a>
               </div>
             </div>  
       `
    }
    cardcontainer.innerHTML = ihtml
})


