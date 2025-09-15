import { apiRequest } from "./api";

export type User = {
  id: string;
  displayName: string;
  avatarUrl?: string;
  bio?: string;
};

export async function getUser(userId: string): Promise<User> {
  return apiRequest<User>(`/users/${userId}`);
}
