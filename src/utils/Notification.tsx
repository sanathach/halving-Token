import { notification } from "antd";
type NotificationType = "success" | "info" | "warning" | "error";
interface useNotificationProps {
  type: NotificationType;
  message: string;
  description: string;
}

const useNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = ({
    message,
    description,
    type,
  }: useNotificationProps) => {
    api[type]({
      message: message,
      description: description,
    });
  };
  return { openNotificationWithIcon, contextHolder };
};

export default useNotification;
