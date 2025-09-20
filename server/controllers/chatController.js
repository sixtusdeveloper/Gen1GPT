// API CONTROLLER FOR CREATING AND MANAGING CHATS
import Chat from "../models/Chat.js";

export const createChat = async (req, res) => {
  // Implementation for creating a chat
  try {
    const userId = req.user.id; // Assuming user ID is available in req.user from auth middleware
    const chatData = {
      userId,
      messages: [],
      name: "New Chat",
      userName: req.user.name,
      userEmail: req.user.email,
    };
    await Chat.create(chatData);
    res
      .status(201)
      .json({ success: true, message: "Chat created successfully" });
  } catch (error) {
    console.error("Error creating chat:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// API CONTROLLER FOR FETCHING CHATS
export const getChats = async (req, res) => {
  try {
    const userId = req.user.id;
    const chats = await Chat.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: chats });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// API CONTROLLER FOR DELETING CHATS
export const deleteChat = async (req, res) => {
  try {
    const userId = req.user.id;
    const { chatId } = req.params;

    await Chat.deleteOne({ userId, _id: chatId });
    res
      .status(200)
      .json({ success: true, message: "Chat deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
