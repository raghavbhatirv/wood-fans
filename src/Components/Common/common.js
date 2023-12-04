export function filterByCategoryAndNameLength(category, setCurrentProducts, productData) {
    if (!productData) {
        return;
    }

    const filteredData = productData.filter(
        (item) =>
            item?.category?.toLowerCase() === category?.toLowerCase() &&
            item.name.length <= 20
    );

    for (let i = filteredData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredData[i], filteredData[j]] = [filteredData[j], filteredData[i]];
    }

    const randomProducts = filteredData.slice(0, 4);
    setCurrentProducts(randomProducts);
}
