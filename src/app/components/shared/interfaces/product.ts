export interface Product {
  _id: string;
  name: string;
  src: string[];
  description: string;
  category: string;
  price: number;
  stock: number;
  userId: string;
  like: any[];
  unlike: any[];
  isDelete: boolean;
  totalVote: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
  state: string;
  count: number;
  brand: string;
}
