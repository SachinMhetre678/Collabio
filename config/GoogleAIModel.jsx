

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Reference to : {\n   \"time\": 1550476186479,\n   \"blocks\": [\n      {\n         \"id\": \"oUq2g_tl8y\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"Editor.js\",\n            \"level\": 2\n         }\n      },\n      {\n         \"id\": \"zbGZFPM-iI\",\n         \"type\": \"paragraph\",\n         \"data\": {\n            \"text\": \"Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.\"\n         }\n      },\n      {\n         \"id\": \"qYIGsjS5rt\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"Key features\",\n            \"level\": 3\n         }\n      },\n      {\n         \"id\": \"XV87kJS_H1\",\n         \"type\": \"list\",\n         \"data\": {\n            \"style\": \"unordered\",\n            \"items\": [\n               \"It is a block-styled editor\",\n               \"It returns clean data output in JSON\",\n               \"Designed to be extendable and pluggable with a simple API\"\n            ]\n         }\n      },\n      {\n         \"id\": \"AOulAjL8XM\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"What does it mean «block-styled editor»\",\n            \"level\": 3\n         }\n      },\n      {\n         \"id\": \"cyZjplMOZ0\",\n         \"type\": \"paragraph\",\n         \"data\": {\n            \"text\": \"Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\\\"cdx-marker\\\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core.\"\n         }\n      }\n   ],\n   \"version\": \"2.8.1\"\n}"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"time\": 1678872033545,\n  \"blocks\": [\n    {\n      \"id\": \"glossary-header\",\n      \"type\": \"header\",\n      \"data\": {\n        \"text\": \"Glossary\",\n        \"level\": 1\n      }\n    },\n    {\n      \"id\": \"todo-list-header\",\n      \"type\": \"header\",\n      \"data\": {\n        \"text\": \"TODO List\",\n        \"level\": 2\n      }\n    },\n    {\n      \"id\": \"todo-list-block\",\n      \"type\": \"list\",\n      \"data\": {\n        \"style\": \"unordered\",\n        \"items\": [\n          \"**Define terms** for the Glossary\"\n        ]\n      }\n    },\n    {\n      \"id\": \"glossary-header-2\",\n      \"type\": \"header\",\n      \"data\": {\n        \"text\": \"Glossary\",\n        \"level\": 2\n      }\n    },\n    {\n      \"id\": \"glossary-table\",\n      \"type\": \"table\",\n      \"data\": {\n        \"withHeadings\": true,\n        \"content\": [\n          [\n            {\n              \"text\": \"Term\",\n              \"type\": \"text\"\n            },\n            {\n              \"text\": \"Definition\",\n              \"type\": \"text\"\n            }\n          ]\n        ]\n      }\n    }\n  ],\n  \"version\": \"2.26.3\"\n}\n```\n\n**Explanation:**\n\n* **\"time\"**:  This is a timestamp, usually used to track changes to the document.\n* **\"blocks\"**: This is an array that contains all the blocks of content in your document.\n* **\"id\"**: Each block has a unique ID for reference.\n* **\"type\"**: The type of block. We are using `header`, `list`, and `table`.\n* **\"data\"**: Data specific to the block type. \n    * **\"header\"**: Contains the `text` of the heading and its `level`.\n    * **\"list\"**: Contains the `style` (`unordered`) and an array of `items` for the list.\n    * **\"table\"**: Contains `withHeadings` (if it has a header row) and `content` which is a 2D array representing the table rows and columns.\n\n**How to use this template:**\n\n1. **Populate the TODO List:** Add more items to the `items` array within the `todo-list-block`.\n2. **Populate the Glossary:** \n   *  **\"glossary-table\"**: \n      * Add rows to the `content` array to define your glossary terms. \n      * Each row is an array with two elements: the term and its definition.\n\n**Additional Notes:**\n\n* This is a basic template. You can add more complex blocks, like images or code snippets, based on the Editor.js plugins you are using.\n* The `version` field might need to be adjusted depending on the version of Editor.js you are using.\n* This template assumes you are using the `Table` plugin for Editor.js. \n* You can customize the text within the blocks to fit your specific glossary and TODO list needs. \n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  