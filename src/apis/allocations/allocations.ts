import { getLoginUser, getWithAuth } from '../../auth0';

export interface Allocation {
  ID: number;
  UserId: string;
  Name: string;
  Share: number;
  IsActive: boolean;
  CreatedAt: Date;
  UpdatedAt: Date;
  IsDeleted: boolean;
}

export const getMyAllocations = async (): Promise<Allocation[]> => {
  const loginUser = await getLoginUser();

  const result = await getWithAuth(
    import.meta.env.VITE_API_URL +
      '/auth/allocations/' +
      encodeURI(loginUser!.ID),
    {}
  );
  return result.data as Allocation[];
};
