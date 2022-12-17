import React from 'react'
import './NewsItem.css'
import Card from 'react-bootstrap/Card';

const NewsItem = ({title, description, url, urlToImage}) => {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text><a href={url}> {title}</a></Card.Text>
      </Card.Body>
    </Card>



    // <div className='news_app'>
    //     <div className='news_item'>
    //         <img className='news_img' src={urlToImage} alt='url'/>
    //         <h3><a href={url}> {title}</a></h3>
    //         <p> {description} </p>
    //     </div>    
    // </div>
  )
}

export default NewsItem
