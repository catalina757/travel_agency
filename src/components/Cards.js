import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1521706862577-47b053587f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YW1hem9uaWFuJTIwanVuZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1550583088-ffe97305e2c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1501771924607-209f42a6e7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNhaWxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1635986340154-05d265c93217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG9wJTIwb2YlMjB0aGUlMjBtb3VudGFpbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              text='Experiences at the top of the mountain'
              label='Adrenaline'
              path='/products'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1517176642928-dfc2da661b3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2FoYXJhJTIwdHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
