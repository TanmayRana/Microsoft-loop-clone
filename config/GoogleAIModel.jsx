/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

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
        {
          text: 'Reference to:{\n   "time": 1550476186479,\n   "blocks": [\n      {\n         "id": "oUq2g_tl8y",\n         "type": "header",\n         "data": {\n            "text": "Editor.js",\n            "level": 2\n         }\n      },\n      {\n         "id": "zbGZFPM-iI",\n         "type": "paragraph",\n         "data": {\n            "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."\n         }\n      },\n      {\n         "id": "qYIGsjS5rt",\n         "type": "header",\n         "data": {\n            "text": "Key features",\n            "level": 3\n         }\n      },\n      {\n         "id": "XV87kJS_H1",\n         "type": "list",\n         "data": {\n            "style": "unordered",\n            "items": [\n               "It is a block-styled editor",\n               "It returns clean data output in JSON",\n               "Designed to be extendable and pluggable with a simple API"\n            ]\n         }\n      },\n      {\n         "id": "AOulAjL8XM",\n         "type": "header",\n         "data": {\n            "text": "What does it mean «block-styled editor»",\n            "level": 3\n         }\n      },\n      {\n         "id": "cyZjplMOZ0",\n         "type": "paragraph",\n         "data": {\n            "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\\"cdx-marker\\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core."\n         }\n      }\n   ],\n   "version": "2.8.1"\n}\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "time": 1687856421857,\n  "blocks": [\n    {\n      "id": "h9K4T_8y",\n      "type": "header",\n      "data": {\n        "text": "Grocery TODO List",\n        "level": 1\n      }\n    },\n    {\n      "id": "2k3jH4p-iI",\n      "type": "paragraph",\n      "data": {\n        "text": "This is your grocery list. Use the "+" button to add items and check them off as you shop."\n      }\n    },\n    {\n      "id": "98j75hS5rt",\n      "type": "list",\n      "data": {\n        "style": "unordered",\n        "items": [\n          "Milk",\n          "Eggs",\n          "Bread",\n          "Cheese"\n        ]\n      }\n    }\n  ],\n  "version": "2.8.1"\n}\n```\n\n**Explanation:**\n\n- **"time"**: Timestamp of the data, not crucial for this example.\n- **"blocks"**: Array of blocks, representing the content of the editor.\n- **"header"**:  \n    - "text":  The title of the list ("Grocery TODO List").\n    - "level": The heading level (1 for the main title).\n- **"paragraph"**:\n    - "text": Instructions for using the list.\n- **"list"**: \n    - "style": "unordered" for a bulleted list.\n    - "items": An array of strings representing each grocery item.\n\n**How to Use:**\n\n- **Editor.js Integration:** Use the JSON data to initialize Editor.js. You\'ll need to create a plugin for the list block that allows users to add and remove items. \n- **Data Handling:** The Editor.js API will allow you to save and load this JSON data.\n\n**Customization:**\n\n- **More Blocks:** Add other block types (e.g., for categories, notes).\n- **Plugins:** Use custom plugins for features like checkboxes, quantity input, etc. \n- **Styling:** Customize the appearance of the list using CSS. \n',
        },
      ],
    },
  ],
});
