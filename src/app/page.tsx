import ChatbotIcon from "@/Components/ChatbotIcon";


export default function Home() {
  return (
      <div className="container">
        <div className="chatbot-popup">
            <div className="chat-header">
                <div className="header-info">
                    <ChatbotIcon />
                    <h2 className="logo-text">AI.ChatBot</h2>
                </div>
            </div>
        </div>
      </div>
  );
}
