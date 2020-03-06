import { StoreService } from '../../../model/share';
import { Patient } from '../../../model/patient/patient';
import { InjectionToken } from '@angular/core';

export type IPatientDataService = StoreService<Patient>;

export const PatientDataToken = new InjectionToken<IPatientDataService>(
  'patientDataToken'
);

export interface PatientFlow {
    
}