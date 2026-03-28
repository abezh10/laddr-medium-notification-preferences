export const settingsRoute = {
  path: "/settings",
  method: "GET",
};

export function handleSettings() {
  return {
    ok: true,
    route: "settings",
    message: "Starter route for Notification Preferences",
  };
}
