import React from 'react'
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';
import { Helmet } from 'react-helmet';
import { useAppDispatch } from '../../../../store/hooks';
import {setFormStage, setSubformStage } from '../../../../store/reducers/formReducer';

const EmergencyContact = () => {

    const dispatch = useAppDispatch();

    const handleBack=()=>{
        dispatch(setSubformStage({createProfile : 4}))
    }
    const handleNext=()=>{
        dispatch(setFormStage(2));
        dispatch(setSubformStage({ Mhe: 1 }));
    }


    return (
        <React.Fragment>
            <Helmet>
                <title>Emergency Contact</title>
            </Helmet>
            <div className='title-container'>
                <div className='text-center cursor-pointer pt-56'>
                    <img src={Back} onClick={handleBack} className='mb-8' />
                </div>

                <h2 className='main-h text-center mb-32'>
                    Emergency Contact <img src={CircleQuestion} />
                </h2>
                <p className='text-center'>Who should we contact in case of an emergency?</p>
            </div>
            <div className='card-main mx-auto'>
                <form>
                    <div className="form-check radio-btn me-4 mb-2">
                        <input className="form-check-input" type="radio" name="patient" id="patient" value="option2" />
                        <label className="form-check-label" htmlFor="patient" > I have an emergency contact</label>
                    </div>
                    <div className="form-check radio-btn me-4 mb-3">
                        <input className="form-check-input" type="radio" name="care" id="care" value="option2"/>
                        <label className="form-check-label" htmlFor="patient" > Idon't have an emergency contact</label>
                    </div>
                    <div>
                        <label className='mb-2'>Emergeny Contact Relationship</label>
                        <div className='form-group'>
                            <input type='text' id='relation' name='relation' className='form-control' placeholder='Brother, Friend, ...' />
                        </div>
                    </div>
                    <div>
                        <label className='mb-2'>Name</label>
                        <div className='form-group mb-16'>
                            <input
                                type='text'
                                id='first-name'
                                name='first-name'
                                className='form-control'
                                placeholder='First Name'
                            />
                        </div>
                        <div className='form-group mb-16'>
                            <input
                                type='text'
                                id='middle-name'
                                name='middle-name'
                                className='form-control'
                                placeholder='Middle Name'
                            />
                        </div>
                        <div className='row'>
                            <div className='form-group col-md-8'>
                                <input
                                    type='text'
                                    id='last-name'
                                    name='last-name'
                                    className='form-control'
                                    placeholder='Last Name'
                                />
                            </div>
                            <div className='form-group col-md-4'>
                                <input
                                    type='text'
                                    id='suffix'
                                    name='suffix'
                                    className='form-control'
                                    placeholder='No Suffix'
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className='mb-2'>Phone</label>
                        <div className='form-group'>
                            <input
                                type='text'
                                id='phone'
                                name='phone'
                                className='form-control'
                                placeholder='(444) 343-4343'
                            />
                        </div>
                    </div>
                    <button
                    onClick={handleNext}
                        className='btn btn-primary btn-w-fit form-btn mt-4 w-100'
                    >
                        Next
                    </button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default EmergencyContact