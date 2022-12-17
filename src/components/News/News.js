import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from '../NewsItem/NewsItem'
import './News.css'
import { Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

const News = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const res =  await axios.get('https://newsapi.org/v2/everything?q="concrete"&searchIn=title&pageSize=100&apiKey=5868a3707d1d4b94bab2b4fa075f20e3')
            console.log(res)
            setArticles(res.data.articles)
        }
        getArticles()
    }, [])
  return (

    <Container>
        <h1 className='news_h1'>Concrete in the News!</h1>
        <Row>
            {articles.map(article => {
            return(
                <NewsItem title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage}  />
            )
            })}
        </Row>
    </Container>

  )
}

export default News

