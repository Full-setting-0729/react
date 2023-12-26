import { Link } from "react-router-dom";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import ExampleCarouselImage1 from '../assets/k.png';
import ExampleCarouselImage2 from '../assets/l.png';
import ExampleCarouselImage3 from '../assets/m.png';
import Card from 'react-bootstrap/Card';
import submitImage from '../assets/search.png';
import adimg1 from '../assets/ok.jpg';

import '../Main.css'
function Main() {
    const htag = ['인스타','유튜브'];
    const like = ['♡','♥'];
    const [x, setX] = useState(0);

    const switchLike = () => {
        setX((prevX) => (prevX === 0 ? 1 : 0));
    };

  return (
    <div className='Main_div'>   
        {/*검색바*/}
        <form> 
            <input placeholder='검색' className='searchbar' type='text' />
            <button type='submit' className='searchsubmit'>
            <img className='searchsubmit_img' src={submitImage} alt="Submit" />
            </button>
        </form>

        {/*슬라이드 배너 광고*/}
        <Carousel className='slide_banner' variant='dark' interval={'3000'}>
            <CarouselItem className='banner_ad' >
                <img className='banner_img' alt="ad" src = {ExampleCarouselImage1} /> 
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem className='banner_ad'>
                <img className='banner_img' alt="ad" src = {ExampleCarouselImage2} /> 
                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem className='banner_ad' >
                <img className='banner_img' alt="ad" src = {ExampleCarouselImage3} /> 
                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>

        {/*게시글 리스트*/}
        <div className="row">
        <Card className='Card col-md-6'>
            <Link to={'/post'}>
                <Card.Img alt ='user_img' src={adimg1} />
            </Link>
            <Card.Body className='card_body'>
                <Card.Text>
                    <Link to={'/post'}><p className='post_title' >안녕하세요</p></Link>
                    
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' className='cardimg' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' className='cardimg' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' className='cardimg' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' className='cardimg' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className='Card col-md-6'>
            <Card.Img alt ='user_img' src={adimg1} />
            <Card.Body className='card_body'>
                <Card.Text>
                    <p className='post_title' >안녕하세요</p>
                    <p className='h_tag'>
                    {htag.map((f, index) => (
                        <span key={index}>#{f}</span>
                    ))}
                    </p>
                    <button className='like_button' onClick={switchLike}>{like[x]}</button>
                </Card.Text>
            </Card.Body>
            </Card>
            
        </div>


    </div>
    
  );
}

export default Main;