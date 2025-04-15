import React, { useState, useRef } from "react";
import "./Chatbot.css"; // Import CSS for styling

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control chatbot visibility
    const [messages, setMessages] = useState([
        { text: "Hi! Ask me about my bio, education, skills, or projects.", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const chatboxRef = useRef(null); // Reference for scrolling

    const personalData = {
        bio: "I'm a second-year IT undergraduate at the University of Moratuwa.",
        education: "Studied at Bandarawela Central College, now at the University of Moratuwa.",
        skills: "Full-stack development, UI/UX design, graphic design.",
        projects: "HealthPulse, PulseBank, Bun & Run, Portfolio Website."
    };

    // Toggle Chatbot Visibility
    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { text: input, sender: "user" }];
        setMessages(newMessages);
        processUserInput(input.toLowerCase());
        setInput("");

        setTimeout(() => {
            if (chatboxRef.current) {
                chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight; // Auto-scroll to bottom
            }
        }, 100);
    };

    const processUserInput = (userInput) => {
        let response = "I didn't understand that. Ask about bio, education, skills, or projects.";

        if (userInput.includes("bio")) response = personalData.bio;
        else if (userInput.includes("education")) response = personalData.education;
        else if (userInput.includes("skills")) response = personalData.skills;
        else if (userInput.includes("projects")) response = personalData.projects;

        setTimeout(() => {
            setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
            if (chatboxRef.current) {
                chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight; // Auto-scroll on response
            }
        }, 500);
    };

    return (
        <div className="chatbot-wrapper">
            {/* Toggle Button */}
            <button className="chat-toggle-btn" onClick={toggleChatbot}>
                {isOpen ? "✖" : "💬"} {/* Change icon based on open/close state */}
            </button>

            {/* Chatbot Container */}
            {isOpen && (
                <div className="chatbot-container">
                    <div className="chatbox" ref={chatboxRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
