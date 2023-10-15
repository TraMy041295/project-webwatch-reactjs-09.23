import { createContext , useEffect ,useState} from "react";
import {getProducts , getPayCusTom , deleteProduct , addProducts , editProduct} from '../api/Product';



export const AppContext = createContext({});

export const AppProvider = ({children}) =>{
    var [ watchList , setwatchList ] = useState([])
    const [ payCusTom , setPayCusTom] = useState([])

    useEffect(() => {
        // --------------- call product
        getProducts().then(res => {
            setwatchList(res.data)
          })
          .catch(res => {
            console.log(res)
          })
      }, [watchList])


      useEffect (()=>{
        // ------------- call đơn hàng
        getPayCusTom().then(res => {
          setPayCusTom(res.data)
        })
        .catch(res => {
          console.log(res)
        })
},[])


    return <AppContext.Provider value={{watchList , setwatchList ,payCusTom ,setPayCusTom}}>
        {children}
    </AppContext.Provider>

}