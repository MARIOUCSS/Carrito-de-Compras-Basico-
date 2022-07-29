//Segunda Modificacion
const ContenedorCards = document.querySelector("#container-cards");
const SeleccionarProductos = document.querySelector("#select-products");
const ModalFruta = document.querySelector(".modal");
const btncrearFruta = document.querySelector("#btn-create");
const CerrarModal = document.querySelector("#close-modal");
const NuevoNombreFruta = document.querySelector("#new-product");
const NuevoPrecio = document.querySelector("#new-price");
const NuevaImagen = document.querySelector("#new-image");
const BtnnuevoF = document.querySelector("#btn-new-create");
const Btnfiltar = document.querySelector("#filterXPrice");
let idFruta = 0;
let imgSeleccionada = " ";
window.addEventListener("load", Seleccionarlista);
SeleccionarProductos.addEventListener("change", renderizarF);
btncrearFruta.addEventListener("click", MostarModal);
CerrarModal.addEventListener("click", cerrarModal);
BtnnuevoF.addEventListener("click", CrearProducto);
NuevaImagen.addEventListener("change", ImportarImg);
Btnfiltar.addEventListener("change", FiltrarFruta);
function FiltrarFruta(event) {
    const responseFilter = event.target.value === 'Menores a 2'
    ? fruits.filter( fruit => fruit.price < 2)
    : event.target.value === 'Entre 2 y 4'
    ? fruits.filter( fruit => fruit.price >= 2 && fruit.price <= 4)
    : event.target.value === 'Mayores a 4'
    ? fruits.filter( fruit => fruit.price > 4)
    :event.target.value === 'Todos'?
    fruits.map( fruit =>{return fruit}):
    event.target.value === ''?
    LimpiarCard():null;
    ContenedorCards.innerHTML = '';
    responseFilter.map( fruit => CrearCards(fruit));
}
function LimpiarCard(){
    ContenedorCards.innerHTML="";

}
function ImportarImg(e) {
  const curreImg = e.target.files[0];
  const objectUrl = URL.createObjectURL(curreImg);
  imgSeleccionada = objectUrl;
}
function CrearProducto() {
  idFruta++;
  const nombre = NuevoNombreFruta.value;
  const precio = NuevoPrecio.value;
  const id = idFruta;
  const NuevaFruta = {
    id: idFruta,
    product: nombre,
    price: precio,
    image: imgSeleccionada,
    quantity: 1,
  };
  fruits.push(NuevaFruta);
  
  Seleccionarlista();
  actualizas();
  ModalFruta.classList.remove("Mostrar");
}
function actualizas(){
  fruits.map( fruit => CrearCards(fruit));  
}
function cerrarModal() {
  ModalFruta.classList.remove("Mostrar");
}
function MostarModal() {
  ModalFruta.classList.add("Mostrar");
}
function renderizarF() {
    ContenedorCards.innerHTML="";
  fruits.map((fruta) => {
    return fruta.product === SeleccionarProductos.value
      ? CrearCards(fruta)
      : null;
  });
}
function Seleccionarlista() {
  SeleccionarProductos.innerHTML = "";
  fruits.map((fruta) => {
    const opcion = document.createElement("option");
    opcion.value = fruta.product;
    opcion.textContent = fruta.product;
    //  opcion.setAttribute("prueba",fruta.id);
    SeleccionarProductos.appendChild(opcion);
  });
  actualizas();
}
function CrearCards(fruta) {
//   ContenedorCards.innerHTML = "";
  const { id, product, price, image, quantity } = fruta;
  const card = document.createElement("div");
  card.classList.add("card-product");

  const imagenF = document.createElement("img");
  imagenF.setAttribute("src", image);
  imagenF.setAttribute("alt", `${id}-${product}`);
  imagenF.classList.add("img-product");

  const nombreF = document.createElement("p");
  nombreF.textContent = product;
  nombreF.classList.add("name-product");

  const precioF = document.createElement("p");
  precioF.textContent = price;
  precioF.classList.add("price-product");

  const btnadd = document.createElement("button");
  btnadd.setAttribute("id", id);
  btnadd.classList.add("btn-add");
  btnadd.textContent = "Agregar Carrito";

  card.appendChild(imagenF);
  card.appendChild(nombreF);
  card.appendChild(precioF);
  card.appendChild(btnadd);
  ContenedorCards.appendChild(card);
}
