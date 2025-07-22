import { useEffect } from "react";
import { askNotificationPermission } from "../utils/notifications";

// For demonstration, will only request permission.
export default function NotificationHandler() {
  useEffect(() => {
    askNotificationPermission();
  }, []);
  return null;
}
