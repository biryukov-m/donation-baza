import { IApplicationData } from '@/types/common.types';
import axios from 'axios';

interface IApplicationResponse extends IApplicationData {
  id: string;
  createdAt: Date;
}

export const getApplications = async () => {
  const { data } = await axios.get<IApplicationResponse[]>('/api/application');
  return data;
};
