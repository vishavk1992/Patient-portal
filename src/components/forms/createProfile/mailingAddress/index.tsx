import React from 'react'
import { Helmet } from 'react-helmet';
import backImg from "/static/img/back-img.svg";
import cityImg from "/static/img/city.svg"
import { useNavigate } from 'react-router-dom';

const MailingAddress = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <Helmet>
                <title>Mailing Address</title>
            </Helmet>
            <div className='title-container'>
                <div className="text-center cursor-pointer pt-56">
                    <img src={backImg} className="mb-8" onClick={() => navigate('/')} alt="back arrow" />
                </div>
                <h2 className="text-center main-h mb-32">Mailing Address</h2>
            </div>
            <div className='card-main mx-auto'>
                <form>
                    <div>
                        <label className='mb-2'> City</label>
                        <div className='form-group position-relative space-l'>
                            <select className='form-select form-control '>
                                <option value="active">United States of America</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </select>
                            <span className='select-img'>
                                <img src={cityImg} className='me-1' alt='city image' />
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className='mb-2'>Street address</label>
                        <div className='form-group mb-16'>
                            <input type='text' id='address1-name' name='address1-name' className='form-control' />
                        </div>
                        <div className='form-group mb-16'>
                            <input type='text' id='address2-name' name='address2-name' className='form-control' />
                        </div>
                    </div>

                    <div>
                        <label className='mb-2'>City</label>
                        <div className='form-group mb-16'>
                            <input type='text' id='city' name='city' className='form-control' />
                        </div>
                    </div>

                    <div>
                        <label className='mb-2'> City</label>
                        <div className='form-group'>
                            <select className='form-select form-control '>
                                <option value="active">Not Selected</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className='mb-2'>ZIP Code</label>
                        <div className='form-group mb-16'>
                            <input type='text' id='zip-code' name='zip-code' className='form-control' />
                        </div>
                    </div>
                    <button
                        className='btn btn-primary form-btn w-100'
                    >
                        Next
                    </button>

                </form>
            </div>

        </React.Fragment>
    )
}

export default MailingAddress