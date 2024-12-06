



function getImages(query, id) {
    let contImages = document.getElementById(`${query}`)
    let section = document.getElementById(`${id}`)
    let searchInput = document.getElementById(`searchInput`)

    const API_KEY = "B0J6R6uBnRL2XUaNb6xS2zWflzItGHR5OXCGwv6jGRBJPhOgBhB5uqYq";
    const API_URL = (`https://api.pexels.com/v1/search?query=${query}`);


    fetch(API_URL, {
        method: "GET",
        headers: {
            Authorization: API_KEY
        }
    })
        .then((response) => response.json())
        .then((response) => {

            section.classList.remove("d-none")
            contImages.innerHTML = response.photos.map(element => {
                return `
                <div class="col-3 mt-4">
                    <div class="card">
                    
                        <img src="${element.src.medium}" alt="">
                    
                        <div class="card-body">
                            <h5 class="card-title">${element.photographer}</h5>
                            <p class="card-text">${element.alt}</p>
                        </div>
                    </div>
                </div>
            `
            }).join("")


        })
        .catch(error => {
            console.error("Errore:", error);
        });


}


let searchButton = document.getElementById(`searchButton`)
searchButton.addEventListener(`click`, function() {
    let searchInput = document.getElementById(`searchInput`)  
    let sectionSearch = document.getElementById(`sectionSearch`)
    let displaySearch = document.getElementById(`searchResult`)
    let searchResult = document.getElementById(`Search`)
    displaySearch.classList.remove("d-none")
    let search = searchInput.value
    search = search.toLowerCase()
    function offDisplay(id) {
        let displaynone = document.getElementById(id);
        displaynone.classList.add("d-none");
    }
    offDisplay("sectionWinter")
    offDisplay("sectionCat")
    offDisplay("sectionPlants")

    const API_KEY = "B0J6R6uBnRL2XUaNb6xS2zWflzItGHR5OXCGwv6jGRBJPhOgBhB5uqYq";
    const API_URL = (`https://api.pexels.com/v1/search?query=${search}`);


    fetch(API_URL, {
        method: "GET",
        headers: {
            Authorization: API_KEY
        }
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            searchResult.innerHTML = response.photos.map(element => {
                return `
                <div class="col-3 mt-4">
                    <div class="card">
                    
                        <img src="${element.src.medium}" alt="">
                    
                        <div class="card-body">
                            <h5 class="card-title">${element.photographer}</h5>
                            <p class="card-text">${element.alt}</p>
                        </div>
                    </div>
                </div>
                `
            }).join("")
        })
    
})


getImages("winter", "sectionWinter")
getImages("cat", "sectionCat")
getImages("plants", "sectionPlants")