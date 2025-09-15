import { apiRequest } from "./api";

export type Post = {
  id: string;
  authorId: string;
  tripId?: string;
  text?: string;
  media?: { url: string; type: "image" | "video" }[];
  createdAt: string;
  likeCount: number;
  commentCount: number;
};

export async function listFeed(): Promise<Post[]> {
  return apiRequest<Post[]>("/posts");
}

export async function createPost(input: Partial<Post>): Promise<Post> {
  return apiRequest<Post>("/posts", "POST", input);
}
