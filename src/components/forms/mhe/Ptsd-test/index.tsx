import React from 'react';
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';
import { useAppDispatch } from '../../../../store/hooks';
import { setSubformStage } from '../../../../store/reducers/formReducer';
import { Helmet } from 'react-helmet';

const PTSdTest = () => {
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(setSubformStage({ Mhe: 7 }));
  };

  const handleNext = () => {
    dispatch(setSubformStage({ Mhe: 9 }));
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>PTSD Test</title>
      </Helmet>
      <div className='title-container'>
        <div className='text-center cursor-pointer pt-56'>
          <img src={Back} className='mb-8' onClick={handleBack} />
        </div>
        <h2 className='main-h text-center mb-32'>
          PTSD Test <img src={CircleQuestion} />
        </h2>
        <p className='mb-32 text-center'>In the past month, how much were you bothered by:</p>
      </div>
      <div className='card-main mx-auto w-780 test-container'>
        <div className='border-bottom pb-4'>
          <p>Repeated, disturbing, and unwanted memories of the stressful experience? </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border btn-active'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4'>
          <p>Repeated, disturbing dreams of the stressful experience? </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>
            Suddenly feeling or acting as if the stressful experience were actually happening again
            (as if you were actually back there reliving it)?{' '}
          </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Feeling very upset when something reminded you of the stressful experience? </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>
            Having strong physical reactions when something reminded you of the stressful experience
            (for example, heart pounding, trouble breathing, sweating)?{' '}
          </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Avoiding memories, thoughts, or feelings related to the stressful experience? </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>
            Avoiding external reminders of the stressful experience (for example, people, places,
            conversations, activities, objects, or situations)?{' '}
          </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Trouble remembering important parts of the stressful experience?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>
            Having strong negative beliefs about yourself, other people,or the world (for example,
            having thoughts such as: I am bad, there is something seriously wrong with me,no one can
            be trusted, the world is completely dangerous)?
          </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>
            Blaming yourself or someone else for the stressful experience or what happened after it?
          </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Having strong negative feelings such as fear, horror, anger,guilt, or shame?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Loss of interest in activities that you used to enjoy? </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Feeling distant or cut off from other people?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>
            Trouble experiencing positive feelings (for example, being unable to feel happiness or
            have loving feelings for people close to you)?
          </p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Irritable behavior, angry outbursts, or acting aggressively?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Taking too many risks or doing things that could cause you harm?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Being “superalert” or watchful or on guard?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Feeling jumpy or easily startled?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='border-bottom py-4 opacity-low'>
          <p>Trouble falling or staying asleep?</p>
          <div className='d-flex align-items-center'>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Not at all
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              A little bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Moderately
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Quite a bit
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              Extremely
            </button>
          </div>
        </div>
        <div className='text-center'>
          <button
            onClick={handleNext}
            className='btn btn-primary form-btn btn-w-fit btn-with-border w-100 mt-4 opacity-low'
          >
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PTSdTest;
