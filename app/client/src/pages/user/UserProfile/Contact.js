import React from 'react'
import { MDBBtn, MDBInput, MDBTextArea } from "mdb-react-ui-kit"
import "./Contact.css"
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";


  const Contact = () => {
    return (
      <div className='container_CONTACT'>
        
   
        <div style={{ height: "110vh" ,width:"100%"}}>
          <MainContainer>
            <ChatContainer>
              <MessageList>
                <Message model={{ message: "So please be patient, the Martian will surely answer you or say we can reply to you as soon as possible", sentTime: "just now", sender: "system" }} />
              </MessageList>
              <MessageInput placeholder="Type your message here..." />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    )
  }



export default Contact