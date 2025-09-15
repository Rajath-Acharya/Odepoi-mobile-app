export type AppNotification = {
  id: string;
  text: string;
  createdAt: string;
  read?: boolean;
};

export async function listNotifications(): Promise<AppNotification[]> {
  // replace with API or push inbox
  return [
    {
      id: "n1",
      text: "Sam requested to join your trip “Coastal Loop”",
      createdAt: new Date().toISOString(),
    },
  ];
}
