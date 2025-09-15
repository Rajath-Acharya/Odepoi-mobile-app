import { apiRequest } from "./api";

export type Trip = {
  id: string;
  ownerId: string;
  title: string;
  coverUrl?: string;
  waypoints: string[];
  startDate?: string;
  endDate?: string;
  visibility: "public" | "private" | "invite";
  difficulty?: "easy" | "intermediate" | "hard";
};

export async function listPublicTrips(): Promise<Trip[]> {
  return apiRequest<Trip[]>("/trips");
}

export async function createTrip(input: Partial<Trip>): Promise<Trip> {
  return apiRequest<Trip>("/trips", "POST", input);
}
