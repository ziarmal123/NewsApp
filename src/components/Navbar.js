import React, { Component,useState } from 'react'
import { Link } from 'react-router-dom'



const  Navbar =(props)=> {
    const [valuedata, setvalue] = useState('a')
    const searchValue = (e)=>{
        setvalue(e.target.value)
        
    }
    const backdata =()=>{ //
        props.Valuefunction(valuedata)
    } ////Search Functions is Above
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand text-success" to="/">News Times</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Fun News
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>

                        </ul>

                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            General News
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/business">Business</Link></li>
                            <li><Link className="dropdown-item" to="/health">Health</Link></li>
                            <li><Link className="dropdown-item" to="/">Iran</Link></li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About</Link>
                    </li>

                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" value={valuedata} onChange={searchValue} placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" onClick={backdata} type="button">Search</button>
                </form>
            </div>
        </div>
    </nav>
   
    </>


)
}

export default Navbar