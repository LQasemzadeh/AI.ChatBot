import ChatbotIcon from "@/Components/ChatbotIcon";

export default function Home() {
    return (
        <div className="container">
            <div className="chatbot-popup">
                {/* Chatbot Header */}
                <div className="chat-header">
                    <div className="header-info">
                        <ChatbotIcon />
                        <h2 className="logo-text">AI.ChatBot</h2>
                    </div>
                    <button className="material-symbols-outlined">
                        keyboard_arrow_down
                    </button>
                </div>
                {/* Chatbot Body */}
                <div className="chat-body">
                    <div className="messages bot-message">
                        <ChatbotIcon/>
                        <p className="message-text">
                            Hey there <br/> How can I help you today?
                        </p>
                    </div>
                    <div className="messages user-message">
                        <ChatbotIcon/>
                        <p className="message-text">
                            Lorem ipsum dolo, sit amet consectetur adipiscing elit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
