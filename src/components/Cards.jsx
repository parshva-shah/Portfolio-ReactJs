import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Email Authentication System in which user enters his details includeing firstname, lastname, email and sends a token on the email address which the user has to enter to verify the email address.'
              label='Node Js'
              to='www.google.com'
              
            />
            <CardItem
              src='images/img-2.jpg'
              text='Facebook and Messenger Clone is a Social Media Web Application in which the user can post a pic with a status which can be seen by all and can chat on the Messenger with other people'
              label='React Js'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://media-exp1.licdn.com/dms/image/C4D22AQEFZSu8I5g0jg/feedshare-shrink_2048_1536/0/1608788142071?e=1614816000&v=beta&t=_q9KT0QgGSwLr-jhV4cU0MeyNEkwwSn73FNumMEiijM'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              
            />
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              
            />
            </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
