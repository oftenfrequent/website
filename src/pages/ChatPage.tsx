import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useContext } from "../context";
import Message from "../components/Chat/Message";

const ChatPage: React.FC = () => {
  // static contextType = AccessContext;
  const { chat, dispatch } = useContext();

  const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // if enter is hit and shift is not held down
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const input = e.target as HTMLTextAreaElement;
      const value = input.value;
      input.value = "";
      if (!value.trim()) return;

      dispatch({ type: "ADD_USER_MESSAGE", content: value });
      dispatch({ type: "ADD_LOADING_MESSAGE" });
      axios.post("https://oftenfrequent.com/v1/chat/completions", {
        "model": "",
        "messages": [
          {
            "role": "user",
            "content": value
          }
        ],
        "stream": false,
        "user": "string"
      }).then((res) => {
        const string = res.data["choices"][0]["message"]["content"]
        dispatch({ type: "ADD_CHATGPT_MESSAGE", content: string });
      }).catch((err) => {
        console.log("err", err)
      })
    }
  }

  return (
    <div>
      <Link to="/">Back Home</Link>
      {chat.map((message, index) =>
        <div key={index}>
          <Message content={message.content} type={message.type} />
        </div>
      )}
      <textarea placeholder="Ask me things about my career" onKeyUp={onKeyUp} style={{ minWidth: "50%", maxWidth: "100%", resize: "both", padding: "8px" }} />
    </div>
  );
}

export default ChatPage;
