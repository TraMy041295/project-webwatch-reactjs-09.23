import "../Css/login.css"
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  Link,
} from "react-router-dom"


const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}
function Login(props) {
  const { get_login_result } = props
  const navigate = useNavigate()
  const [isExpand, setExpand] = useState("false")
  const [account, setAccount] = useState([
    { name: "mynguyen121295@gmail.com", password: 123456 },
    { name: "mynguyen121296@gmail.com", password: 123456 }
  ])
  const [form, setForm] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState({
    username: "",
    password: "",
  })

  function handleSubmit(e) {
    e.preventDefault();
    const errorClone = {
      username: "",
      password: "",
    }
    var haveError = false
    if (!form.username) {
      errorClone["username"] = "Vui lòng điền username"
      haveError = true
    }
    else if (!REGEX.email.test(form.username)) {
      errorClone["username"] = "Không đúng định dạng email"
      haveError = true
    }
    if (!form.password) {
      errorClone["password"] = "Vui lòng điền password"
      haveError = true
    }

    setError(errorClone)
    if (haveError) return

    for (let item of account) {

      if (form.username == item.name && form.password == item.password) {
        haveError = false
        get_login_result(haveError)
        alert("Đăng nhập thành công")
        navigate("/admin/tableproducts")
        return
      }
    }
    alert("Đăng nhập thất baị")
  }
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  function expand() {
    if (isExpand == "false") {
      setExpand("true")
    }
    else {
      setExpand("false")
    }
  }

  function hander() {
    expand()
  }
  return <div className="login">

    <button onClick={expand} className="admin_button" >Login</button>
    <div className='modal' style={isExpand == "false" ? { display: "none" } : { display: "block" }}>
      <form onSubmit={handleSubmit} className="modal-content animate" >


        <div className="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" value={form.username} placeholder="Enter Username" name="username" onChange={handleChange} />
          {(error.username !== "") ? <p style={{ color: "red" }} >{error.username}</p> : null}

          <label for="psw"><b>Password</b></label>
          <input type="password" value={form.password} placeholder="Enter Password" name="password" onChange={handleChange} />
          {(error.password !== "") ? <p style={{ color: "red" }} >{error.password}</p> : null}


          <button className="admin_button" >Login</button>
        </div>
        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button"  onClick={hander} className="cancelbtn admin_button">Cancel</button>
        </div>
      </form>

    </div>
  </div>
}

export default Login