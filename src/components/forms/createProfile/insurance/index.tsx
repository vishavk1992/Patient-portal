import React from 'react'
import { Helmet } from 'react-helmet';
import backImg from "/static/img/back-img.svg";
import { setSubformStage } from '../../../../store/reducers/formReducer';
import { useAppDispatch } from '../../../../store/hooks';

const Insurance = () => {
    const dispatch = useAppDispatch();
    
    const handleBack=()=>{
        dispatch(setSubformStage({createProfile : 2}))
    }
    const handleNext=()=>{
        dispatch(setSubformStage({createProfile : 4}))
    }


    return (
        <React.Fragment>
            <Helmet>
                <title>Insurance</title>
            </Helmet>
            <div className='title-container'>
                <div className="text-center cursor-pointer pt-56">
                    <img src={backImg} className="mb-8" onClick={handleBack} alt="back arrow" />
                </div>
                <h2 className="text-center main-h mb-32">Insurance</h2>
            </div>
            <div className='card-main mx-auto'>
                <p>Do you have health insurance?</p>
                <div className='d-flex align-items-center'>
                    <button className='btn btn-primary form-btn me-3 w-50 btn-with-border'>Yes</button>
                    <button className='btn btn-primary form-btn btn-with-border w-50 cancel-btn '>No</button>

                </div>
                <button
                   onClick={handleNext}
                    className='btn btn-primary btn-w-fit form-btn mt-4 w-100'
                >
                    Next
                </button>
            </div>

        </React.Fragment>
    )
}

export default Insurance