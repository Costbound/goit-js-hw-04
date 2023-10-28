function isEnoughCapacity(products, containerSize) {
    let totalProducts = 0;
    const productsQuantity = Object.values(products);
    for (const product of productsQuantity) {
        totalProducts += product;
    }
    return totalProducts > containerSize ? false : true;
}