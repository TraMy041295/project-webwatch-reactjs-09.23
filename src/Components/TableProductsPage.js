import "../Css/tableproducts.css";
import SeeQuick from './SeeQuick'
import { useNavigate , useParams , useSearchParams } from 'react-router-dom';
import { useState , useMemo } from 'react'



function TableProductsPage(props) {
    const { watchList ,deleteApp } = props
    const navigate = useNavigate()
    const [ searchParams , setsearchParams ] = useSearchParams()
    const [ name , setName ] = useState("")
    const [ price , setPrice ] = useState("")

    const filterWatch = useMemo(()=>
 (name == "" && price == "") ? watchList : 
    watchList.filter(item=>item.name.includes(searchParams.get("name"))).filter(item=>item.price.toString().includes(searchParams.get("price")))
    ,[watchList, name , price ,searchParams])

    function deleteProduct(id){
        deleteApp(id)
    }
    function editProduct(item){
        navigate(`/admin/editbook/${item.id}`)
    }
    function searchWatch(e){
        e.preventDefault()
        setsearchParams({name:name,price:price})
    }
    return (<>
    <div className="table-products">
        <form onSubmit={searchWatch}>
        <div className="search-table-product row">
  <div className="col-md-5">
    <input type="text" value={name} onChange={e=>{setName(e.target.value)}} placeholder="Name" className="form-control" />
  </div>
  <div className="col-md-5">
    <input type="text" value={price} onChange={e=>{setPrice(e.target.value)}} placeholder="Price" className="form-control" />
  </div>
  <div className="col-md-2">
  <button type="submit" className="btn btn-primary">Tìm Kiếm</button>
  </div>
  </div>
</form>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">GIỚI TÍNH</th>
                    <th scope="col">NAME</th>
                    <th scope="col">IMAGE</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">ACTIVE</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {filterWatch.map(item =>
                    <tr>
                    <th scope="row">{item.id}</th>
                    <th scope="row">{item.gender == 1 ? "nam " : " nữ"}</th>
                    <td>{item.name}</td>
                    <td><img src={item.image} style={{width:100}} /></td>
                    <td>{item.price}</td>
                    <button type="button" className="btn btn-warning" onClick={()=>editProduct(item)}>Sửa</button>
                    <button type="button" className="btn btn-danger" onClick={()=>deleteProduct(item.id)} >Xoá</button>
              <button type="button" className="btn btn-success"><SeeQuick id={item.id} watchList={watchList} /></button>
                  </tr>
                    )}
            </tbody>
        </table>

</div>
    </>)
}

export default TableProductsPage