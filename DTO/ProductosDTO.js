class ProductoDTO {

    constructor(productoData) {
        this.id = productoData._id;
        this.title = productoData.title;
        this.price = productoData.price;
        this.thumbnail = productoData.thumbnail;
    }

    getId() {
        return this.id;
    }

    getNombre() {
        return this.title;
    }

    getPrecio() {
        return this.price;
    }

    getThumbnail() {
        return this.thumbnail
    }
}

module.exports = ProductoDTO;