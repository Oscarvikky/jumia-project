
let img = document.getElementById("img");
let imgarr = ["caro1.jpg", "caro2.jpg", "caro3.jpg"]
let index = 0;
img.src = imgarr[index];

function show(){
    let interval = setInterval(()=>{
        if(index == imgarr.length - 1){
            index = -1;
        }
         index++;
        img.src = imgarr[index]
    
    },3000) 

}
show()

function next(){
    if(index = 0){
      index = imgarr.length;
    
    }
    index++
    img.src = imgarr[index]

}
img.src = imgarr[index]
function prev(){
    
    if(index = 0){
      index = imgarr.length;
    }
    index--
    img.src = imgarr[index]
}



let api = document.getElementById("api");
let i = 0;
let products = [];


function fetchUsers() {
  api.innerHTML = ''
  fetch("http://localhost:2222/products").then((res)=>res.json())
  .then((data)=>{
      products = data;
      console.log(products)

   products.forEach((product, index) =>{
      const productElement =document.createElement('div');
      productElement.innerHTML += `
      <div class="container-sm nt" onclick="pickedItem(${product.id})">
          <div class="container-sm display:flex; va" style="background:yellow margin:10px">
              <img class="imgg" src="${product.thumbnail}">
              <h2>${product.title}</h2>
              <p>price: &#8358;  ${product.price}</p>
              <p>category: ${product.category}</p>

          </div>
              
      </div>
      `
      api.appendChild(productElement);
   }); 

  }).catch((err)=>{
      console.log(err);
  })

} 

fetchUsers()


 

 let phonesection  = document.getElementById("phonesection")
 function cum(){
   let newarry = products.filter(function (el){
    return el.category == "smartphones";
    
   })

   for(i=0; i<newarry.length; i++){
    let phones =  newarry [i]
    console.log(newarry)

   phonesection.innerHTML+= `<div class= "d-flex flex-wrap va tty " onclick="ity(${phones.id})">
   <img src="${phones.thumbnail}">
   <P class=" text-center"> ${phones.title}</p>
   <P class=" text-center"> &#8358; ${phones.price}</p>
   
   </div>
   `}
 }setTimeout(cum, 1000) 


 let fragrances = document.getElementById("fragrances")

  function frank(){
    let bird = products.filter(function (el){
        return el.category == "fragrances"
    })
    for(i=0; i<bird.length; i++){
        let bath = bird [i]
        console.log(bird)

      fragrances.innerHTML+= `<div class= "d-flex flex-wrap va tty  " onclick="ity(${bath.id})">
      <img src="${bath.images[1]}">
      <P class=" text-center"> ${bath.title}</p>
      <P class=" text-center"> &#8358; ${bath.price}</p>
      
      </div>`  
    }

  }setTimeout(frank, 1000)

  let put = document.getElementById("put")

  function comp(){
    let best = products.filter(function (el){
        return el.category == "laptops"
    })
    for(i=0; i<best.length; i++){
        let rest= best [i]
        console.log(best)

     put.innerHTML+= `<div class= "d-flex flex-wrap va tty  " onclick="ity(${rest.id})">
      <img src="${rest.thumbnail}">
      <P class=" text-center"> ${rest.title}</p>
      <P class=" text-center"> &#8358; ${rest.price}</p>
      
      </div>`   
    }
        
    

    




  }setTimeout(comp, 1000)


  function pickedItem(id){
    let product = products.find((el) => el.id === id);

    if (product){
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "product.html"
    }
  }
  function cartclick(){
    window.location.href = "cart.html"
  }
  
  function ity(id){
    let product = products.find((el) => el.id === id);

    if (product){
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "product.html"
    }
  }

  let dis = document.getElementById("dis")
  let disb = document.getElementById("disb")
  let calm = document.getElementById("calm")
  const getUser = JSON.parse(localStorage.getItem("regUser")) || [];
        if(getUser.email){
            dis.style.display="block"
            disb.style.display="none"
            calm.style.right = "320px"


        }
        let span = document.getElementById("span")
        span.innerHTML = `${getUser.email}`

        function logOut(){
          localStorage.removeItem("regUser")
          window.location.href = "index.html"
        }
        function signIn(){
          window.location.href = "login.html"
        }
        function updateCartCount() {
          let cart = JSON.parse(localStorage.getItem("cart")) || [];
          let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
          let calm = document.getElementById("calm");
          calm.textContent = totalQuantity;
      }
      
      updateCartCount();