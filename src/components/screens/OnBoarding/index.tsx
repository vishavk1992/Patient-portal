// import { useAppSelector } from '../../../store/hooks';
// import CreateProfile from '../../forms/createProfile';


import AnxietyTest from "../../forms/mhe/anxiety-test"



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
        <AnxietyTest/>
      </div>

    </div>
  )
}

export default OnBoardingForm