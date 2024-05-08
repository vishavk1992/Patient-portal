import React from 'react'
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';
import { Helmet } from 'react-helmet';
import { useAppDispatch } from '../../../../store/hooks';
import { setSubformStage } from '../../../../store/reducers/formReducer';

const EatingDisorderTest = () => {

  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(setSubformStage({ Mhe: 11 }));
  };

  const handleNext = () => {
    dispatch(setSubformStage({ Mhe: 13 }));
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Eating Disorders Test</title>
      </Helmet>
      <div className='title-container'>
        <div className='px-mob-20'>
          <div className='text-center cursor-pointer pt-56'>
            <img src={Back} className='mb-8' onClick={handleBack}  />
          </div>
          <h2 className='main-h text-center mb-32'>
            Eating Disorders Test <img src={CircleQuestion} />
          </h2>
          <p className='mb-32 text-center w-780 mx-auto line-h'>
            The SCOFF Questionnaire, devised by researchers at St George's Hospital Medical School,
            is a valid and reliable screening tool for detecting the existence of an eating
            disorder. The questions focus on some key characteristics of anorexia and bulimia.
          </p>
        </div>
      </div>
      <div className='card-main mx-auto w-780 test-container'>
        <div className='border-bottom pb-4'>
          <p>Do you make yourself Sick because you feel uncomfortably full?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border btn-active'>
              Yes
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              No
            </button>
          </div>
        </div>
        <div className='border-bottom py-4'>
          <p>Do you worry you have lost Control over how much you eat?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Yes
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              No
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Have you recently lost more than One stone in a 3 month period?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Yes
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              No
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Do you believe yourself to be Fat when others say you are too thin?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Yes
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              No
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Would you say that Food dominates your life?</p>
          <div className='d-flex align-items-center'>
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

export default EatingDisorderTest