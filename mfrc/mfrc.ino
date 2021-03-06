#include <SPI.h>
#include <MFRC522.h>
 
constexpr uint8_t RST_PIN = 9;          
constexpr uint8_t SS_PIN = 10;  
 
MFRC522 mfrc522(SS_PIN, RST_PIN); 
 
void setup() {
  Serial.begin(115200); 
  while (!Serial);  
  SPI.begin();      
  mfrc522.PCD_Init();   
//  mfrc522.PCD_DumpVersionToSerial();  
  Serial.println(F("Scan PICC to see UID, SAK, type, and data blocks..."));
}
 
void loop() {
  
  if ( ! mfrc522.PICC_IsNewCardPresent()) {
    return;
  } 
  if ( ! mfrc522.PICC_ReadCardSerial()) {
    return;
  }
  mfrc522.PICC_DumpToSerial(&(mfrc522.uid));
}
