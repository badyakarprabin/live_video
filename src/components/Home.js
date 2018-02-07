import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='home-screen'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active" style={{ height: '300px', witdth: '100%' }}>
              <img src='http://letzgro.net/wp-content/uploads/2016/08/Image3.jpg' alt='test' />
            </div>

            <div className="item" style={{ height: '300px', witdth: '100%' }}>
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
          <h3>Our Goals : </h3><br />
          <div className="row">
            <div className='col-xs-4'>
              <div>
                <img src='https://3.bp.blogspot.com/-KBGfNSDupvY/Vf2h36nn3MI/AAAAAAAADlo/r1Wfhxbhi4I/s1600/writing-icon.png' width='60%' />
                <div> Develop writing skills for taking different online classes. </div>
              </div>
            </div>
            <div className='col-xs-4'>
              <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sTF81FtaJoB_MiJexWUsWXd2T3vtYSw0bfepYxal3RLS9jDK' width='60%' />
                <div> Watch unlimited live video stream classes with our experts.  </div>
              </div>
            </div>
            <div className='col-xs-4'>
              <div>
                <img src='https://assets.materialup.com/uploads/d0b393f6-3975-48dd-b7ca-bf0289187c6e/preview' width='60%' />
                <div> Complete listed assessment given by the mentors. </div>
              </div>
            </div>
          </div>
        </div> <br />
      </div >
    );
  }
}

export default Home;
