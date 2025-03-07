import React from 'react';


function Carousel() {
  return (
    <div id="mainCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"></button>
      </div>
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" className="d-block w-100" alt="New Arrivals" />
          <div className="carousel-caption d-none d-md-block">
            <h2>New Arrivals</h2>
            <p>Check out our latest products</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" className="d-block w-100" alt="Sale Items" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Sale Items</h2>
            <p>Great deals on selected products</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" className="d-block w-100" alt="Popular Products" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Popular Products</h2>
            <p>See what other customers are buying</p>
          </div>
        </div>
      </div>
      
      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;