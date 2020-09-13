#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include "MFRC522.h"

const char* ssid     = "Bening";
const char* password = "12345678";
String url = "http://wameapp.000webhostapp.com/user/";

#define RST_PIN D4
#define SS_PIN  D2
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance

boolean reconnect() {
  digitalWrite(D0,HIGH);
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

//  Serial.printf("Send Request to %s%u\n", url.c_str(), cardUID);
  HTTPClient http;

  http.begin(url + cardUID); //HTTP
  int httpCode = http.GET();
  if (httpCode > 0) {
    Serial.printf("[HTTP] GET... code: %d\n", httpCode);

    if (httpCode == HTTP_CODE_OK) {
      String payload = http.getString();

        Serial.println("Silahkan masuk!");
        digitalWrite(D0, LOW);
        delay(5000);
        digitalWrite(D0, HIGH);
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
  pinMode(D0, OUTPUT);
  pinMode(D1, OUTPUT);
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
    digitalWrite(D1, HIGH);
  else
    digitalWrite(D1, LOW);

  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) {
    delay(30);
    return;
  }

  unsigned long cardUID = getCardUID();

  for (int i = 0; i < 3; i++) {
    digitalWrite(D1, HIGH);
    delay(30);
    digitalWrite(D1, LOW);
    delay(30);
  }

  if (cardUID == -1) {
    Serial.println("Failed to get UID");
    return;
  }

  Serial.printf("\nCard UID is %u\n", cardUID);

  for (int i = 0; i < 3; i++) {
    digitalWrite(D1, HIGH);
    delay(30);
    digitalWrite(D1, LOW);
    delay(30);
  }

  logToServer(cardUID);

  wait = 51;
}
