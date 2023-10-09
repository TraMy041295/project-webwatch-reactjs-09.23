import instance from "./ConFigAxios";

const getProducts = () => {
    return instance.get("/Listwatch")
};
const getPerPage = (pageNumber) => {
    return instance.get(`/Listwatch?page=${pageNumber}&limit=10`)
};
const deleteProduct = (id) => {
    return instance.delete(`/Listwatch/${id}`)
};
const addProducts = (product) => {
    return instance.post(`/Listwatch`,product)
};
const editProduct = (product) => {
    return instance.put(`/Listwatch/${product.id}`,product)
};
const getPayCusTom = () => {
    return instance.get("/Liststudent")
}
export {getProducts ,getPayCusTom , deleteProduct ,addProducts ,editProduct ,getPerPage};