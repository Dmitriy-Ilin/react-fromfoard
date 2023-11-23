import React from 'react'

const Advantages = () => {
  return (
    <section className='advantages-section' id='advantages'>
        <div className='container'>
            <h2 className='advantages__title'>Наши преимущества</h2>
            <div className='advantages-wrapper'>
                <div className='advantages-item'>
                    <img className='advantages-item__img' src='./src/assets/Group1.png' alt='advantages' loading='lazy'/>
                    <div className='advantages-item-container'>
                        <h3 className='advantages-item__title'>Растоможка груза</h3>
                        <p className='advantages-item__text'>
                            Мы берём на себя все формальности и бумажную
                            волокиту, связанную с растаможкой груза
                        </p>
                    </div>             
                </div>
                <div className='advantages-item'>
                    <img className='advantages-item__img' src='./src/assets/Group7.png' alt='advantages' loading='lazy'/>
                    <div className='advantages-item-container'>
                        <h3 className='advantages-item__title'>Надёжная упаковка</h3>
                        <p className='advantages-item__text'>
                            Все товары упаковываются нашими специалистами с
                            особым вниманием к деталям, гарантируя, что они 
                            дойдут в безопасности и в отличном состоянии
                        </p>
                    </div>
                </div>
                <div className='advantages-item'>
                    <img className='advantages-item__img' src='./src/assets/Group8.png' alt='advantages' loading='lazy'/>
                    <div className='advantages-item-container'>
                        <h3 className='advantages-item__title'>Быстро и выгодно</h3>
                        <p className='advantages-item__text'>
                            Мы предлагаем быструю и выгодную доставку, чтобы вы могли 
                            насладиться покупками как можно скорее.
                        </p>
                    </div>
                </div>
                <div className='advantages-item'>
                    <img className='advantages-item__img' src='./src/assets/Group4.png' alt='advantages' loading='lazy'/>
                    <div className='advantages-item-container'>     
                        <h3 className='advantages-item__title'>Удобный сервис</h3>
                        <p className='advantages-item__text'>
                            Стремимся сделать процесс доставки максимально удобным для вас, 
                            чтобы опыт остался приятным и беззаботным
                        </p>
                    </div>
                </div>
                <div className='advantages-item'>
                    <img className='advantages-item__img' src='./src/assets/Group5.png' alt='advantages' loading='lazy'/>
                    <div className='advantages-item-container'>
                        <h3 className='advantages-item__title'>Прозрачность работы</h3>
                        <p className='advantages-item__text'>
                            Мы предоставляем полный контроль над каждым этапом доставки, 
                            от момента заказа до момента прибытия заказа
                        </p>
                    </div>
                </div>
                <div className='advantages-item'>
                    <img className='advantages-item__img' src='./src/assets/Group6.png' alt='advantages' loading='lazy'/>
                    <div className='advantages-item-container'>
                        <h3 className='advantages-item__title'>Страхование груза</h3>
                        <p className='advantages-item__text'>
                            Наше страхование обеспечивает полную защиту и покрытие почти 
                            все неприятные и неожиданные ситуации
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Advantages