import instance from "./ConFig";

const getProducts = () => {
    return instance.get("/Listwatch")
};
const deleteProduct = (id) => {
    return instance.delete(`/Listwatch/${id}`)
};
const addProducts = (product) => {
    return instance.post(`/Listwatch`,product)
};
const editProduct = (product) => {
    return instance.put(`/Listwatch`,product)
};
const getPayCusTom = () => {
    return instance.get("/Liststudent")
}
export {getProducts ,getPayCusTom , deleteProduct ,addProducts ,editProduct };