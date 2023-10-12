import '../css/addproduct.css'
import { useState , useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';

function AddProduct(props) {
    const {addProduct , watchList} = props
    const navigate = useNavigate()
    const id = parseInt(useParams().id)
    const [ form , setForm ] = useState({
        gender: 0 ,name:"",image:"",price:"",quantity:1,introduce:""
    })
    useEffect(()=>{
        if(id){
            const index = watchList.findIndex(item=>item.id==id)
            form.gender = watchList[index].gender
            form.name = watchList[index].name
            form.image = watchList[index].image
            form.price = watchList[index].price
            form.quantity = watchList[index].quantity
            form.introduce = watchList[index].introduce
        }
    },[id])
   
    
    function submitWatch(e){
        e.preventDefault()

        if (id) {
            addProduct({...form,id:id})
        }else{
            addProduct({...form})
        }
        
        navigate("/admin/table-products")
    }
    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    return (<>
        <form onSubmit={submitWatch} >
           
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Giới tính</label>
                <input type="text"  value={form.gender} name="gender" onChange={handleChange} placeholder='Giới tính' className="form-control border-new"  />
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
                <input type="text" value={form.quantity} name="quantity" onChange={handleChange} placeholder='Số Lượng' className="form-control border-new" />
            </div>
            <div className="mb-3 ">
                <label for="exampleInputPassword1" className="form-label">Giới thiệu Sản Phẩm</label>
                <textarea type="text" value={form.introduce} name="introduce" onChange={handleChange} placeholder='Giới thiệu sản phẩm' className="form-control border-new" />
            </div>
            <button type="submit" className="btn btn-primary">{isNaN(id) ? "Thêm Mới" : "Sửa Nội Dung"}</button>
        </form>

    </>)
}

export default AddProduct