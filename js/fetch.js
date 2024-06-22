const selectedPrdoduct =[]

async function fetchData (){
    const uri = "https://dummyjson.com/products";

    try{
        const response = await fetch(uri);
        const data = await response.json();
        displayData(data);
        

    }catch(error){
        console.log("Error: ", error)
    }
}

function displayData(data){
    
    const productContainer = document.getElementById('productContainer')
    data.products.forEach(element => {
        

        var createproductCard= document.createElement('div');
        createproductCard.classList ='productCard';
        createproductCard.addEventListener('click',() =>{

            window.location.href = "./product.html";
        })
        clickProductCard(createproductCard, element);


        var imageCont = document.createElement('span');
        imageCont.classList = 'imageCont';
     

        var itemImage = document.createElement('img');
        itemImage.src = element.thumbnail;
        itemImage.classList = 'itemImage';
        

        var freShipping = document.createElement('h6');
        freShipping.textContent = "FREE SHIPPING"
        freShipping.classList = 'freShipping';

        
        imageCont.append(itemImage);
        imageCont.append(freShipping)
        createproductCard.append (imageCont)
       

        // Product Details


        var createshipping = document.createElement('h6');
        createshipping.textContent = element.shippingInformation;
        createshipping.classList = 'shipping';

        
        var createitemDiscount = document.createElement('h6');
        createitemDiscount.textContent = element.discountPercentage +" off";
        createitemDiscount.classList = "itemDiscount";

        var createDetail1 = document.createElement('span');
        createDetail1.classList ='detail1';

        createDetail1.append(createitemDiscount);
        createDetail1.append(createshipping);


        var createitemTitle = document.createElement('h6');
        createitemTitle.textContent = element.title;
        createitemTitle.classList = 'itemTitle';

        var createdetailCont = document.createElement('span');
        createdetailCont.classList ='detailCont';
        
        createdetailCont.append(createitemTitle);
        createdetailCont.append(createDetail1);
        createproductCard.append (createdetailCont)

        // Price
        var createitemPrice = document.createElement('h6');
        createitemPrice.textContent = "₱ " + element.price;
        createitemPrice.classList ='itemPrice'
        createdetailCont.append(createitemPrice);


        // Last part
        

        var createSVG = document.createElement('span');
        createSVG.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>`;
        createSVG.classList = 'star';
       

        var createitemRating = document.createElement('h6');
        createitemRating.classList= 'itemRating';
        createitemRating.append(createSVG,  element.rating);

   

        var createwarranty = document.createElement('h6');
        createwarranty.textContent = element.warrantyInformation;
        createwarranty.classList = 'warranty';

        var createdetail2 = document.createElement('span');
        createdetail2.classList= 'detail2';
        createdetail2.append(createwarranty);
        createdetail2.append(createitemRating);


        createdetailCont.append(createdetail2)
       

        
        productContainer.append(createproductCard);

  

        // createitemTitle.append(createitemDiscount);
        // createdetailCont.append(createitemTitle);

        // createdetailCont.append(createDetail1);
        // createproductCard.append (createdetailCont)

        
    });
}

function clickProductCard(createproductCard,element){

    createproductCard.addEventListener('click', function (){
       
        selectedPrdoduct.push(element)
        console.log(selectedPrdoduct);

        localStorage.setItem("id",selectedPrdoduct[0].id)
        const x = localStorage.getItem('id')
        console.log(x);
    })

}



export {fetchData};
 