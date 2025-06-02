import webview
import pywhatkit
import pyautogui

class API:
    def send_message(self,targetNumber,userMessage,timeToSend):
        try:
            pyautogui.alert(f"Message to {targetNumber} scheduled successfully at {timeToSend}!","Message Scheduled Successfully!",timeout=5000)
            pywhatkit.sendwhatmsg("+92"+targetNumber, userMessage, int(timeToSend[0:2]), int(timeToSend[3:]), 10, True, 5)
        except Exception as e:
            pyautogui.alert(f"Error : {e}","Error")
            
    def processInput(self, userInput):
        try:
            userInput = int(userInput)
            print(f"User input received: {userInput}")
            print(type(userInput))
        except ValueError:
            pass
    
    # def deploySuccess(self,response):
    #     response = "successfully!"
    #     return response


if __name__ == '__main__':
    api = API()
    window = webview.create_window('WhatsApp Message Scheduler', 'src/index.html', js_api=api,width=(400),height=(600),min_size=(400,600),resizable=False)
    webview.start()