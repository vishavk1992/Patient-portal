import React from 'react'
import Back from '/static/img/back-img.svg';
import { Helmet } from 'react-helmet';
import { useAppDispatch } from '../../../../store/hooks';
import {setFormStage, setSubformStage } from '../../../../store/reducers/formReducer';

const ChiefComplaint = () => {
    const dispatch = useAppDispatch();

    const handleBack = () => {
        dispatch(setSubformStage({createProfile: 5 }));
        dispatch(setFormStage(1));
      };
    
      const handleNext = () => {
        dispatch(setSubformStage({ Mhe: 2 }));
        
      };
    return (
        <React.Fragment>
            <Helmet>
                <title>Chief Complaint</title>
            </Helmet>
            <div className="title-container">
                <div className='text-center cursor-pointer pt-56'>
                    <img src={Back} className='mb-8' onClick={handleBack} />
                    <h2 className='main-h text-center mb-32'>Chief Complaint</h2>
                </div>
            </div>
            <div className='card-main mx-auto mobile-card-h cheif-complaint-card'>
                <p>Please describe briefly the concerns or symptoms that are making you seek treatment at
                    this time.
                </p>
                <div className='form-group'>
                    <textarea
                        rows={5}
                        id="email"
                        name='email'
                        className='custom-textarea'
                        placeholder='My concerns..'
                    />

                </div>
                <button
                    className='btn btn-primary form-btn  w-100'
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </React.Fragment>
    )
}

export default ChiefComplaint