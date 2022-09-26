//récupération de la chaine de requete dans l'url
let queryString_url_id = window.location.search;
let idUrl = new URLSearchParams(queryString_url_id);
let productId = idUrl.get('id');

  //recupération de l'api par rapport a l'id du produit
fetch("http://localhost:3000/api/products/" + productId)
.then((response) => response.json())
.then((product) => {
    //pour que le titre de la page soit celui associés a l'id
    document.title = product.name;

    // ajout des cards sur la page produit 
    document.getElementsByClassName("item__img")[0].innerHTML =
        `<img src="${product.imageUrl}" alt="${product.altTxt}">`; 
        //récupération du nom de la page associé à l'id
    document.getElementById("title").innerHTML = product.name;
        //récupération du prix de l'objet
    document.getElementById("price").innerHTML = product.price;
        //récupération de la description de l'objet
    document.getElementById("description").innerHTML = product.description;
});