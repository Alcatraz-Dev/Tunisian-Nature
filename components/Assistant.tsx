import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';
import { HiX } from 'react-icons/hi'
const Assistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: '1', role: ChatRole.MODEL, text: "Welcome to Tunisian Nature. I can help you with product details, harvest information, or wholesale inquiries." }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: ChatMessage = { id: Date.now().toString(), role: ChatRole.USER, text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        const responseText = await sendMessageToGemini(input);

        const aiMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: ChatRole.MODEL, text: responseText };
        setMessages(prev => [...prev, aiMsg]);
        setIsLoading(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            {/* Toggle Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 rounded-full bg-orange-400 backdrop-blur-lg border border-orange-500 shadow-2xl flex items-center justify-center
                   hover:scale-110 transition-transform duration-300 group"
                >
                    {isOpen ? (
                        <HiX className="text-white w-6 h-6" />
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-amber-100 group-hover:text-amber-500 transition-colors duration-300 animate-pulse"
                        >
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-[90vw] sm:w-[400px] h-[500px] bg-stone-900/95 backdrop-blur-xl border border-stone-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50 animate-fade-in-up">
                    {/* Header */}
                    <div className="p-4 border-b border-stone-700 flex items-center gap-3 bg-stone-800/50">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-semibold text-sm text-amber-50">Sales Representative</span>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === ChatRole.USER ? 'bg-amber-700 text-white rounded-br-none' : 'bg-stone-800 text-stone-200 rounded-bl-none'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-stone-800 p-3 rounded-2xl rounded-bl-none">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-stone-700 bg-black/40">
                        <div className="flex items-center gap-2 bg-stone-800 rounded-full px-4 py-2 border border-stone-600 focus-within:border-amber-500 transition-colors">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask about our products..."
                                className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder-stone-500 outline-none"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className="text-amber-500 hover:text-amber-400 disabled:opacity-50"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Assistant;