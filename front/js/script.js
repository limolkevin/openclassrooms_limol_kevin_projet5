  //recupération de l'api
fetch("http://localhost:3000/api/products")
.then(reponse=> reponse.json())
.then((products) => {
  
    // Boucle d'envoi des produits dans le dom
    for (let i=0; i<products.length; i++){
      //chemin vers l'élément de récéption
      document.getElementById("items").innerHTML+=
      //Elément du dom avec récupération api entre ''
      `<a href="./product.html?id=${products[i]._id}">
        <article>
          <img src="${products[i].imageUrl}" alt="${products[i].altTxt}"> 
          <h3 class="productName">${products[i].name}</h3>
          <p class="productDescription">${products[i].description}</p>
        </article>
      </a>`;
      };
    });

