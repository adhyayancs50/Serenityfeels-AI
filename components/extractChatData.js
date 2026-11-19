const extractChatData = (jsonData) => {
    const chatData = [];
    console.log("extractChatData jsonData  ", jsonData)
    // jsonData.history.forEach(conversation => {
    if (jsonData && jsonData.messages) {
        jsonData.messages.forEach(message => {
            chatData.push({
                role: message.role,
                content: message.content,
                conversationName: jsonData.name
                // Add any other relevant data here
            });
        });
    }
    // });

    return chatData;
};
export default extractChatData;

