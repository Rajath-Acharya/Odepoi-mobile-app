export type ChatMessage = {
  id: string;
  tripId: string;
  authorId: string;
  text?: string;
  mediaUrl?: string;
  createdAt: string;
};

// Placeholder: replace with websocket or realtime implementation
export function subscribeToTripChat(
  tripId: string,
  onMessage: (m: ChatMessage) => void
) {
  // no-op: integrate with Firebase or websockets later
  return () => {};
}

export async function sendMessage(
  tripId: string,
  text: string
): Promise<ChatMessage> {
  // mock local echo
  return {
    id: String(Date.now()),
    tripId,
    authorId: "me",
    text,
    createdAt: new Date().toISOString(),
  };
}
