import './messages-list.css';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { refreshChat } from "../../store/api-actions";
import { getChat, getNotificationIsReceiving, getTel, getUser } from "../../store/data/selectors";

function MessagesList() {
  const tel = useAppSelector(getTel);
  const user = useAppSelector(getUser);
  const chat = useAppSelector(getChat);
  const notificationIsReceiving = useAppSelector(getNotificationIsReceiving);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // const interval = setInterval(() => {
    //   (user && tel) && dispatch(refreshChat({idInstance: user.idInstance, apiTokenInstance: user.apiTokenInstance, tel: tel}));
    //   console.log('dispatch');
    // }, 5000);
    if (!notificationIsReceiving) {
      (user && tel) && dispatch(refreshChat({idInstance: user.idInstance, apiTokenInstance: user.apiTokenInstance, tel: tel}));
    }

    // return () => clearInterval(interval);
  }, [notificationIsReceiving])

  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   const target = e.target as typeof e.target & {
  //     tel: { value: string };
  //   };
  //   console.log('hi', target.tel.value);
  //   dispatch(setTel(`${target.tel.value}@c.us`));
  // };

  return (
    <>
      <h2>{tel?.slice(0, 11)}</h2>
      <div className="messages-list">
        {chat.map((item, index) => {
          return <span key={index}>{item}</span>
        })}
      </div>
    </>
  );
}

export default MessagesList;
