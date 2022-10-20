import React, { Component } from 'react'
import '../Form/front.css'
export default class FrontPage extends Component {
  render() {
    return (
<div className='page'> 
<nav>
    <div className="menu">
      <div className="logo">
        <a href="#"> Anime World 😍 </a>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="https://www.imdb.com/list/ls055625034/">Collections</a></li>
        <li><a href="https://www.imdb.com/list/ls058654847/">Top Rated</a></li>
        <li><a href="https://www.polygon.com/22594587/best-anime-2021">Latest</a></li>
        <li><a href="https://www.animenewsnetwork.com/">News</a></li>
      </ul>
    </div>
  </nav>
  <div className="img"></div>
  <div className="center">
    <div className="title"> Watch Your Favourite Anime </div>
    <div className="sub_title">Naruto Shippuden 🦊</div>
  </div>
</div>
    )
  }
}
