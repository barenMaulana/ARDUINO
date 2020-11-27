#include <SPI.h>
#include <deprecated.h>
#include <MFRC522.h>
#include <MFRC522Extended.h>
#include <require_cpp11.h>
#include <WiFi.h>
#include <HTTPClient.h>
#define SS_PIN 21  
#define RST_PIN 22 

const char* ssid     = "LAB KOMPUTER";
const char* password = "labserver";
String url = "http://wameapp.000webhostapp.com/user/";
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance

boolean reconnect() {
  WiFi.begin(ssid, password);

   int retry = 51;
  while (WiFi.status() != WL_CONNECTED) {
    if (retry > 50) {
      Serial.println("");
      Serial.printf("Trying connect to %s", ssid);
      retry = 0;
    }
    delay(100);
    Serial.print(".");
    retry++;
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.print("IP address: ");
  Serial.println("");
  Serial.println(WiFi.localIP());
  Serial.println("Tempelkan kartu");
}

String logToServer(unsigned long cardUID) {

  delay(700);

//  Serial.printf("Send Request to %s%u\n", url.c_str(), cardUID);
  HTTPClient http;

  http.begin(url + cardUID); //HTTP
  int httpCode = http.GET();
  if (httpCode > 0) {
    Serial.printf("[HTTP] GET... code: %d\n", httpCode);
    
    int masterKey = 3647998394; 
    if(httpCode == HTTP_CODE_OK || masterKey == cardUID) {
      String payload = http.getString();
        Serial.println("Silahkan masuk!");
      Serial.println(payload);
    }else if(httpCode == HTTP_CODE_BAD_REQUEST){
     String payload = http.getString();
     Serial.println("Anda tidak terdaftar disini!");
  }
  }
  else {
    Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
  }
  http.end();

}

void setup() {
  Serial.begin(9600);
  
  Serial.println("");
  delay(100);

  reconnect();

  SPI.begin();        // Init SPI bus
  mfrc522.PCD_Init(); // Init MFRC522 card

  //If you set Antenna Gain to Max it will increase reading distance
  mfrc522.PCD_SetAntennaGain(mfrc522.RxGain_max);
}

unsigned long getCardUID() {
  if ( !mfrc522.PICC_ReadCardSerial()) { //Since a PICC placed get Serial and continue
    return -1;
  }
  unsigned long hex_num;
  hex_num =  mfrc522.uid.uidByte[0] << 24;
  hex_num += mfrc522.uid.uidByte[1] << 16;
  hex_num += mfrc522.uid.uidByte[2] <<  8;
  hex_num += mfrc522.uid.uidByte[3];
  mfrc522.PICC_HaltA(); // Stop reading
  return hex_num;
}

int wait = 51;

void loop() {
  if (WiFi.status() != WL_CONNECTED)
    reconnect();

  if (wait > 50) {
    Serial.println("");
    wait = 0;
  }

  Serial.print("");

  wait++;

  if (wait % 2 == 0)
    Serial.println("asd");
  else
    Serial.println("asd");

  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) {
    delay(30);
    return;
  }

  unsigned long cardUID = getCardUID();
  Serial.println(cardUID);
  delay(5000);

  for (int i = 0; i < 3; i++) {
    delay(30);
      Serial.println("indikasi1");
    delay(30);
  }

  if (cardUID == -1) {
    Serial.println("Failed to get UID");
    return;
  }

  Serial.printf("\nCard UID is %u\n", cardUID);

  for (int i = 0; i < 3; i++) {
    Serial.println("indikasi2");
    delay(30);
    Serial.println("indikasi3");
    delay(30);
  }

  logToServer(cardUID);

  wait = 51;
}
