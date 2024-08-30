import { useRecoilValue } from "recoil";
import {
  networkNotifications,
  totalNotificationSelector,
} from "./atoms/userNotif";

function Network() {
  const networkCount = useRecoilValue(networkNotifications);
  const totalNotifications = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Network ({networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Notifications ({networkCount.notifications})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Total Notifs ({totalNotifications})</button>
    </div>
  );
}

export default Network;
