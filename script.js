let products = {
    data: [
      {
        productName: "Fanta",
        category: "Soda",
        price: "2",
        image: "download__2_-removebg-preview (1).png",
      },
      {
        productName: "G FUEL",
        category: "Energy",
        price: "1.99",
        image: "images__2_-removebg-preview.png",
      },
      {
        productName: "Nescafe",
        category: "cofee",
        price: "5",
        image: "download__3_-removebg-preview (1).png",
      },
      
      {
        productName: "Dr Pepper",
        category: "Soda",
        price: "3.99",
        image: "download-removebg-preview (3).png",
      },
      {
        productName: "Reese's",
        category: "cofee",
        price: "4",
        image: "images__1_-removebg-preview.png",
      },
      {
        productName: "Mountain Dew",
        category: "Soda",
        price: "2.99",
        image: "images__3_-removebg-preview (1).png",
      },
      {
        productName: "Nescafe latte",
        category: "cofee",
        price: "8",
        image: "images-removebg-preview (2).png",
      },
      {
        productName: "Hell",
        category: "Energy",
        price: "2",
        image: "download__4_-removebg-preview (1).png",
      },
    {
      productName: "Pepsi",
      category: "Soda",
      price: "3",
      image: "download__5_-removebg-preview (3).png",
    },
    ],
  };
  for (let i of products.data) {
  
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    //image divv
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container");
    //product Name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //card price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards..
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching cards
        cards[index].classList.remove("hide");
      } else {
        //hide other cards
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };