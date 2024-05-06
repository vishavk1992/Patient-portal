import React from 'react';
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';
import { useAppDispatch } from '../../../../store/hooks';
import { setSubformStage } from '../../../../store/reducers/formReducer';
import { Helmet } from 'react-helmet';

const MoodIssuesTest = () => {
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(setSubformStage({ Mhe: 5 }));
  };

  const handleNext = () => {
    dispatch(setSubformStage({ Mhe: 7 }));
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Mood Issues Test</title>
      </Helmet>
      <div className='title-container'>
        <div className='text-center cursor-pointer pt-56'>
          <img src={Back} className='mb-8' onClick={handleBack} />
        </div>
        <h2 className='main-h text-center mb-32'>
          Mood issues test <img src={CircleQuestion} />
        </h2>
      </div>
      <div className='card-main mx-auto w-780 test-container'>
        <div className='border-bottom pb-4'>
          <p>
            Has there ever been a period of time when you were not your usual self and you felt so
            good or so hyper that other people thought you were not your normal self or you were so
            hyper that you got into trouble?
          </p>
          <div>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Yes
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              No
            </button>
          </div>
        </div>
        <div className='border-bottom py-4'>
          <p>
            Has there ever been a period of time when you were not your usual self and you were so
            irritable that you shouted at people or started fights or arguments?
          </p>
          <div className=''>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Yes
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              No
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>
            Has there ever been a period of time when you were not your usual self and you felt much
            more self-confident than usual?
          </p>
          <div >
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Yes
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              No
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>
            Has there ever been a period of time when you were not your usual self and you felt much
            more self-confident than usual?
          </p>
          <div>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Yes
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              No
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>
            Has there ever been a period of time when you were not your usual self and you felt much
            more self-confident than usual?
          </p>
          <div>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Yes
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              No
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>
            Has there ever been a period of time when you were not your usual self and you felt much
            more self-confident than usual?
          </p>
          <div >
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Yes
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              No
            </button>
          </div>
        </div>
        <div className='text-center'>
          <button
            onClick={handleNext}
            className='btn btn-primary form-btn btn-w-fit btn-with-border mt-4 opacity-low btn-w-507'
          >
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoodIssuesTest;
