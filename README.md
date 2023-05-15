# Readme for OpenAI API Image Generation App

This is a basic Express.js web application (Node.js), in which you can generate images using the OpenAI API.

## Getting Started

To begin using this app, follow these steps:

* Clone this repository to your local machine, and navigate to the project's root directory.
* Run npm install in your terminal to install the app's dependencies.
* Create a .env file in the root directory with your OpenAI API key, in the following format:


```javascript
API_KEY=<your_api_key_here>
```





Start the app with `npm run start:frontend` and `npm run start:backend`.
Once the app is running, navigate to http://localhost:3000 in your browser and use the provided UI to upload an image and prompt.

## Uploading Images

In order to upload an image to the app, you can use the file input on the app's home page. The uploaded image will be temporarily stored on the backend, in the public folder.

## Generating Images

The app allows you to generate images using OpenAI's DALL-E 2 API. To generate an image, you should add a prompt, which will be used to guide the AI in creating the image.

Once you have added a prompt, click the "Generate" button. The app will send a POST request to the /images endpoint, which will trigger a function that uses the OpenAI API to generate the image. The generated image will be displayed on the results page and can be downloaded by clicking the "Download" button.

## Dependencies

This app uses the following dependencies:

* express
* cors
* dotenv
* multer
* openai

## Credits

This app was created by Felix Petzsche. If you find any issues or have suggestions for improving the app, please submit an issue or pull request.