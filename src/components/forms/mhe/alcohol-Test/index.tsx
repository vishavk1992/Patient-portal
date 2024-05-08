import React from 'react'
import { Helmet } from 'react-helmet';
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';
import { useAppDispatch } from '../../../../store/hooks';
import { setSubformStage } from '../../../../store/reducers/formReducer';

const AlcoholTest = () => {
    const dispatch = useAppDispatch();

    const handleBack =()=>{
        dispatch(setSubformStage({Mhe : 8}))
     }
 
     const handleNext = () => {
         dispatch(setSubformStage({ Mhe: 10 }));
       };

    return (
        <React.Fragment>
            <Helmet>
                <title>Alcohol test</title>
            </Helmet>
            <div className='title-container mx-auto w-780'>
                <div className='px-mob-20'>
                    <div className='text-center cursor-pointer pt-56'>
                        <img src={Back} className='mb-8' onClick={handleBack} />
                    </div>
                    <h2 className='main-h text-center mb-32 '>
                        ADHD Test <img src={CircleQuestion} />
                    </h2>
                    <p className='text-center'>Because alcohol use can affect your health and can interfere with certain medications and treatments, it is important that we ask some questions about your use of alcohol. Your answers will remain confidential so please be honest.</p>
                    <div className='choose-option mb-32 mx-3 mx-md-0 d-flex justify-content-center align-items-center '>
                        <p className='mb-0'>Please choose one of options for highlighted questions</p>
                    </div>
                </div>
            </div>
            <div className='card-main mx-auto w-780 test-container'>
                <div className='pb-4 border-bottom '>
                    <p>How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-with-border btn-active'>
                            Never
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Monthly</span>
                                <span>or less</span>
                            </p>
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>2-4 times</span>
                                <span>a month</span>
                            </p>
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>2-3 times</span>
                                <span>a week</span>
                            </p>
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>4-times</span>
                                <span>a week</span>
                            </p>
                        </button>
                    </div>
                </div>
                <div className='py-4 border-bottom'>
                    <p>How many drinks containing alcohol do you haveon a typical day when you are drinking?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                            1 or 2
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            3 or 4
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            5 or 6
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            7 or 8
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            10 or more
                        </button>
                    </div>
                </div>
                <div className='py-4 border-bottom opacity-low '>
                    <p>How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Not at all
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Less then</span>
                                <span>monthly</span>
                            </p>
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Monthly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Weekly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Daily or</span>
                                <span>almost daily</span>
                            </p>
                        </button>
                    </div>
                </div>
                <div className='py-4 border-bottom opacity-low '>
                    <p>How often during the last year have you found that you were not able to stop drinking once you had started?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Not at all
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Less then</span>
                                <span>monthly</span>
                            </p>
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Monthly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Weekly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Daily or</span>
                                <span>almost daily</span>
                            </p>
                        </button>
                    </div>
                </div>
                <div className='py-4 border-bottom opacity-low '>
                    <p>How often during the last year have you failed to do what was normally expected from you because of drinking?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Not at all
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Less then</span>
                                <span>monthly</span>
                            </p>
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Monthly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Weekly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Daily or</span>
                                <span>almost daily</span>
                            </p>
                        </button>
                    </div>
                </div>
                <div className='py-4 border-bottom opacity-low '>
                    <p>How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Not at all
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Less then</span>
                                <span>monthly</span>
                            </p>
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Monthly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Weekly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Daily or</span>
                                <span>almost daily</span>
                            </p>
                        </button>
                    </div>
                </div>
                <div className='py-4 border-bottom opacity-low '>
                    <p>How often during the last year have you had afeeling of guilt or remorse after drinking?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Not at all
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Less then</span>
                                <span>monthly</span>
                            </p>
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Monthly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Weekly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Daily or</span>
                                <span>almost daily</span>
                            </p>
                        </button>
                    </div>
                </div>
                <div className='py-4 border-bottom opacity-low '>
                    <p>How often during the last year have you been unable to remember what happened the night before because you had been drinking?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Not at all
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Less then</span>
                                <span>monthly</span>
                            </p>
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Monthly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Weekly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Daily or</span>
                                <span>almost daily</span>
                            </p>
                        </button>
                    </div>
                </div>
                <div className='py-4 border-bottom opacity-low '>
                    <p>Have you or someone else been injured as a result of your drinking?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Not at all
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Less then</span>
                                <span>monthly</span>
                            </p>
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Monthly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Weekly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Daily or</span>
                                <span>almost daily</span>
                            </p>
                        </button>
                    </div>
                </div>
                <div className='py-4 border-bottom opacity-low '>
                    <p>How often do you have six or more drinks on oneoccasion?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Not at all
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Less then</span>
                                <span>monthly</span>
                            </p>
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Monthly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            Weekly
                        </button>
                        <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                            <p className='d-grid mb-0 splitted-text'>
                                <span>Daily or</span>
                                <span>almost daily</span>
                            </p>
                        </button>
                    </div>
                </div>
                <div className='text-center'>
                    <button
                        className='btn btn-primary form-btn  btn-with-border mt-4 opacity-low btn-w-507'
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>

            </div>
        
        </React.Fragment >
    )
}

export default AlcoholTest