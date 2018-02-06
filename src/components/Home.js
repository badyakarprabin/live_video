import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='home-screen'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active" style={{ height: '400px' }}>
              <img src='http://letzgro.net/wp-content/uploads/2016/08/Image3.jpg' alt='test' />
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div >

        <div className="container text-center">
          <h3>TODO : Add 3 column describing what app is made for.</h3><br />
          <div className="row">
          </div>
        </div> <br />
      </div >
    );
  }
}

export default Home;
