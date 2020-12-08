#include <DFPlayer_Mini_Mp3.h>
#include <SoftwareSerial.h>

#define PIN_BUSY A0

SoftwareSerial mp3Serial(D3, D4); // RX, TX

void setup () {
  pinMode(PIN_BUSY, INPUT);
  Serial.begin (115200);
  Serial.println("Setting up software serial");
  mp3Serial.begin (9600);
  Serial.println("Setting up mp3 player");
  mp3_set_serial (mp3Serial);  
  // Delay is required before accessing player. From my experience it's ~1 sec
  delay(1000); 
  mp3_set_volume (15);
}

void loop () {
  Serial.println("Stop");
  mp3_stop ();
  Serial.print("Busy: ");
  Serial.println(analogRead(PIN_BUSY));
  delay(500);
  
  Serial.println("play next");
  mp3_next ();
  Serial.print("Busy: ");
  Serial.println(analogRead(PIN_BUSY));
  delay (12000);
}
