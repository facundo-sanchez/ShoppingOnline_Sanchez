/*   Sitio web no mobile                   */ 
/*                                         */ 
/*                                         */ 
/*                                         */ 

Item Details => Muestra la informacion de un item seleccionado y la opcion de agregarlo al carrito

Item List => Muestra la informacion de los items llamados desde la api, se vincula tambien con el llamado a una categoria

Item Checkout => Verificacion de la compra del usuario, se ve un listado de los productos del carrito con el importe total

ShoppingContainer => Cart de la pagina, se puede modificar el item para agregar/eliminar stock, eliminar items y terminar compra

layout => footer and header

loading => Spinner para la animacion de carga libreria =>  "react-icons": "^4.3.1"

Libreria CSSTransition => "react-transition-group": "^4.4.2" para la animacion fade de la pagina (se uso para el despliegue de la categoria)

Routes => rutas de la pagina.

CartContext => logica del carrito (contador de productos,calcular total,agregar/eliminar stock de un producto,eliminar item, terminar compra)

hooks => useProductFirebase => traer todos los productos  (getProduct) /traer un producto por id  (getProductId) /  enviar formulario de compra (useFormCheckout)


/*Se uso el localStorage para guardar el carrito del usuario*/