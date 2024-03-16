import React, { useState } from "react";
import { Box, VStack, HStack, Text, Input, Button, Grid, Image, Textarea, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Index = () => {
  const [chats, setChats] = useState([
    {
      id: 1,
      title: "Chat 1",
      messages: [
        { id: 1, content: "Message 1" },
        { id: 2, content: "Message 2" },
      ],
      frames: ["https://images.unsplash.com/photo-1484589065579-248aad0d8b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZyYW1lJTIwMXxlbnwwfHx8fDE3MTA1ODIyNDl8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZyYW1lJTIwMnxlbnwwfHx8fDE3MTA1ODIyNTB8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1467663802424-21ff675548c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZyYW1lJTIwM3xlbnwwfHx8fDE3MTA1ODIyNTB8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1491147334573-44cbb4602074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZyYW1lJTIwNHxlbnwwfHx8fDE3MTA1ODIyNTF8MA&ixlib=rb-4.0.3&q=80&w=1080"],
      activeMessage: "",
      response: "",
    },
    {
      id: 2,
      title: "Chat 2",
      messages: [
        { id: 1, content: "Message 1" },
        { id: 2, content: "Message 2" },
      ],
      frames: ["https://images.unsplash.com/photo-1527061011665-3652c757a4d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmcmFtZSUyMDF8ZW58MHx8fHwxNzEwNTgyMjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1635720226738-5171ce9788bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmcmFtZSUyMDJ8ZW58MHx8fHwxNzEwNTgyMjUyfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1450858930767-64b21437d41f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmcmFtZSUyMDN8ZW58MHx8fHwxNzEwNTgyMjUzfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1491147334573-44cbb4602074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmcmFtZSUyMDR8ZW58MHx8fHwxNzEwNTgyMjUzfDA&ixlib=rb-4.0.3&q=80&w=1080"],
      activeMessage: "",
      response: "",
    },
  ]);

  const [activeChat, setActiveChat] = useState(null);

  const handleChatClick = (chatId) => {
    setActiveChat(chatId);
  };

  const handleNewMessage = (chatId, message) => {
    const updatedChats = chats.map((chat) => {
      if (chat.id === chatId) {
        return {
          ...chat,
          messages: [...chat.messages, { id: chat.messages.length + 1, content: message }],
          activeMessage: "",
        };
      }
      return chat;
    });
    setChats(updatedChats);
  };

  const handleMessageChange = (chatId, value) => {
    const updatedChats = chats.map((chat) => {
      if (chat.id === chatId) {
        return { ...chat, activeMessage: value };
      }
      return chat;
    });
    setChats(updatedChats);
  };

  const handleFrameClick = (frame) => {
    // Handle frame click event
    console.log("Frame clicked:", frame);
  };

  return (
    <HStack spacing={4} alignItems="stretch" height="100vh">
      <Box width="300px" bg="gray.100" p={4} overflowY="auto">
        <Accordion allowMultiple>
          {chats.map((chat) => (
            <AccordionItem key={chat.id}>
              <h2>
                <AccordionButton onClick={() => handleChatClick(chat.id)}>
                  <Box flex="1" textAlign="left">
                    {chat.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {chat.messages.map((message) => (
                  <Text key={message.id} fontSize="sm" ml={4}>
                    {message.content}
                  </Text>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      <VStack flex={1} p={4} spacing={4} alignItems="stretch">
        {activeChat && (
          <>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              {chats
                .find((chat) => chat.id === activeChat)
                .frames.map((frame, index) => (
                  <Image key={index} src={frame} objectFit="cover" borderRadius="md" cursor="pointer" onClick={() => handleFrameClick(frame)} />
                ))}
            </Grid>
            <HStack spacing={4}>
              <Input value={chats.find((chat) => chat.id === activeChat).activeMessage} onChange={(e) => handleMessageChange(activeChat, e.target.value)} placeholder="Type your message..." />
              <Button colorScheme="blue" onClick={() => handleNewMessage(activeChat, chats.find((chat) => chat.id === activeChat).activeMessage)}>
                Send
              </Button>
            </HStack>
            <Box flex={1} bg="gray.100" p={4} borderRadius="md" overflowY="auto">
              <Text>{chats.find((chat) => chat.id === activeChat).response}</Text>
            </Box>
          </>
        )}
      </VStack>
    </HStack>
  );
};

export default Index;
