import { useEffect, useState } from "react";

function Notification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://4.224.186.213/evaluation-service/notifications", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzdWdhbnRoYW4uZWMyM0BiaXRzYXRoeS5hYy5pbiIsImV4cCI6MTc3ODIzNDMyOCwiaWF0IjoxNzc4MjMzNDI4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmUzZjQwMDQtZDBlYy00MGVlLTg0NjYtMGM0MjdlZTEzYjNmIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3VnYW50aGFuIHN2Iiwic3ViIjoiOGJiNjg4M2EtOTU0MC00ZDI1LThkY2QtOGI5Mzc0OTQxZTUzIn0sImVtYWlsIjoic3VnYW50aGFuLmVjMjNAYml0c2F0aHkuYWMuaW4iLCJuYW1lIjoic3VnYW50aGFuIHN2Iiwicm9sbE5vIjoiNzM3NjIzMWVjMjk4IiwiYWNjZXNzQ29kZSI6InVLYUpmbSIsImNsaWVudElEIjoiOGJiNjg4M2EtOTU0MC00ZDI1LThkY2QtOGI5Mzc0OTQxZTUzIiwiY2xpZW50U2VjcmV0IjoicGR6V01HZmt0WWZDc3BTayJ9.8VIiBqQTGQxc5eR63p2K1BmUyb0r1AdTBLV4IJe5gyQ",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotifications(data.notifications || data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Notifications:</h1>
      {notifications.map((notification, index) => (
        <p key={index}>
          {notification.ID} : {notification.Type} : {notification.Message} : {notification.Timestamp}
        </p>
      ))}
    </div>
  );
}

export default Notification;
