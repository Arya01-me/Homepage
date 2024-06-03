import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './global.css'

function Cards() {
  const cards = [
    {
      image: 'https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399'
    },
    {
    
    
      image: 'https://www.founderjar.com/wp-content/uploads/2022/05/Trending-Products-to-Sell-Online.jpg'
    },
    {
      image: 'https://www.doctorrogers.com/cdn/shop/articles/Products_dontneed_thumbnail.png?v=1709136091'
    },
    {
      image: 'https://techbuild.africa/wp-content/uploads/2023/03/non-custodial-vs-custodial-1-.png'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
  
    slidesToScroll: 1,
    customPaging: i => (
      <div className="dot">
        <span>{i + 1}</span>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box sx={{ width: '80%', margin: '0 auto', p: 4 }}>
      
      
      <Slider {...settings}>
        
        {cards.map
        ( ( card, index ) => (
          
          <Card key={index} 
          sx={{ position: 'relative', maxWidth: 300, minWidth: 250, height: 400, m: 2 , overflow: 'hidden', cursor: 'pointer' }}>
           
            <CardMedia
             
             component="img"
              image={card.image}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            <Box
            
            className="overlay"
            
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
            
                width: '100%',
                height: '100%',
                bgcolor: 'rgb(199, 8, 81)', 
            
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
            
                transition: 'opacity 0.5s ease-in-out',
                '&:hover': { opacity: 1 }
              }}
            >
            
              <div className='grid place-items-center'>
            
                <h1 className=' mt-20 border-white rounded-lg w-28  p-2 border-4 text-white text-4xl font-bold'>
            
                  &lt; / &gt;
            
                </h1>
            
            
                <Typography
                  sx={{ textAlign: 'center', color: 'white', marginBottom: '10px', marginTop: '20px' }}
                  variant="h5">Web Development</Typography>
                
                <Typography
                  sx={{ fontFamily: '', fontWeight: 'medium', color: 'white', marginBottom: '0px', fontSize: '12px' }}
                  variant="h5">We Offer A Lot Of Products and Services</Typography>
                
                <button className='hover:bg-gray-900 hover:border-4 hover:border-white border-white hover:text-white hover:ease-in-out transition-all duration-500 p-4 m-16 border text-gray-600 font-bold bg-white w-44  rounded-xl  mt-28 '>
                
                  <a href='https://www.fylehq.com/'
                   className=''> Read More
                 </a> 

                </button>
              </div>
            
            </Box>
          </Card>
    ))}

      </Slider>
    </Box>
    
  );
}

export default Cards;
