export type SliderStatus = 'Active' | 'Inactive';

export interface SliderRecord {
  _id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  linkUrl?: string;
  order: number;
  status: SliderStatus;
  createdAt?: string;
  updatedAt?: string;
}

export type SliderCreateInput = Omit<SliderRecord, '_id' | 'createdAt' | 'updatedAt'>;
export type SliderUpdateInput = SliderCreateInput & { _id: string };
