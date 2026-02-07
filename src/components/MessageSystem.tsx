import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Send, 
  Paperclip, 
  MoreVertical, 
  Phone, 
  Video,
  Image,
  File,
  Smile,
  ArrowLeft,
  Star,
  Clock,
  CheckCircle,
  Check
} from 'lucide-react';
import './MessageSystem.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const conversations = [
  {
    id: 1,
    name: 'Sarah Johnson',
    specialty: 'Criminal Defense Attorney',
    avatar: './assets/avatar.jpg',
    lastMessage: 'Thank you for the update. I will review the documents.',
    time: '2:30 PM',
    unread: 2,
    online: true,
    messages: [
      { id: 1, sender: 'lawyer', text: 'Hello! I have received your case files.', time: '10:00 AM', read: true },
      { id: 2, sender: 'user', text: 'Great! Let me know if you need any additional information.', time: '10:15 AM', read: true },
      { id: 3, sender: 'lawyer', text: 'I will review everything and get back to you by tomorrow.', time: '10:30 AM', read: true },
      { id: 4, sender: 'lawyer', text: 'I have some preliminary thoughts on your case.', time: '2:15 PM', read: true },
      { id: 5, sender: 'lawyer', text: 'Thank you for the update. I will review the documents.', time: '2:30 PM', read: false }
    ]
  },
  {
    id: 2,
    name: 'Michael Chen',
    specialty: 'Family Law Specialist',
    avatar: './assets/avatar.png',
    lastMessage: 'Looking forward to our meeting tomorrow.',
    time: 'Yesterday',
    unread: 0,
    online: false,
    messages: [
      { id: 1, sender: 'lawyer', text: 'Hi! I confirmed our appointment for tomorrow.', time: 'Yesterday', read: true },
      { id: 2, sender: 'user', text: 'Perfect. See you at 10 AM!', time: 'Yesterday', read: true },
      { id: 3, sender: 'lawyer', text: 'Looking forward to our meeting tomorrow.', time: 'Yesterday', read: true }
    ]
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    specialty: 'Corporate Law Attorney',
    avatar: './assets/banner_image.png',
    lastMessage: 'The contract has been sent to your email.',
    time: 'Monday',
    unread: 0,
    online: true,
    messages: [
      { id: 1, sender: 'lawyer', text: 'I have prepared the initial contract draft.', time: 'Monday', read: true },
      { id: 2, sender: 'lawyer', text: 'The contract has been sent to your email.', time: 'Monday', read: true }
    ]
  }
];

const MessageSystem = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileView, setMobileView] = useState<'list' | 'chat'>('list');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedConversation]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: selectedConversation.messages.length + 1,
      sender: 'user' as const,
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false
    };

    console.log('Sending message:', newMsg);
    setNewMessage('');
  };

  return (
    <main className="message-system">
      <div className="message-container">
        {/* Conversations List */}
        <section className={`conversations-list ${mobileView === 'list' ? 'active' : ''}`}>
          <div className="list-header">
            <h1>Messages</h1>
            <div className="search-box">
              <Search size={18} />
              <input 
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="conversations">
            {filteredConversations.map(conv => (
              <motion.div
                key={conv.id}
                className={`conversation-item ${selectedConversation.id === conv.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedConversation(conv);
                  setMobileView('chat');
                }}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <div className="conv-avatar">
                  <img src={conv.avatar} alt={conv.name} />
                  {conv.online && <span className="online-indicator"></span>}
                </div>
                <div className="conv-info">
                  <div className="conv-header">
                    <h3>{conv.name}</h3>
                    <span className="conv-time">{conv.time}</span>
                  </div>
                  <p className="conv-specialty">{conv.specialty}</p>
                  <p className="conv-last-message">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="unread-badge">{conv.unread}</span>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Chat Area */}
        <section className={`chat-area ${mobileView === 'chat' ? 'active' : ''}`}>
          {/* Chat Header */}
          <div className="chat-header">
            <button 
              className="back-btn"
              onClick={() => setMobileView('list')}
            >
              <ArrowLeft size={20} />
            </button>
            <div className="chat-user">
              <div className="user-avatar">
                <img src={selectedConversation.avatar} alt={selectedConversation.name} />
                {selectedConversation.online && <span className="online-indicator"></span>}
              </div>
              <div className="user-info">
                <h3>{selectedConversation.name}</h3>
                <p>{selectedConversation.specialty}</p>
              </div>
            </div>
            <div className="chat-actions">
              <button className="action-btn">
                <Phone size={20} />
              </button>
              <button className="action-btn">
                <Video size={20} />
              </button>
              <button className="action-btn">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="messages-container">
            <div className="messages-list">
              {selectedConversation.messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  className={`message ${msg.sender === 'user' ? 'sent' : 'received'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="message-bubble">
                    <p>{msg.text}</p>
                    <div className="message-meta">
                      <span className="message-time">{msg.time}</span>
                      {msg.sender === 'user' && (
                        <span className="message-status">
                          {msg.read ? <CheckCircle size={14} /> : <Check size={14} />}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Message Input */}
          <form className="message-input-area" onSubmit={handleSendMessage}>
            <div className="input-actions">
              <button type="button" className="input-btn">
                <Paperclip size={20} />
              </button>
              <button type="button" className="input-btn">
                <Image size={20} />
              </button>
              <button type="button" className="input-btn">
                <File size={20} />
              </button>
            </div>
            <div className="input-field">
              <button type="button" className="emoji-btn">
                <Smile size={20} />
              </button>
              <input 
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="send-btn" disabled={!newMessage.trim()}>
              <Send size={20} />
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default MessageSystem;
