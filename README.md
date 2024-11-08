# SecureWeb-Guard: Advanced Phishing Protection Chrome Extension

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
SecureWeb-Guard is a comprehensive Chrome extension designed to safeguard users against phishing websites. By leveraging a robust database of known phishing sites, SecureWeb-Guard identifies and alerts users when they visit potentially harmful sites, ensuring a safer browsing experience.

## Features

- **Real-Time Phishing Detection**: Continuously checks URLs against an extensive database of phishing websites.
- **Desktop Notifications**: Alerts users with pop-up notifications when they access flagged phishing sites.
- **Safe Browsing Indicator**: Shows a clear visual indicator when a site is considered safe.
- **Customizable Dark/Light Theme**: Users can switch between dark and light modes for an optimal viewing experience.
- **Badge Indicator**: Displays a warning badge on the extension icon as a quick visual cue for potential threats.
- **Local Database Storage**: Utilizes IndexedDB for efficient local storage of known phishing URLs, allowing quick lookups.

## Installation

Follow these steps to install the SecureWeb-Guard Chrome extension locally:

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/sunil834/SecureWeb-Guard.git
    ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable **Developer mode** using the toggle in the upper right corner.

4. Click **Load unpacked** and select the folder containing the cloned repository.

5. The extension should now appear in your toolbar, ready for use.

## How It Works

### URL Checking
- The extension loads a list of known phishing URLs from `urls.txt` and saves them into an IndexedDB database for quick reference.
- Monitors the active browser tab's URL, checking it in real-time against the database.

### Tab Monitoring & Notifications
- Actively scans the active tab for URL matches with known phishing sites.
- If a match is found, a warning notification and badge indicator are displayed, alerting the user of the potential threat.

### User Alerts
- Users receive a desktop notification upon visiting a flagged phishing site, and the extension's popup displays a red warning message.
- Safe sites are indicated by a green "This site is safe" message within the extension popup.

## Files Overview

- **manifest.json**: Contains the configuration, permissions, and settings for the extension.
- **background.js**: Core logic for monitoring URLs and generating alerts.
- **popup.html**: Structure of the popup interface shown when the extension icon is clicked.
- **popup.js**: Handles popup behavior, including theme toggling and displaying site status.
- **styles.css**: Defines the appearance of the popup, including theme styling.
- **urls.txt**: Text file holding the list of known phishing URLs.

## Usage

1. Once installed, SecureWeb-Guard runs silently in the background, checking URLs as you browse.
2. Click the extension icon to open the popup and view the security status of the current site:
   - **Red warning** for flagged phishing sites.
   - **Green message** for safe sites.
3. Toggle the Dark/Light Theme from the popup for a preferred visual display.

## Development & Contributions

Want to contribute to SecureWeb-Guard? Here’s how:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix.
3. **Submit a pull request** for review and inclusion.

## Issues

For any issues or feature requests, please open an issue on the repository's GitHub page.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

For questions or further assistance, please contact Sunil at [GitHub Profile](https://github.com/sunil834).

--- 

Contributions, feedback, and suggestions are always welcome!
