import React from 'react'
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';
import { Helmet } from 'react-helmet';
import { useAppDispatch } from '../../../../store/hooks';
import { setSubformStage } from '../../../../store/reducers/formReducer';

const DepressionTest = () => {

  const dispatch = useAppDispatch();
  const handleBack = () => {
    dispatch(setSubformStage({ Mhe: 2 }));
  };

  const handleNext = () => {
    dispatch(setSubformStage({ Mhe: 4 }));
  };
  
  return (
    <React.Fragment>
      <Helmet>
        <title>Depression Test</title>
      </Helmet>
      <div className='title-container'>
        <div className='text-center cursor-pointer pt-56'>
          <img src={Back} className='mb-8' onClick={handleBack}  />
        </div>
        <h2 className='main-h text-center mb-32'>
          Depression Test <img src={CircleQuestion} />
        </h2>
        <p className='mb-2 text-center'>Over the last two weeks,</p>
        <p className='text-center mb-32'>how often have you been bothered by ...</p>
      </div>
      <div className='card-main mx-auto w-780 test-container'>
        <div className='border-bottom pb-4'>
          <p>Little interest or pleasure in doing things </p>
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
          <p>Feeling down, depressed, or hopeless </p>
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
          <p>Trouble falling or staying asleep, or sleeping too much </p>
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
          <p>Feeling tired or having little energy </p>
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
          <p>Poor appetite or overeating </p>
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
          <p>
            Feeling bad about yourself — or that you are a failure or have let yourself or your
            family down{' '}
          </p>
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
          <p>
            Trouble concentrating on things, such as reading the newspaper or watching television
          </p>
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
          <p>
            Moving or speaking so slowly that other people could have noticed, or so fidgety or
            restless that you have been moving a lot more than usual
          </p>
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
          <p>
            Thoughts that you would be better off dead, or thoughts of hurting yourself in some way
          </p>
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
          <p>
            If you checked off any problems, how difficult have these problems made it for you to do
            your work, take care of things at home, or get along with other people?
          </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not difficult at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Somewhat difficult
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Very difficult
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely difficult
            </button>
          </div>
        </div>
        <div className='text-center'>
          <button
            className='btn btn-primary form-btn btn-w-fit btn-with-border mt-4 opacity-low w-100'
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DepressionTest