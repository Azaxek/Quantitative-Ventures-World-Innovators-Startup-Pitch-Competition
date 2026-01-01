
export interface Winner {
  year: string;
  firstPlace: WinnerDetail;
  secondPlace: WinnerDetail;
  thirdPlace: WinnerDetail;
}

export interface WinnerDetail {
  name: string;
  funding: string;
  description?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface RegistrationForm {
  name: string;
  email: string;
  startupName: string;
  pitchDeck: File | null;
  description: string;
}
