import React, { Component } from 'react'


export class Newsitems extends Component {
  render() {
    let {title,desc,imageurl,newsurl,author,date}=this.props
    return (
    <div>
  
        <div className="card my-2 mx-3" style={{width: "22rem"}}>
                <img  src={imageurl?imageurl:"https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F628287ec-7995-4054-b3f6-e280bed2bf8f.png?source=next-opengraph&fit=scale-down&width=900"} style={{height:"300px"}}/>
                <div className="card-body">
                    <h5 className="card-title text-truncate">{title?title:"Title missing"}</h5>
                    <p className="card-text text-truncate">{desc?desc:"Description is missing"}</p>
                    <p className="card-text text-truncate"><small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl?newsurl:"Picture not found"} target='_blank' className="btn btn-primary">Read more</a>
                </div>
        </div>
        </div>
   
    )
  }
}


export default Newsitems