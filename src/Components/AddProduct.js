import '../Css/addproduct.css'
import { useState , useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';

function AddProduct(props) {
    const {addProduct , watchList} = props
    const navigate = useNavigate()
    const id = parseInt(useParams().id)
    var [ form , setForm ] = useState({
        gioitinh:0 ,image:"",name:"",price:"",soluong:1,gioithieu:""
    })
    if(id){
        const index = watchList.findIndex(item=>item.id==id)
        form = watchList[index]
    }
 
    function submitWatch(e){
        e.preventDefault()
        if (id) {
            addProduct({...form,id:id})
        }else{
            addProduct({...form})
        }
        
        navigate("/admin/tableproducts")
    }
    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    return (<>
        <form onSubmit={submitWatch} >
            {/* <div className="mb-3 add_product ">
                <label for="exampleInputEmail1" className="form-label">ID</label>
                <input type="text" value={form.id} placeholder='ID' className="form-control border-new"  />
            </div> */}
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Giới tính</label>
                <input type="text"  value={form.gioitinh} name="gioitinh" onChange={handleChange} placeholder='Giới tính' className="form-control border-new"  />
            </div>
            <div className="mb-3 ">
                <label for="exampleInputPassword1" className="form-label">Name</label>
                <input type="text" value={form.name} name="name" onChange={handleChange} placeholder='Name' className="form-control border-new"  />
            </div>
            <div className="mb-3 ">
                <label for="exampleInputPassword1" className="form-label">Image</label>
                <input type="text" value={form.image} name="image" onChange={handleChange} placeholder='Image' className="form-control border-new"  />
            </div>
            <div className="mb-3 ">
                <label for="exampleInputPassword1" className="form-label">Price</label>
                <input type="text" value={form.price} name="price" onChange={handleChange} placeholder='Price' className="form-control border-new" />
            </div>
            <div className="mb-3 ">
                <label for="exampleInputPassword1" className="form-label">Số Lượng</label>
                <input type="text" value={form.soluong} name="price" onChange={handleChange} placeholder='Số Lượng' className="form-control border-new" />
            </div>
            <div className="mb-3 ">
                <label for="exampleInputPassword1" className="form-label">Giới thiệu Sản Phẩm</label>
                <textarea type="text" value={form.gioithieu} name="gioithieu" onChange={handleChange} placeholder='Giới thiệu sản phẩm' className="form-control border-new" />
            </div>
            <button type="submit" className="btn btn-primary">{isNaN(id) ? "Thêm Mới" : "Sửa Nội Dung"}</button>
        </form>

    </>)
}

export default AddProduct