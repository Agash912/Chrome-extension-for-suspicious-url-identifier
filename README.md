# Chrome Extension for Suspicious URL Detection

## Introduction
The web is vast and full of wonders, yet not every corner is safe. Malicious URLs lurk in the shadows, posing threats to cybersecurity. This Chrome Extension emerges as a vigilant guardian, assessing the safety of URLs in real-time and providing users with a percentage indicator of their security.

## Description
Harnessing the power of a Random Forest Classifier Algorithm, trained on a comprehensive dataset, this extension excels in the detection of suspicious URLs. Hosted on AWS EC2, the machine learning model boasts high availability and scalability. Through a RESTful web API crafted with FastAPI, the extension communicates with the model, swiftly analyzing URLs and returning a safety score.


<img width="516" alt="Screenshot 2022-10-31 at 1 00 11 AM" src="https://user-images.githubusercontent.com/112348271/198897885-fe0f393d-8444-4ae7-9c89-3439f10d0f5d.png">


## Installation Instructions
1. Clone or download the 'Chrome_extension' folder from the GitHub repository.
2. Open Chrome and navigate to 'chrome://extensions/'.
3. Toggle 'Developer mode' to on at the top right.
4. Click 'Load unpacked' and select the extension folder.
Refer to the [Chrome Extension Development guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/) for more details on local extension installation.

## Demo
Access the video demonstration here: 

https://user-images.githubusercontent.com/112348271/198740806-f6c7e09c-8ac9-4956-bb07-f395adf33c97.MP4

## Features and Benefits
- **Safety Percentage Indicator**: Offers a quantifiable measure of URL safety.
- **Real-Time Analysis**: Processes and returns safety assessments instantaneously.
- **AWS EC2 Hosting**: Guarantees the machine learning model's uptime and scalability.
- **FastAPI Integration**: Ensures efficient communication between the extension and the model.
- **User-Centric Design**: Crafted with HTML, CSS, and JavaScript for an optimal user experience.
- **Proactive Security**: Minimizes the risk of exposure to potentially harmful websites.

## Usage
After installation, the extension will be accessible via the browser's toolbar. Clicking the extension icon will reveal the safety percentage of the current website's URL.


## Credits
This project utilizes the following resources:
- [FastAPI](https://fastapi.tiangolo.com/)
- [AWS EC2](https://aws.amazon.com/ec2/)
- [Random Forest Classifier](https://en.wikipedia.org/wiki/Random_forest)

## License
This project is licensed under the MIT License - see [LICENSE](#) for details.

