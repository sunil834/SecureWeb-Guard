SecureWeb-Guard
SecureWeb-Guard is a Chrome extension designed to protect users from phishing websites. By comparing site URLs against a large database of known phishing sites, SecureWeb-Guard alerts users when they access potentially harmful sites, helping them stay safe online.

Features
Real-Time Phishing Detection: Continuously monitors and checks URLs against a database of phishing websites.
Desktop Notifications: Notifies users with a pop-up alert when they navigate to a flagged phishing site.
Safe Browsing Indicator: Clearly indicates when a site is deemed safe.
Customizable Dark/Light Theme: Allows users to toggle between dark and light modes for a better visual experience.
Badge Indicator: Shows a warning badge on the extension icon for quick visual cues of potential threats.
Installation
To install the SecureWeb-Guard Chrome extension locally:

Download or clone this repository:
bash
Copy code
git clone https://github.com/sunil834/SecureWeb-Guard.git
Open Chrome and navigate to chrome://extensions/.
Enable Developer mode (toggle in the upper right corner).
Click Load unpacked and select the folder where you cloned this repository.
The extension should now appear in your toolbar.
How It Works
URL Checking: The extension loads a list of known phishing URLs from urls.txt and stores them in an IndexedDB database.
Tab Monitoring: The extension actively monitors the active tab’s URL. If the URL matches a known phishing site, a warning notification and badge appear.
User Alert: When a user opens a flagged site, they will receive a desktop notification, and a warning icon will appear in the extension popup.
Safe Sites: If the site is safe, a green “This site is safe” message is displayed.
Files Overview
manifest.json: Defines the extension settings and permissions.
background.js: Contains the core logic for checking URLs against the phishing list and triggering notifications.
popup.html: The HTML structure for the extension’s popup interface.
popup.js: Controls popup behavior, such as theme toggling and displaying phishing status.
styles.css: Manages the styling of the popup, including light/dark themes.
urls.txt: A text file containing the database of known phishing URLs.
Usage
After installation, SecureWeb-Guard will run in the background, monitoring URLs as you browse.
Click the extension icon to view the security status of the current site. The popup will show:
A red warning if the site is flagged as phishing.
A green message if the site is safe.
Enable or disable Dark Theme from the popup menu as desired.
Development & Contributions
If you'd like to contribute:

Fork this repository.
Create a new branch with your feature or bug fix.
Submit a pull request for review.
Issues
If you encounter issues or have feature requests, please open an issue on this repository.

License
This project is licensed under the MIT License.

Contact
For further questions, please contact.
