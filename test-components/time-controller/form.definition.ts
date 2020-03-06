import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InjectionToken } from '@angular/core';

export interface StudentFormType {
  name: string;
  age: number;
  gender: string;
}

export function startup() {
  return new FormGroup({
    name: new FormControl('s', Validators.required),
    age: new FormControl('s'),
    gender: new FormControl('s')
  });
}

export class StudyFormDefinition {
  name: string = 'studentFormToken run';
  startup(studentForm: StudentFormType): FormGroup {
    const initial = {
      name: null,
      age: null,
      gender: 'get gender'
    };
    return new FormGroup({
      name: new FormControl(initial.name, Validators.required),
      age: new FormControl(initial.age),
      gender: new FormControl(initial.gender)
    });
  }
}

export const StudentFormToken = new InjectionToken<StudentFormType>('student token'); // any
