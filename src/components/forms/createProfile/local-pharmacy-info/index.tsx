import React from 'react'
import Back from '/static/img/back-img.svg';
import City from '/static/img/city.svg';
import CircleQuestion from '/static/img/circle-question.svg';
import { Helmet } from 'react-helmet';
import { useAppDispatch } from '../../../../store/hooks';
import { setSubformStage } from '../../../../store/reducers/formReducer';

const LocalPharmacy = () => {
    const dispatch = useAppDispatch();

    const handleBack =()=>{
      dispatch(setSubformStage({createProfile : 3}))
    }

    const handleNext =()=>{
        dispatch(setSubformStage({createProfile : 5}))
    }
    return (
        <React.Fragment>
            <Helmet>
                <title>Local Pharmacy</title>
            </Helmet>
            <div className='title-container'>
                <div className="text-center cursor-pointer pt-56">
                    <img src={Back} onClick={handleBack} className="mb-8" alt="back arrow" />
                </div>
                <h2 className="text-center main-h mb-32">Local Pharmacy Info</h2>
            </div>
            <div className='card-main mx-auto'>
                <form>
                    <div>
                        <label className='mb-2 d-flex align-items-center'>
                            <span>Pharmacy name</span> <img src={CircleQuestion} className='ms-1' />
                        </label>
                        <div className='form-group'>
                            <input type='text' id='pharmacy-name' name='pharmacy-name' className='form-control' />
                        </div>
                    </div>
                    <div>
                        <label className='mb-2'>Pharmacy phone</label>
                        <div className='form-group'>
                            <input
                                type='text'
                                id='pharmacy-phone'
                                name='pharmacy-phone'
                                className='form-control'
                            />
                        </div>
                    </div>

                    <label className='mb-2 w-100 py-4 border-t'>Pharmacy address (optional):</label>
                    <div>
                        <label className='mb-2'>City</label>
                        <div className='form-group position-relative space-l'>
                            <select className='form-select form-control'>
                                <option value='active'>United States of America</option>
                                <option value='1'>One</option>
                                <option value='2'>Two</option>
                            </select>
                            <span className='select-img'>
                                <img className='me-1' src={City} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className='mb-2'>Street address</label>
                        <div className='form-group mb-16'>
                            <input type='text' id='address1-name' name='address1-name' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <input type='text' id='adrees2-name' name='address2-name' className='form-control' />
                        </div>
                    </div>
                    <div>
                        <label className='mb-2'>City</label>
                        <div className='form-group'>
                            <input type='text' id='city' name='city' className='form-control' />
                        </div>
                    </div>
                    <div>
                        <label className='mb-2'>State</label>
                        <div className='form-group position-relative'>
                            <select className='form-select form-control'>
                                <option value='active'>Not selected</option>
                                <option value='1'>One</option>
                                <option value='2'>Two</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className='mb-2'>ZIP code</label>
                        <div className='form-group'>
                            <input type='text' id='zip-code' name='zip-code' className='form-control' />
                        </div>
                    </div>
                    <div className='form-check check-btn mb-4'>
                        <input className='form-check-input' type='checkbox' id='mail-order' />
                        <label className='form-check-label' htmlFor='mail-order'>
                            Same mail-order pharmacy <img className='ms-1' src={CircleQuestion} />
                        </label>
                    </div>
                    <button
                        onClick={handleNext}
                        className='btn btn-primary form-btn w-100 '
                    >
                        Next
                    </button>
                </form>

            </div>

        </React.Fragment>)
}

export default LocalPharmacy