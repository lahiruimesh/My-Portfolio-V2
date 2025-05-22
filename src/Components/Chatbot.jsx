import React, { useState, useRef } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me about my bio, education, skills, or projects.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const chatboxRef = useRef(null);

  const personalData = {
    bio: "I'm a second-year IT undergraduate at the University of Moratuwa.",
    education: "Studied at Bandarawela Central College, now at the University of Moratuwa.",
    skills: "Full-stack development, UI/UX design, graphic design.",
    projects: "HealthPulse, PulseBank, Bun & Run, Portfolio Website.",
  };

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    processUserInput(input.toLowerCase());
    setInput("");

    setTimeout(() => {
      if (chatboxRef.current) {
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
      }
    }, 100);
  };

  const processUserInput = (userInput) => {
    let response = "I didn't understand that. Ask about bio, education, skills, or projects.";

    if (userInput.includes("bio" || "bios")) response = personalData.bio;
    else if (userInput.includes("education")) response = personalData.education;
    else if (userInput.includes("skills")) response = personalData.skills;
    else if (userInput.includes("projects")) response = personalData.projects;

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
      if (chatboxRef.current) {
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
      }
    }, 500);
  };

  return (
    <div className="fixed bottom-5 right-5">
      <button
        className="bg-black/70 text-blue-600 border-2 border-blue-600/40 p-3 rounded-full text-lg shadow-lg hover:scale-100 transition"
        onClick={toggleChatbot}
      >
        {isOpen ? "✖" : "💬"}
      </button>

      {isOpen && (
  <div className="fixed bottom-24 sm:bottom-28 right-4 w-[90vw] sm:w-80 bg-gradient-to-br from-purple-900 to-black shadow-purple-600/20 border-2 border-blue-600/20 rounded-xl shadow-xl flex flex-col animate-fadeIn max-h-[75vh] sm:max-h-[60vh]">
    <div
      className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col space-y-2 scroll-smooth"
      ref={chatboxRef}
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`px-4 py-3 rounded-xl text-sm font-mono max-w-[80%] ${
            msg.sender === "user"
              ? "bg-blue-600 text-white self-end shadow-md"
              : "bg-white/10 text-white self-start"
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>

    <div className="flex p-3 border-t border-white/20 bg-black/40">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 bg-black opacity-70 text-white border border-blue-600/60 rounded-lg outline-none font-mono text-sm placeholder:text-gray-400"
      />
      <button
        onClick={handleSendMessage}
        className="ml-2 px-3 py-2 bg-blue-600/20 text-blue-500 border border-blue-600 rounded-md hover:bg-blue-600/40 hover:shadow-lg font-mono text-sm transition"
      >
        Send
      </button>
    </div>
  </div>
)}
</div>
  );
};

export default Chatbot;
