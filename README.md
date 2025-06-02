# WhatsApp Message Scheduler

A simple desktop application to schedule WhatsApp messages using Python and HTML.

## Overview

This project combines a Python backend with an HTML/CSS/JS frontend to provide a user-friendly interface for scheduling WhatsApp messages. The UI is displayed using [pywebview](https://pywebview.flowrl.com/), allowing you to interact with the app like a native desktop program.

## Features

- Schedule WhatsApp messages to any pakistani number.
- Easy-to-use graphical interface.
- Alerts and notifications for scheduled messages.
- No need to use WhatsApp on your phone—messages are sent via WhatsApp Web.

## How It Works

1. Enter the recipient's WhatsApp number ( without the leading 0 ).
2. Type your message.
3. Set the time you want the message to be sent.
4. Click "Deploy Message!" to schedule.

The app will open WhatsApp Web in your browser and send the message at the specified time.

## Requirements

- Python 3.7 or higher
- Google Chrome (for WhatsApp Web)
- The following Python packages:
  - pywebview
  - pywhatkit
  - pyautogui

## Installation

1. **Clone this repository:**

   ```sh

   ```

2. **Install dependencies:**

   ```sh
   pip install pywebview pywhatkit pyautogui
   ```

3. **Run the application:**
   ```sh
   python main.py
   ```

## Project Structure

```
whatsapp_scheduler/
│
├── main.py
├── src/
│   ├── index.html
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   └── script.js
│   │   ├── fonts/
│   │   │    └── HomeVideo-BLG6G.ttf
│   │   ├── img/
│   │   │     └── Screenshot 2025-06-03 014912.png
```

## Screenshots

![App Screenshot](src/assets/img/Screenshot%202025-06-03%20014912.png)

## Notes

- Make sure you are logged into WhatsApp Web in your browser before scheduling messages.
- The country code in the script is set to `+92` (Pakistan). Change it in `main.py` if you need a different country code.

## License

This project is licensed under the MIT License.

---

Made with ❤️ using Python and HTML.
