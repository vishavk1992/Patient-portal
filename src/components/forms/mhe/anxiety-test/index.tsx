import React from 'react'
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';
import { Helmet } from 'react-helmet';

const AnxietyTest = () => {
  return (
    <React.Fragment>
    <Helmet>
      <title>Anxiety Test</title>
    </Helmet>
    <div className='title-container'>
      <div className='text-center cursor-pointer pt-56'>
        <img src={Back} className='mb-8' />
      </div>
      <h2 className='main-h text-center mb-32'>
        Anxiety Test <img src={CircleQuestion} />
      </h2>

      <p className='mb-1 text-center'>
        Over the last two weeks, how often have you been bothered
      </p>
      <p className='text-center mb-32'>by any of the following problems? </p>
    </div>
    <div className='card-main mx-auto w-780 test-container'>
      <div className='border-bottom pb-4'>
        <p>Feeling nervous, anxious, or on edge</p>
        <div className='d-flex align-items-center'>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border btn-active'>
            Not at all
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Several days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            More than half the days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Nearly every day
          </button>
        </div>
      </div>
      <div className='border-bottom py-4'>
        <p>Not being able to stop or control worrying</p>
        <div className='d-flex align-items-center'>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Not at all
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Several days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            More than half the days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Nearly every day
          </button>
        </div>
      </div>
      <div className='border-bottom py-4 opacity-low'>
        <p>Worrying too much about different things</p>
        <div className='d-flex align-items-center'>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Not at all
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Several days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            More than half the days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Nearly every day
          </button>
        </div>
      </div>
      <div className='border-bottom py-4 opacity-low'>
        <p>Trouble relaxing</p>
        <div className='d-flex align-items-center'>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Not at all
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Several days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            More than half the days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Nearly every day
          </button>
        </div>
      </div>
      <div className='border-bottom py-4 opacity-low'>
        <p>Being so restless that it's hard to sit still</p>
        <div className='d-flex align-items-center'>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Not at all
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Several days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            More than half the days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Nearly every day
          </button>
        </div>
      </div>
      <div className='border-bottom py-4 opacity-low'>
        <p>Becoming easily annoyed or irritable</p>
        <div className='d-flex align-items-center'>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Not at all
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Several days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            More than half the days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Nearly every day
          </button>
        </div>
      </div>
      <div className='border-bottom py-4 opacity-low'>
        <p>Feeling afraid as if something awful might happen</p>
        <div className='d-flex align-items-center'>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Not at all
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Several days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            More than half the days
          </button>
          <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
            Nearly every day
          </button>
        </div>
      </div>
      <div className='text-center'>
        <button
          className='btn btn-primary form-btn btn-w-fit btn-with-border w-100 mt-4 opacity-low'
        >
          Next
        </button>
      </div>
    </div>
  </React.Fragment>
  )
}

export default AnxietyTest