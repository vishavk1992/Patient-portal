import { Link} from 'react-router-dom';
import {Helmet} from 'react-helmet' ;
import lockIcon from '/static/img/lock-icon.svg';


const Home = () => {

  return (
    <div className='home-wrapper mx-auto mobile-x-spacing title-container2' id='content-wrapper'>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className='mx-auto'>
        <h2 className='main-h text-center mb-36 pt-main'>Welcome</h2>
        <p className='mb-36 link-btn'>
          Your provider, Dr. X, uses Indigo Health to help collect information about you prior to
          your first visit.
        </p>
        <div className='text-center mb-36'>
          <Link
            to='/onboarding'
            className='form-btn link-btn btn btn-primary '
          >
            Start Onboarding
          </Link>
        </div>
        <p className='mb-36 d-flex align-items-center justify-content-center'>
          <img src={lockIcon} className='me-1' />
          <span>
            Rest assured that this platform is{' '}
            <span className='light-theme-text'>secure and private.</span>
          </span>
        </p>
        <div className='light-theme-text'>
          <p className='mb-36'>
            This information includes personal information (e.g. name, date of birth, emergency
            contact information, insurance information etc.), mental health information (through
            validated screening instruments) and medical information about you (e.g. current
            medications).{' '}
          </p>
          <p className='mb-36'>
            This initial collection of information typically takes patients 30 minutes to complete.
            If you need to take a break, you can resume where you leave off by clicking the link in
            the original email.{' '}
          </p>
          
          <p>All information is saved as you go along.</p>
         
        </div>
        
      </div>
    </div>
  );
};

export default Home;