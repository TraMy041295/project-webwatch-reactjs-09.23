import "../Css/seequick.css"
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
    Link,
} from "react-router-dom"

function SeeQuick(props) {
    
    const { id, watchList } = props
    const [isExpand, setExpand] = useState("false")
    const [index , setIndex ] = useState(0)
    function expand() {
        const indexof = watchList.findIndex(item=>item.id ===id)
        setIndex(indexof)
        
        if (isExpand == "false") {
            setExpand("true")
        }
        else {
            setExpand("false")
        }
    }
    function hander() {
        setExpand("false")
        setIndex(0)
    }
    return <div className="see_quick">

        <a className="see_quick_button" onClick={expand} >Xem nhanh</a>
        <div className='modal' style={isExpand == "false" ? { display: "none" } : { display: "block" }}>
            <div className="card row">
                <img src={watchList[index].image} alt="Denim Jeans" />
                <h3><b>{watchList[index].name}</b></h3>
                <p>Giá {watchList[index].price}</p>
                <p>Giới tính : {(watchList[index].gender == 1) ? "Nam" : "Nữ"}</p>
                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" onClick={hander} className="cancelbtn">Cancel</button>
                </div>
            </div>
        </div>
    </div>
}

export default SeeQuick