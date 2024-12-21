import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserName";
import { ProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";
import { PublicationSchema } from "entities/Publication";
import { EditingPublicationFileSchema } from "features/EditPublication";
import { OrderingCertificateSchema } from "features/OrderCertificate";
import { EntranceTestSchema } from "entities/EntranceTests";
import { AdviserSchema } from "entities/Adviser";
import { AddingPublicationFileSchema } from "features/AddPublication";
import { PatentSchema } from "entities/Patent";
import { EditingPatentFileSchema } from "features/EditPatent";
import { AddingPatentFileSchema } from "features/AddPatent";
import { GrantSchema } from "entities/Grant";
import { EditingGrantFileSchema } from "features/EditGrant";
import { AddingGrantFileSchema } from "features/AddGrant";
import { ConferenceSchema } from "entities/Conference";
import { EditingConferenceFileSchema } from "features/EditConference";
import { AddingConferenceFileSchema } from "features/AddConference";
import { CompetitionSchema } from "entities/Competition";
import { EditingCompetitionFileSchema } from "features/EditCompetition";
import { AddingCompetitionFileSchema } from "features/AddCompetition";
import { CertificationSchema } from "entities/Certification";
import { DissertationFileSchema } from "entities/DissertationFile";
import { EmployeeProfileSchema } from "entities/EmployeeProfile";
import { OrderCertificateRecordSchema } from "entities/OrderCertificateRecord";
import { AspirantRecordSchema } from "entities/AspirantRecord";
import { DoctorantRecordSchema } from "entities/DoctorantRecord";
import { ApplicantRecordSchema } from "entities/ApplicantRecord";
import { AdviserRecordSchema } from "entities/AdviserRecord";

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    publications?: PublicationSchema;
    editingPublicationFile?: EditingPublicationFileSchema;
    addingPublicationFile?: AddingPublicationFileSchema;
    orderingCertificate?: OrderingCertificateSchema;
    entranceTests?: EntranceTestSchema;
    adviser?: AdviserSchema;
    patent?: PatentSchema;
    editingPatentFile?: EditingPatentFileSchema,
    addingPatentFile?: AddingPatentFileSchema,
    grant?: GrantSchema,
    editingGrantFile?: EditingGrantFileSchema,
    addingGrantFile?: AddingGrantFileSchema,
    conferences?: ConferenceSchema,
    editingConferenceFile?: EditingConferenceFileSchema,
    addingConferenceFile?: AddingConferenceFileSchema,
    competition?: CompetitionSchema,
    editingCompetition?: EditingCompetitionFileSchema,
    addingCompetition?: AddingCompetitionFileSchema,
    certification?: CertificationSchema,
    dissertationFile?: DissertationFileSchema,
    employeeProfile?: EmployeeProfileSchema,
    orderCertificateRecords?: OrderCertificateRecordSchema,
    aspirantsRecords?: AspirantRecordSchema,
    doctorantsRecords?: DoctorantRecordSchema,
    applicantsRecords?: ApplicantRecordSchema,
    advisersRecords?: AdviserRecordSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
}
