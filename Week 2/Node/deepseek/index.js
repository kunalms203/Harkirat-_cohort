const getDeepSeekResponse = async (message) => {
    try {
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "deepseek-r1:1.5b", // Use "deepseek-chat" if available
                prompt: message,
                stream: false, // Set to true for real-time responses
            }),
        });

        const data = await response.json();
        console.log(data.response);
    } catch (error) {
        console.error("Ollama API Error:", error);
    }
};



getDeepSeekResponse("why sky is not blue")

console.log("Hii I am AI");

