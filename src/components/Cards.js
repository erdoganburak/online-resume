import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Don't miss the latest news!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="/images/ml.jpg"
                            text="You can read my latest academic paper on Procedia Computer Science about the use of computational intelligence methods for pain assessment"
                            label='Academic'
                            path='https://www.sciencedirect.com/science/article/pii/S187705092030541X?via%3Dihub'
                            isURL={true}
                        />
                        <CardItem
                            src="/images/karadeniz.jpg"
                            text="Watch our karadeniz experience back in 2019"
                            label='Travel'
                            path='https://www.youtube.com/watch?v=PwxLbsxvtzs&ab_channel=AtasayUgras'
                            isURL={true}
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="/images/producer.jpg"
                            text="Check out latest music I released on Sound Cloud"
                            label='Music'
                            path='https://soundcloud.com/aminorblue'
                            isURL={true}
                        />
                        <CardItem
                            src="/images/github.png"
                            text="Check out my projects on GitHub"
                            label='Development'
                            path='https://github.com/erdoganburak'
                            isURL={true}
                        />
                        <CardItem
                            src="/images/linkedin.jpg"
                            text="Follow me on LinkedIn"
                            label='Career'
                            path='https://www.linkedin.com/in/burak-erdo%C4%9Fan-4a553a9b/'
                            isURL={true}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
