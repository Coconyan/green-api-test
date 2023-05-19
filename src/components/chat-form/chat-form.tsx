import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchStateInstance, sendMessage } from "../../store/api-actions";
import { getChat, getError, getTel, getUser } from "../../store/data/selectors";
import { setTel } from "../../store/data/data";
import MessagesList from "../messages-list/messages-list";

function ChatForm() {
  const user = useAppSelector(getUser);
  const tel = useAppSelector(getTel);
  const dispatch = useAppDispatch();
  const error = useAppSelector(getError);

  const handleLoginSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      tel: { value: string };
    };
    console.log('hi tel', target.tel.value);
    dispatch(setTel(`${target.tel.value}@c.us`));
  };

  const handleMessageSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      message: { value: string };
    };
    console.log('hi message', target.message.value);
    if (user && tel) {
      dispatch(sendMessage({ idInstance: user.idInstance, apiTokenInstance: user.apiTokenInstance, tel: tel, message: target.message.value }))
    }
  };

  return (
    <>
      {
        !tel
          ? (
            <form
              action=""
              onSubmit={handleLoginSubmit}
              className="login-form"
            >
              {error && <span className="error">Error</span>}
              <input type="tel" name="tel" placeholder="tel" />

              <button type="submit">Start new chat</button>
            </form>
          )
          : (
            <form
              action=""
              onSubmit={handleMessageSubmit}
              className="login-form"
            >
              <MessagesList />
              {error && <span className="error">Error</span>}
              <input type="string" name="message" placeholder="message" />

              <button type="submit">Send message</button>
            </form>
          )
      }

    </>
  );
}

export default ChatForm;
