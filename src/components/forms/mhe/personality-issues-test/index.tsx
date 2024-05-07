import React from 'react';
import { Helmet } from 'react-helmet';
import { useAppDispatch } from '../../../../store/hooks';
import { setSubformStage } from '../../../../store/reducers/formReducer';
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';

const PersonalityIssuesTest = () => {
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(setSubformStage({ Mhe: 10 }));
  };

  const handleNext = () => {
    dispatch(setSubformStage({ Mhe: 12 }));
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Personality Issues Test</title>
      </Helmet>
      <div className='title-container'>
        <div className='px-mob-20'>
          <div className='text-center cursor-pointer pt-56'>
            <img src={Back} className='mb-8' onClick={handleBack} />
          </div>
          <h2 className='main-h text-center mb-32'>
            Personality Issues Test <img src={CircleQuestion} />
          </h2>
          <p className='mb-32 w-780 mx-auto line-h text-center'>
            The questions listed below relate to your thoughts and feelings. If the way you have
            been in recent weeks or months differs from the way you usually are, please answer based
            on when you were your usual self.
          </p>
        </div>
      </div>
      <div className='card-main mx-auto w-780 test-container'>
        <div className='border-bottom pb-4'>
          <p>
            Some people find their mood changes frequently - as if they spend every day on an
            emotional roller coaster. For example, they might switch from feeling angry to depressed
            to anxious many times a day. Does this sound like you?
          </p>
          <div>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border btn-active'>
              Yes
            </button>
            <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
              No
            </button>
          </div>
        </div>
        <div className='border-bottom py-4'>
          <p>If YES, have you been this way most of your life?</p>
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
            Some people prefer to be the center of attention, while others are content to remain on
            the edge of things. Would you describe yourself as preferring to be the center of
            attention?
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
          <p>If YES, does it bother you when someone else is in the spotlight?</p>
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
            Do you frequently insist on having what you want right now, even when waiting a little
            longer would get you something much better?
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
            Do you often get in trouble at work or with friends because you act excited at first but
            then lose interest in projects and don't follow through?
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
            Do you find that most people will take advantage of you if you let them know too much
            about you?
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
          <p>Do you generally feel nervous or anxious around people?</p>
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
          <p>Do you avoid situations where you have to meet new people?</p>
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
          <p>Do you avoid getting to know people because you're worried they may not like you?</p>
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
          <p>If YES, has this affected the number of friends that you have?</p>
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
            Do you keep changing the way you present yourself to people because you don't know who
            you really are?
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
            Do you often feel like your beliefs change so much that you don't know what you really
            believe any more?
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
            Do you often get angry or irritated because people don't recognize your special talents
            or achievements as much as they should?
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
            Do you often suspect that people you know may be trying to cheat or take advantage of
            you?
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
          <p>If YES, do you worry about this a lot?</p>
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
          <p>Do you tend to hold grudges or give people the silent treatment for days at a time?</p>
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
          <p>Do you get annoyed when friends or family complain about their problems?</p>
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
          <p>Do people complain that you're not very sympathetic to their problems?</p>
          <div>
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
            className='btn btn-primary form-btn btn-w-fit btn-with-border mt-4 opacity-low w-100'
          >
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonalityIssuesTest;
