import React, { useState } from "react";

export default function Chatbot() {
  const [conversation, setConversation] = useState([
    { role: "system", content: "Hi there! How can I help?" },
  ]);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = { role: "user", content: message };
    setConversation([...conversation, newMessage]);

    fetchData();

    setMessage("");
    /*const { data } = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        "prompt": message,
        "max_tokens": 150,
        "temperature": 0.5,
        "stop": "###"
      },
      {
        headers: {
          "Content-Type": 'application/json',
          "Authorization": `Bearer ${API_KEY}`,
        },
      }
    );*/
  };

  async function fetchData() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_MARVBOT}`,
      },
      body: JSON.stringify({
        //model: 'gpt-3.5-turbo-0301',
        prompt: message,
       // messages: conversation,
        temperature: 0.9,
        max_tokens: 90,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.6,
      }),
    };
    const fetchResponse = await fetch(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        requestOptions
      )
      .then((response) => response.json())
/*
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_MARVBOT,
    });
    const openai = new OpenAIApi(configuration);
    const openAiResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 0.3,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });*/
    const response = fetchResponse.choices[0].text.trim();
    const newResponse = { role: "system", content: response };
    setConversation((currentMessages) => [...currentMessages, newResponse]);
  }
  return (
    <div style={{display: 'flex', flexDirection:'column', justifyContent:"center", alignItems: "center", margin: '0 auto'}}>
      <div className="chatbot">
        {conversation.map((message, i) => (
          <div key={i}>
            <div
              className={`message ${
                message.role === "user" ? "user" : "marv"
              }`}
            >
              {message.role === "system" ? 'Bot' : 'User'}: {message.content}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
