import CalIcon from '/static/img/calendar-days.svg';
import backImg from "/static/img/back-img.svg";
import City from '/static/img/city.svg';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAppDispatch } from '../../../../store/hooks';
import { setSubformStage } from '../../../../store/reducers/formReducer';
import React from 'react';


const PersonalData = () => {
  const navigate = useNavigate();
  const dispatch  = useAppDispatch();
  
  const handleNext = () =>{
    dispatch(setSubformStage({createProfile: 2}))
  }

  return (
   
    <React.Fragment>
      <Helmet>
        <title>Personal Data</title>
      </Helmet>
      <div className='title-container'>
        <div className="text-center cursor-pointer pt-56">
          <img src={backImg} className="mb-8" onClick={()=> navigate('/')} alt="back arrow" />
        </div>
        <h2 className="text-center main-h mb-32">Personal Data</h2>
      </div>
      <div className=" card-main mx-auto">
        <form>
          <div className="form-check radio-btn me-4 mb-2">
            <input className="form-check-input" type="radio" name="patient" id="patient" value="option2" checked />
            <label className="form-check-label" htmlFor="patient" >I'm a patient</label>
          </div>
          <div className="form-check radio-btn me-4 mb-2">
            <input className="form-check-input" type="radio" name="care" id="care" value="option2" />
            <label className="form-check-label" htmlFor="patient" >Patient is a minor or an adult under my care</label>
          </div>
          <div>
            <label className="mb-2">Your Name </label>
            <div className="form-group mb-16">
              <input type="text" id="first-name" name="first-name" className="form-control" placeholder="First Name" />
            </div>
            <div className="form-group mb-16">
              <input type="text" id="middle-name" name="middle-name" className="form-control" placeholder="Middle Name" />
            </div>
            <div className="row">
              <div className="form-group col-md-8">
                <input type="text" id="last-name" name="last-name" className="form-control" placeholder="Last Name" />
              </div>
              <div className="form-group col-md-4">
                <input type="text" id="suffix" name="suffix" className="form-control" placeholder="No Suffix" />
              </div>
            </div>
          </div>
          <div>
            <label className='mb-2'>Date of birth</label>
            <div className='form-group position-relative'>
              <input type='text' id='dob' name='birth' className='form-control' />
              <img className='me-1 position-absolute cal-icon' src={CalIcon} />
            </div>
          </div>
          <div>
            <label className='mb-2'>Phone</label>
            <div className='form-group position-relative space-l'>
            <input
                type='text'
                id='phone'
                name='phone'
                className='form-control space-l'
                placeholder='34567899'
              />
              <span className='select-img'>
                <img className='me-1' src={City} />
              </span>
            </div>
          </div>
          <button
           onClick={handleNext}
            className='btn btn-primary form-btn btn-w-fit w-100'
          >
            Next
          </button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default PersonalData;