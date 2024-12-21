import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUserName";
import { $api } from "shared/api/api";
import { profileReducer } from "entities/Profile";
import { publicationsReducer } from "entities/Publication";
import { editingPublicationFileReducer } from "features/EditPublication";
import { orderingCertificateReducer } from "features/OrderCertificate";
import { entranceTestsReducer } from "entities/EntranceTests";
import { adviserReducer } from "entities/Adviser";
import { addingPublicationFileReducer } from "features/AddPublication";
import { patentsReducer } from "entities/Patent";
import { editingPatentFileReducer } from "features/EditPatent";
import { addingPatentFileReducer } from "features/AddPatent";
import { grantReducer } from "entities/Grant";
import { editingGrantFileReducer } from "features/EditGrant";
import { addingGrantFileReducer } from "features/AddGrant";
import { conferencesReducer } from "entities/Conference";
import { editingConferenceFileReducer } from "features/EditConference";
import { addingConferenceFileReducer } from "features/AddConference";
import { competitionsReducer } from "entities/Competition";
import { editingCompetitionFileReducer } from "features/EditCompetition";
import { addingCompetitionFileReducer } from "features/AddCompetition";
import { certificationReducer } from "entities/Certification";
import { dissertationFileReducer } from "entities/DissertationFile";
import { employeeProfileReducer } from "entities/EmployeeProfile";
import { orderCertificateRecordReducer } from "entities/OrderCertificateRecord";
import { aspirantRecordsReducer } from "entities/AspirantRecord";
import { doctorantRecordsReducer } from "entities/DoctorantRecord";
import { applicantRecordsReducer } from "entities/ApplicantRecord";
import { adviserRecordsReducer } from "entities/AdviserRecord";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
        publications: publicationsReducer,
        editingPublicationFile: editingPublicationFileReducer,
        orderingCertificate: orderingCertificateReducer,
        entranceTests: entranceTestsReducer,
        adviser: adviserReducer,
        addingPublicationFile: addingPublicationFileReducer,
        patent: patentsReducer,
        editingPatentFile: editingPatentFileReducer,
        addingPatentFile: addingPatentFileReducer,
        grant: grantReducer,
        editingGrantFile: editingGrantFileReducer,
        addingGrantFile: addingGrantFileReducer,
        conferences: conferencesReducer,
        editingConferenceFile: editingConferenceFileReducer,
        addingConferenceFile: addingConferenceFileReducer,
        competition: competitionsReducer,
        editingCompetition: editingCompetitionFileReducer,
        addingCompetition: addingCompetitionFileReducer,
        certification: certificationReducer,
        dissertationFile: dissertationFileReducer,
        employeeProfile: employeeProfileReducer,
        orderCertificateRecords: orderCertificateRecordReducer,
        aspirantsRecords: aspirantRecordsReducer,
        doctorantsRecords: doctorantRecordsReducer,
        applicantsRecords: applicantRecordsReducer,
        advisersRecords: adviserRecordsReducer,
    };

    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
            serializableCheck: false,
        }),
    });
}
