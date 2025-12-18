
export interface PatientProfile {
  name: string;
  age: number;
  gender: string;
  occupation: string;
  routine: string;
  complaints: string;
  medicalHistory: string;
  commuteDistance: number;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  experience: string;
  focus: string;
  perspective: string;
  image: string;
}

export enum AppState {
  WELCOME = 'WELCOME',
  FORM = 'FORM',
  GENERATING = 'GENERATING',
  RESULT = 'RESULT'
}
