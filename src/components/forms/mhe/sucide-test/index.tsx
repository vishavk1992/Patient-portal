import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';

const SucideTest = () => {

    const [currentPage, setCurrentPage] = useState(1);


    return (
        <React.Fragment>
            <Helmet>
                <title>Suicide Test</title>
            </Helmet>
            <div className='title-container'>
                <div className='text-center cursor-pointer pt-56'>
                    <img src={Back} className='mb-8' onClick={() => {
                        currentPage > 1 ? setCurrentPage(currentPage - 1) : ""
                    }} />

                </div>
                <h2 className='main-h text-center mb-32'>
                    Suicide Test <img src={CircleQuestion} />
                </h2>
                <div className='slider-btns mb-4'>
                    {[1, 2, 3].map((step, index) => (
                        <div key={index} className={`circle ${step === currentPage ? 'active' : ''}`}>  </div>

                    ))}
                </div>
            </div>
            <div className={`card-main mobile-card-h ${currentPage === 1 ? 'w-512' : ''} mx-auto`}>
                {currentPage === 1 ? (
                    <div id='step1'>
                        <p>Have you wished you were dead or wished you could go to sleep and not wake up?</p>
                        <div className='d-flex align-items-center'>
                            <button
                                type='button'
                                className='btn btn-primary form-btn btn-w-fit btn-with-border btn-active me-3 w-50'
                            >
                                Yes
                            </button>
                            <button
                                type='button'
                                className='btn btn-primary form-btn btn-w-fit btn-with-border cancel-btn w-50'
                            >
                                No
                            </button>
                        </div>
                    </div>
                ) : currentPage === 2 ? (
                    <div id='step2'>2</div>
                ) : (
                    <div id='step3'>3</div>
                )}

                <button
                    className='btn btn-primary form-btn btn-w-fit btn-with-border w-100 mt-4'
                >
                    Next
                </button>
            </div>
        </React.Fragment >
    )
}

export default SucideTest