#include "CTBot.h"
CTBot myBot;

String ssid  = "Bening"    ; // REPLACE mySSID WITH YOUR WIFI SSID
String pass  = "12345678"; // REPLACE myPassword YOUR WIFI PASSWORD, IF ANY
String token = "1226409795:AAHRMT-QlFn6DOP6Gfw13W8p8SvBYc6DNGc"   ; // REPLACE myToken WITH YOUR TELEGRAM BOT TOKEN

void setup() {
  // initialize the Serial
  Serial.begin(115200);
  Serial.println("Starting TelegramBot...");

  // connect the ESP8266 to the desired access point
  myBot.wifiConnect(ssid, pass);

  // set the telegram bot token
  myBot.setTelegramToken(token);
  
  // check if all things are ok
  if (myBot.testConnection())
    Serial.println("\ntestConnection OK");
  else
    Serial.println("\ntestConnection NOK");
}

void loop() {
  // a variable to store telegram message data
  TBMessage msg;

  // if there is an incoming message...
  if (myBot.getNewMessage(msg))
    // ...forward it to the sender
    myBot.sendMessage(msg.sender.id, msg.text);
   
  // wait 500 milliseconds
  delay(500);
}
