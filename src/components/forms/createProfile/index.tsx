import EmergencyContact from "./emergency-contact";
import PersonalData from "./personal-data";
import MailingAddress from "./mailingAddress";
import Insurance from "./insurance";
import LocalPharmacy from "./local-pharmacy-info";
import { useAppSelector } from "../../../store/hooks";

const CreateProfile = () => {
    const subformStage = useAppSelector((state) => state.form.subFormStage);
    return (
        <div>
            {(() => {
                switch (subformStage.createProfile) {
                    case 1:
                        return <PersonalData />
                    case 2:
                        return <MailingAddress />
                    case 3:
                        return <Insurance />
                    case 4:
                        return <LocalPharmacy />
                    case 5:
                        return <EmergencyContact />
                    default:
                        return null;

                }
            })()}
        </div>
    );
};

export default CreateProfile