import React, { useState } from 'react'
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';
import { Helmet } from 'react-helmet';
import { useAppDispatch } from '../../../../store/hooks';
import { setSubformStage } from '../../../../store/reducers/formReducer';

const ManiaTest = () => {
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);


    const handleBack=()=>{
      dispatch(setSubformStage({Mhe : 4}));
    }

    const handleNextButton = () => {
        if (currentPage < 2) {
          setCurrentPage(currentPage + 1);
        } else {
          dispatch(setSubformStage({ Mhe: 6 }));
        }
      };


    return (
        <React.Fragment>
            <Helmet>
                <title>Mania test</title>
            </Helmet>
            <div className='title-container'>
                <div className='text-center cursor-pointer pt-56'>
                    <img
                        src={Back}
                        className='mb-8'
                        onClick={() => {
                            currentPage > 1 ? setCurrentPage(currentPage - 1) : handleBack();
                        }}

                    />
                </div>
                <h2 className='main-h text-center mb-32'>
                    Mania Test <img src={CircleQuestion} />
                </h2>

                <div className='slider-btns mb-4'>
                    {[1, 2, 3].map((step, index) => (
                        <div key={index} className={`circle ${step === currentPage ? 'active' : ""}`}></div>

                    ))}
                </div>
            </div>
            <div className={`card-main ${currentPage === 1 ? 'w-512 mobile-card-h' : 'w-780'} mx-auto `}>
                {currentPage === 1 ? (
                    <div id='step1'>
                        <p className='text-center text-24 mb-28'>Instructions</p>
                        <ol>
                            <li className='line-h mb-28 ps-3'>
                                Choose the one statement in each group that best describes the way you have been
                                feeling for the past week.
                            </li>
                            <li className='line-h ps-3'>The word "occasionally" when used here means once or twice; "often" means several
                                times or more and "frequently" means most of the time.
                            </li>
                        </ol>
                    </div>
                ) : currentPage === 2 ? (
                    <div id='step2'>
                        <p className='text-center text-24 mb-28'>Question 1. Choose the statement</p>
                        <div className='options'>
                            <button className='btn btn-primary form-btn btn-w-fit btn-with-border w-100 gray-shaded-btn mb-3 whitespace-normal'>
                                I do not feel happier or more cheerful than usual
                            </button>
                            <button className='btn btn-primary form-btn btn-w-fit btn-with-border w-100 gray-shaded-btn mb-3 whitespace-normal'>
                                I occasionally feel happier or more cheerful than usual
                            </button>
                            <button className='btn btn-primary form-btn btn-w-fit btn-with-border btn-active w-100 mb-3 whitespace-normal'>
                                I often feel happier or more cheerful than usual
                            </button>
                            <button className='btn btn-primary form-btn btn-w-fit btn-with-border w-100 gray-shaded-btn mb-3 whitespace-normal'>
                                I feel happier or more cheerful than usual most of the time
                            </button>
                            <button className='btn btn-primary form-btn btn-w-fit btn-with-border w-100 gray-shaded-btn mb-3 whitespace-normal'>
                                I do not feel happier or more cheerful than usual
                            </button>
                            <button className='btn btn-primary form-btn btn-w-fit btn-with-border w-100 gray-shaded-btn whitespace-normal'>
                                I feel happier or more cheerful than usual all of the time
                            </button>
                        </div>
                    </div>
                ) : (
                    <div id='step3'>3</div>
                )}

                <div className='text-center'>
                    <button
                        className={`btn btn-primary form-btn btn-w-fit btn-with-border mt-4 ${currentPage === 1 ? 'w-100' : 'btn-w-507'
                            }`}
                       onClick={handleNextButton}
                    >
                        {currentPage === 1 ? 'Start' : 'Next'}
                    </button>
                </div>

            </div>
        </React.Fragment>
    )
}

export default ManiaTest