export interface Content {
  _id: string;
  userId: string; 
  name: string;
  url: string;
  type: string;
  genre: string;
  createdAt: Date | number;
  updatedAt: Date | number;
}