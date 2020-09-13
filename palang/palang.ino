#include <MFRC522.h>
#include <MFRC522Extended.h>
#include <require_cpp11.h>
#include <deprecated.h>

#include <SPI.h>
#include <WiFi.h>
#include <HTTPClient.h>
#define SS_PIN 21  
#define RST_PIN 22 
 
MFRC522 mfrc522(SS_PIN, RST_PIN); 

const char* ssid = "Bening"; //Nama WiFi
const char* password = "12345678"; //Password WiFi
 
void setup()
{
  Serial.begin(115200); 
  SPI.begin();    
  mfrc522.PCD_Init();   
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(200);
    Serial.println("Menyambungkan ke wifi...");
  }
  Serial.print("Use this URL to connect: ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");
}
void loop()
{
  if ((WiFi.status() == WL_CONNECTED)) {
    
    if ( ! mfrc522.PICC_IsNewCardPresent())
    {
      return;
    }
    if ( ! mfrc522.PICC_ReadCardSerial())
    {
      return;
    }
    Serial.println();
    Serial.print(" UID tag : ");
    String content = "";
    byte letter;
    for (byte i = 0; i < mfrc522.uid.size; i++)
    {
      Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? "0" : "");
      Serial.print(mfrc522.uid.uidByte[i], HEX);
      content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : ""));
      content.concat(String(mfrc522.uid.uidByte[i], HEX));
    }
    
    content.toUpperCase();
    Serial.println(); 
    
   HTTPClient http;    
     http.begin("http://covidid.000webhostapp.com/get.php?id=" + String(content)); 
         int httpCode = http.GET();
      if (httpCode > 0) {
        String payload = http.getString();
        Serial.print("RESPONE = ");
        Serial.print(payload);
      }else{
        Serial.println("error bre, di http request");
      }
      
       http.end(); 
  }         
  delay(100);
}
