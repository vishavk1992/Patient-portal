// import { useAppSelector } from '../../../store/hooks';
// import CreateProfile from '../../forms/createProfile';

import MoodIssuesTest from "../../forms/mhe/mood-issues-test"





const OnBoardingForm = () => {
 
  // const formStage = useAppSelector((state)=>state.form.formStage)


  return (
    <div className="main-wrapper">
      <div className={"w-100 page-scroll"
      }>

        {/* {(() => {
          switch (formStage) {
            case 1:
              return <CreateProfile />
           
           
            default:
              return null;

          }
        })()} */}
        <MoodIssuesTest/>
      </div>

    </div>
  )
}

export default OnBoardingForm