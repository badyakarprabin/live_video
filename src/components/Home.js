import React, { Component } from 'react';

import home from '../assets/home.jpg';
import notes from '../assets/notes.png';
import videos from '../assets/videos.png';
import assessment from '../assets/assessments.png';


class Home extends Component {
  render() {
    return (
      <div className='component-screen'>
        <div id="myCarousel" className="carousel slide mbl-height" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active" style={{ height: '500px', witdth: '100%' }}>
              <img src={home} alt='test' />
            </div>

            <div className="item" style={{ height: '500px', witdth: '100%' }}>
              <img src={home} alt='test' />
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

        <div className="container text-center secondary-container">
          <h3>Our Goals : </h3><br />
          <div className="row">
            <div className='col-xs-4'>
              <div className='loading-animation'>
                <img className='loading-animation' src={notes} alt='notes' width='30%' />
                <div> Develop writing skills for taking different online classes. Develop writing skills for taking different online classes. Develop writing skills for taking different online classes </div>
              </div>
            </div>
            <div className='col-xs-4'>
              <div className='loading-animation'>
                <img src={videos} alt='videos' width='30%' />
                <div> Watch unlimited live video stream classes with our experts. Watch unlimited live video stream classes with our experts.Watch unlimited live video stream classes with our experts.  </div>
              </div>
            </div>
            <div className='col-xs-4'>
              <div className='loading-animation'>
                <img className='loading-animation' src={assessment} width='30%' alt='education' />
                <div> Complete listed assessment given by the mentors. Complete listed assessment given by the mentors. Complete listed assessment given by the mentors. </div>
              </div>
            </div>
          </div>
        </div> <br />
      </div >
    );
  }
}

export default Home;
