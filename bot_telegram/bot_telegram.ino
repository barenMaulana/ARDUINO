#include "CTBot.h"
CTBot myBot;
String ssid = "Bening";
String pass = "12345678";
String token = "1226409795:AAHRMT-QlFn6DOP6Gfw13W8p8SvBYc6DNGc";
byte led = 16;
const int id = 936592892;

void setup() {
Serial.begin(9600);
pinMode(led,OUTPUT);
Serial.println("Starting Sipollux_bot...");
myBot.wifiConnect(ssid,pass);
myBot.setTelegramToken(token);

if(myBot.testConnection()){
  digitalWrite(led, HIGH);
  Serial.println("Connected");
}else{
  Serial.println("Not connected");
}

  myBot.sendMessage(id,"selamat datang baren!");
  Serial.println("pesan terkirim");
}

void loop() {
  TBMessage msg;
  if(myBot.getNewMessage(msg)){
    Serial.println(msg.text);
  }else{
    Serial.println("tidak ada pesan baru");
  }

}
