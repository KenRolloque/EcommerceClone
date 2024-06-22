const x = localStorage.getItem('id');

async function selectedProduct(){

    const uri = "https://dummyjson.com/products/"+x;

    try{
        const fetchData = await fetch(uri);
        const response  = await fetchData.json();
        displayData(response);
    }catch(error){
        console.log("Error: ",error)
    }
    
}

function displayData(response){

    var getproductImage = document.getElementById('productImage');
    getproductImage.src = response.thumbnail;

    var getproductName = document.getElementById('productName')
    getproductName.textContent = response.title;

    var getratings = document.getElementById('ratings');
    getratings.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>` +response.rating;


    var getitemPrice = document.getElementById('itemPrice');
    getitemPrice.textContent = "₱ "+response.price

    var getstocks = document.getElementById('stocks');
    getstocks.textContent = response.stock +" pieces available"

    var getitemCategory = document.getElementById('itemCategory');
    getitemCategory.textContent = response.category;

    var getstocks2 = document.getElementById('stocks2');
    getstocks2.textContent = response.stock

    var getproducDesc2 = document.getElementById('producDesc2');
    getproducDesc2.textContent = response.description;


    // Customer Review

    var getratingsContainer = document.getElementById('ratingsContainer');

    response.reviews.forEach(element => {
       
        var customerContainer = document.createElement('div');
        customerContainer.classList = 'customerContainer'

        customerContainer.innerHTML =
        `
                <span class ="customerProfile" id = "customerProfile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                      </svg>
                </span>
                <span class ="customerInfo">
                    <h6 class ="customerName">${element.reviewerName}</h6>
                    <span  class ="customerRating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>  
                        ${element.rating}
                    </span>
                    <h6 class ="commentDate">${element.date}</h6>
                    <h6 class ="customerComment">${element.comment}</h6>

                </span>
        `

        getratingsContainer.append(customerContainer);

    });

}

selectedProduct();