# Web-Guard: Advanced Phishing Protection Chrome Extension

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Files Overview](#files-overview)
- [Usage](#usage)
- [Development & Contributions](#development--contributions)
- [Issues](#issues)
- [License](#license)
- [Contact](#contact)

## Introduction
**Web-Guard** is a cutting-edge Chrome extension designed to enhance online security by protecting users from phishing websites. Utilizing a dynamic database of known phishing URLs, Web-Guard offers real-time detection and alerts, ensuring users navigate the web safely without falling prey to phishing scams.

## Features

- **Real-Time Phishing Detection**: Instantly verifies URLs against a continuously updated database of phishing sites.
- **Alert Notifications**: Provides immediate pop-up notifications when potential phishing attempts are detected.
- **Safe Browsing Indicator**: Employs a color-coded system in the browser toolbar to indicate website safety status.
- **Customizable Themes**: Offers users the choice between a soothing dark theme and a bright light theme to enhance user experience.
- **Badge Alerts**: Integrates badge icons on the extension's toolbar icon as a quick reference to site safety.
- **Efficient Data Storage**: Uses Chrome's IndexedDB to store phishing URLs locally for rapid access and minimal performance impact.

## Installation

To install Web-Guard on your Chrome browser, follow these steps:

1. Clone the Web-Guard repository:
    ```bash
    git clone https://github.com/sunil834/Web-Guard.git
    ```

2. Open Chrome and go to `chrome://extensions/`.

3. Activate **Developer mode** at the top right.

4. Click **Load unpacked** and select the folder where you cloned the Web-Guard repository.

5. Web-Guard will now be active and visible in your browser's extension area.

## How It Works

### URL Verification
- Upon browsing, Web-Guard checks each website's URL against its phishing database, which is updated regularly to include new phishing sources.

### Active Tab Monitoring & User Notifications
- Continuously monitors URLs of active tabs to detect phishing sites.
- Displays immediate alerts and changes the toolbar badge color if a threat is detected, providing visual cues to the user about the site's credibility.

### Alert Management
- When a phishing site is detected, users are alerted with a desktop notification and a detailed warning in the extension popup.
- For safe sites, a green "This site is safe" badge is displayed in the popup.

## Files Overview

- **manifest.json**: Defines extension settings, permissions, and background scripts.
- **background.js**: Implements the logic for URL checking and alert management.
- **popup.html** and **popup.js**: Control the user interface and interactions within the extension popup.
- **styles.css**: Manages all styling concerns for the popup, ensuring the extension is both functional and visually appealing.
- **urls.txt**: A crucial file that contains the list of URLs identified as phishing threats.

## Usage

- **Background Protection**: Web-Guard operates in the background, automatically scanning all sites visited.
- **Manual Checks**: Users can click on the extension icon to get a real-time safety status of the current page.
- **Theme Customization**: Adjust the theme from the popup based on your preference for either dark or light mode.

## Development & Contributions

Contributions to Web-Guard are highly encouraged, whether they are feature enhancements, bug fixes, or documentation improvements. Here's how you can contribute:

1. **Fork the repository** on GitHub.
2. **Create a new branch** for your modifications.
3. **Commit changes** and **push** to your fork.
4. **Submit a pull request** with a comprehensive description of changes.

## Issues

Feel free to report issues or suggest new features by opening an issue on the GitHub repository page.

## License

Web-Guard is made available under the **MIT License**, which allows for redistribution and use with few restrictions. See the `LICENSE` file for full details.

## Contact

For further information or support, contact the project maintainer, through [his GitHub profile](https://github.com/sunil834).
