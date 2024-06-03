import React, { useState } from 'react';
import { Box, Button, Checkbox, Modal, TextField, Typography, colors } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import Cards from './Cards';
import { CircleCheck, CircleCheckBig, Clock, Heart, HeartIcon, LucideTrophy, Trophy } from 'lucide-react';

function Home() {
  const [openForm, setOpenForm] = useState(false);

  const [ boxHover, setBoxHover] = useState(null);

  const handleOpen = () => setOpenForm(true);

  const handleClose = () => setOpenForm(false);

  const setImage = () => {
    switch (boxHover) {
      case 1 :
        return img2 ;

        case 2 :
          return img3 ;
          
          case 3 :
            return img4 ;

            default :
            return img2 ;
    }
  }

  return (
    <div className='' style={{ overflowX: 'hidden'}}>
       <div className='grid place-items-center'>
        <div className=' mt-24 flex flex-col items-center sm:flex-row'>
          <div className='ml-4 grid'>
            <div className='text-pink-600 font-sans font-medium text-2xl text-start'>
              Award Winning
            </div>
            <div className='mt-5 text-black text-3xl font-sans font-bold'>
              Digital Marketing Agency
            </div>
            <div onClick={handleOpen} className='hover:cursor-pointer border bg-pink-600 text-white text-center h-12 p-2 w-36 border-pink-400 rounded-lg mt-4'>
              <Button className='cursor-pointer'>
                <h1 className='text-white font-bold text-md'>CONTACT US</h1>
              </Button>
            </div>
          </div>
          <img
            src={img1}
            alt='Digital Marketing'
            className='ml-7 mt-8 sm:mt-0 h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xs:min-h-64 sm:min-h-64 xl:max-w-3xl flex-shrink border rounded-sm'
          />
        </div>
      </div>
      
      <div className='grid'>
        <div className='mb-20 place-items-center text-center justify-center border border-white font-sans font-medium mt-8 w-full'>
          <h1 className='mt-16  text-pink-700 ml-10 text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl'>
            WHAT WE DO
          </h1>
          <h1 className='mt-8 font-bold  ml-10 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            SERVICES WE PROVIDE YOU
          </h1>
        </div>
      </div>
      
      <Cards />

      <Modal
        open={openForm}
        onClose={handleClose}
        
        
      >
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '60%', md: '50%', lg: '50%', xl: '50%' },
            height: 'auto',
            bgcolor: 'rgb(150, 150, 150 )',
            border: '  none',
            boxShadow: 24,
            p: 3,
            borderRadius: 3
          }}
        >
          <div className=' text-center border p-9 rounded-lg bg-white border-white'>
            <Typography id="contact-form-title" variant="h6" component="h2">
              Talk To Us!
            </Typography>
            <Box component="form" sx={{ mt: 4, p: 3 }}
            action="https://getform.io/f/jbwxzmna"
            method="POST"
            >
              <TextField
                fullWidth
                label="Work Email"
                name='email'
                type='email'
                margin="normal"
                variant='standard'
                required
              />
              <div className='flex flex-col sm:flex-row sm:gap-4'>
                <TextField
                  fullWidth
                  label="First Name"
                  name='first name'
                  type='name'
                  margin="normal"
                  variant='standard'
                  required
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  name='Last Name'
                  type='name'
                  margin="normal"
                  variant='standard'
                  required
                />
              </div>
              <div className='flex items-center mt-8'>
                <Checkbox required color='secondary' />
                <Typography className='text-gray-600 font-medium'>
                  I agree to the terms and conditions, and provide consent to send me communication!
                </Typography>
              </div>
              <button type='submit' className=' rounded-lg text-white font-bold font-mono border  mt-8 bg-red-500 border-pink-600 p-4 w-36'>
            Contact us
           </button>
            </Box>
          
          </div>

        </Box>

      </Modal>
<div className='mt-28 text-center'>
  <h1 className='text-red-600 font-medium text-xl '>
    OUR PROJECT
  </h1>
  <h1 className=' mt-7 text-gray-800 font-bold text-4xl'>
    WHY WE ARE BEST
  </h1>

      <div className=' w-full 2xs:grid sm:grid xs:grid lg:flex xl:flex place-items-center justify-center grid mt-24'>
      <img
  src={setImage()}
  alt='img2'
  className='ml-16 xs:ml-0 xs:w-full xs:max-w-xs  md:max-w-md lg:max-w-lg xl:max-w-xl sm:mt-0 h-96 w-max max-w-full sm:max-w-none flex-shrink border rounded-sm'
/>



      <div className='grid mt-4 '>
        <div onClick={() => setBoxHover(1)} className= ' hover:ease-in-out transition-all duration-500 text-gray-600 hover:text-white border-2 hover:bg-red-500 cursor-pointer bg-gray-200  h-40 w-80 ml-10 rounded-lg rounded-b-none border-gray-200'>
          <h1 className='  text-start m-3 ml-2 mt-5 font-medium text-2xl rounded-xl'>
            Best Quality Provided
          </h1>
          <h2 className='font-medium text-sm text-start m-4 ml-2'>
            We offer the  best quality products and services to our customers
          </h2>
        </div>
        <div onClick={() => setBoxHover(2)} className='hover:ease-in-out transition-all duration-500 text-gray-600 hover:text-white border-2 hover:bg-red-500 cursor-pointer bg-gray-200  h-40 w-80 ml-10 rounded-lg rounded-t-none rounded-b-none border-gray-200'>
          <h1 className='  text-start m-3 ml-2 mt-5 font-medium text-2xl rounded-xl'>
            Banking Services
          </h1>
          <h2 className='font-medium text-sm text-start m-4 ml-2'>
            We offer outstanding banking services to our customers 

          </h2>
        </div>
        <div onClick={() => setBoxHover(3)} className='hover:ease-in-out transition-all duration-500 text-gray-600 hover:text-white border-2 hover:bg-red-500 cursor-pointer bg-gray-200  h-40 w-80 ml-10 rounded-rounded-t-none border-gray-200'>
          <h1 className='  text-start m-3 ml-2 mt-5 font-medium text-2xl rounded-xl'>
             Wallet Services
          </h1>
          <h2 className='font-medium text-sm text-start m-4 ml-2'>
            We also provide wallet services so that our customers can mnage their wallets digitally          </h2>
        </div>
      </div>
      
      </div>
      
      </div>
      <div className=' mt-20 grid place-items-center justify-center'>
        <h1 className='text-lg font-medium text-pink-700'>
          Experts Growth
        </h1>
        <h1 className=' ml-2 mt-5 text-4xl text-gray-800 font-bold'>
          OUR GROWTH
        </h1>
      <div className='sm:grid xs:grid grid lg:flex xl:flex mt-20 bg-gray-100 place-items-center  justify-center '>
      <div className=' border-4 border-white cursor-pointer hover:bg-white hover:h-48 hover:ease-in-out transition-all duration-500 hover:w-60 flex flex-col items-center justify-center h-40 bg-gray-50  w-56 p-4 m-4 '>
  <Heart className='h-6 w-6 fill-pink-600 text-pink-600' />
  <h1 className='text-5xl p-2'>
    199 +
  </h1>
  <h1 className='font-medium text-lg text-gray-700'>
    Satisfied Customers
  </h1>
</div>
<div className=' border-4 border-white cursor-pointer hover:bg-white hover:h-48 hover:ease-in-out transition-all duration-500 hover:w-60 flex flex-col items-center justify-center h-40 bg-gray-50  w-56 p-4 m-4 '>
  <Clock className=' text-white h-6 w-6 fill-pink-600 ' />
  <h1 className='text-5xl p-2'>
    1591 +
  </h1>
  <h1 className='font-medium text-lg text-gray-700'>
    Days Of Operation
  </h1>
</div>
<div className=' border-4 border-white cursor-pointer hover:bg-white hover:h-48 hover:ease-in-out transition-all duration-500 hover:w-60 flex flex-col items-center justify-center h-40 bg-gray-50  w-56 p-4 m-4 '>
  <CircleCheck className=' text-white h-6 w-6 fill-pink-600' />
  <h1 className='text-5xl p-2'>
    283+
  </h1>
  <h1 className='font-medium text-lg text-gray-700'>
    Projects Completed
  </h1>
</div>
<div className=' border-4 border-white cursor-pointer hover:bg-white hover:h-48 hover:ease-in-out transition-all duration-500 hover:w-60 flex flex-col items-center justify-center h-40 bg-gray-50  w-56 p-4 m-4 '>
  <Trophy className=' text-gray-400 h-6 w-6 fill-pink-600 ' />
  <h1 className='text-5xl p-2'>
    75+
  </h1>
  <h1 className='font-medium text-lg text-gray-700'>
    Awards Won
  </h1>
</div>

       
      
      </div>
      </div>
    </div>
  );
}

export default Home;
