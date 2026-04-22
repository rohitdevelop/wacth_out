export interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  createdAt: string;
  updatedAt: string;

}

export interface CreateContactMessage {
  name: string;
  email: string;
  topic: string;
  message: string;
}