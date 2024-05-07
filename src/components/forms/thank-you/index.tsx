import React from 'react';
import { Helmet } from 'react-helmet';
import Back from '/static/img/back-img.svg';
import CircleCheck from '/static/img/circle-check.svg';

const ThankYou = () => {

  return (
    <React.Fragment>
      <Helmet>
        <title>Thank You</title>
      </Helmet>
      <div className='title-container'>
        <div className='text-center cursor-pointer pt-56'>
          <img src={Back} className='mb-8'  />
        </div>
        <h2 className='main-h text-center mb-32'>That's all, thank you</h2>
      </div>
      <div className='bg-white-mobile'>
        <div className='text-center'>
          <img src={CircleCheck} className='mb-32' />
        </div>
        <div className='text-center'>
          <p className='mb-32'>Your information will be sent securely to Dr. Smith.</p>
          <p className='mb-2'>If you have questions, please contact your provider directly:</p>
          <p className='theme-clr'>somemail@mail.com</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThankYou;