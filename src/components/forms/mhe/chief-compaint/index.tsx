import React from 'react'
import Back from '/static/img/back-img.svg';
import { Helmet } from 'react-helmet';

const ChiefComplaint = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Chief Complaint</title>
            </Helmet>
            <div className="title-container">
                <div className='text-center cursor-pointer pt-56'>
                    <img src={Back} className='mb-8' />
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
                >
                    Next
                </button>
            </div>
        </React.Fragment>
    )
}

export default ChiefComplaint