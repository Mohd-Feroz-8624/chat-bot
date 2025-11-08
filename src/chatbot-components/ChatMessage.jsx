import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";

export function ChatMessage({ message, sender }) {
  return (
    <div className={sender}>
      {sender === "robot" && <img src={RobotProfileImage} width="40px" />}
      <div className="chat-message">{message}</div>
      {sender === "user" && <img src={UserProfileImage} width="40px" />}
    </div>
  );
}
