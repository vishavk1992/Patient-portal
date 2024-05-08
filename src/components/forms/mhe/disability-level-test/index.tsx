import React from 'react'
import Rating from './rating';
import { Helmet } from 'react-helmet';
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';
import { setFormStage, setSubformStage } from '../../../../store/reducers/formReducer';
import { useAppDispatch } from '../../../../store/hooks';



const DisabilityLevelTest = () => {
    const dispatch = useAppDispatch();

    const handleBack = () => {
        dispatch(setSubformStage({ Mhe: 12 }))
    }
    
    const handleNext =()=>{
        dispatch(setSubformStage({ he : 1 }));
        dispatch(setFormStage(3));

    }


    return (
        <React.Fragment>
            <Helmet>
                <title>Disability Level Test</title>
            </Helmet>
            <div className='title-container'>
                <div className='text-center cursor-pointer pt-56'>
                    <img src={Back} className='mb-8' onClick={handleBack} />
                </div>
                <h2 className='main-h text-center mb-3'>
                    Level of Disability Test <img src={CircleQuestion} />
                </h2>
                <p className='mb-32 text-center'>{"{Short Description}"}</p>
            </div>
            <div className='card-main mx-auto w-780 test-container'>
                <div className='border-bottom pb-4'>
                    <p>The symtoms have disupted your work / your school.</p>
                    <Rating />
                </div>
                <div className='border-bottom py-4'>
                    <p>The symtoms have disupted your social / leisure activities.</p>
                    <Rating />
                </div>
                <div className='border-bottom py-4'>
                    <p>The symtoms have disupted your family life / home responsibilites. </p>
                    <Rating />
                </div>
                <div className='border-bottom py-4'>
                    <p>
                        On how many days in the last week did your symptoms cause you to miss school or work or
                        leave you enable to carry out your normal daily responsibilities?
                    </p>
                    <div className='d-flex align-items-center'>
                        <button
                            className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'
                            style={{ color: 'var(--main-dark-color)' }}
                        >
                            2
                        </button>
                        <p className='mb-0'>days</p>
                    </div>
                </div>
                <div className='border-bottom py-4 opacity-low'>
                    <p>
                        On how many days in the last week did you feel so impaired by your sympotms, that even
                        though you went to school or work, your productivity was reduced?{' '}
                    </p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            5
                        </button>
                        <p className='mb-0'>days</p>
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
    )
}

export default DisabilityLevelTest;