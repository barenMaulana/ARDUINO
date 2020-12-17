#include <DFPlayer_Mini_Mp3.h>
#include <SoftwareSerial.h>
#include <Servo.h>

#define PIN_BUSY A0
#define triggerPin  D8
#define echoPin D7
Servo myservo;  
int sudut= 140;

SoftwareSerial mp3Serial(D3, D4); // RX, TX

void setup () {
  pinMode(PIN_BUSY, INPUT);
  Serial.begin (9600);
  Serial.println("Setting up software serial");
  mp3Serial.begin (9600);
  Serial.println("Setting up mp3 player");
  mp3_set_serial (mp3Serial);  
  // Delay is required before accessing player. From my experience it's ~1 sec
  delay(1000); 
  mp3_set_volume (50);

  //ultrasonic
  pinMode(triggerPin, OUTPUT);
  pinMode(echoPin, INPUT);  

  //servo
  myservo.attach(D5);  
}

  int lompatan = 0;

void loop () {

  long duration, jarak;
  digitalWrite(triggerPin, LOW);
  delayMicroseconds(2); 
  digitalWrite(triggerPin, HIGH);
  delayMicroseconds(10); 
  digitalWrite(triggerPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  jarak = (duration/2) / 29.1;
  Serial.println("jarak :");
  Serial.print(jarak);
  Serial.println(" cm");

//  if(lompatan == 4){
//    for(int j = 0; j <= 3; j++){
//      myservo.write(0); 
//      Serial.println("play next");
//      mp3_next ();
//      Serial.println(lompatan);
//      Serial.print("Busy: ");
//      Serial.println(analogRead(PIN_BUSY));
//      delay (1000);
//
//          myservo.write(sudut); 
//    Serial.println("Stop");
//    mp3_stop ();
//    Serial.print("Busy: ");
//    Serial.println(analogRead(PIN_BUSY));
//    }
//  }
  
  if(jarak <= 30){
    lompatan++;

     if(lompatan >= 4){ 
       for(int i = 1; i <= 4; i++){
          mp3_next ();
        }
     }
    
    myservo.write(0); 
    Serial.println("play next");
    mp3_next ();
    Serial.println(lompatan);
    Serial.print("Busy: ");
    Serial.println(analogRead(PIN_BUSY));
    if(lompatan == 4){  
      for(int i = 1; i <= 3; i++){
            mp3_next ();
            mp3_stop ();
          }
    }else{
    delay (6000);
    }
  }

    myservo.write(sudut); 
    Serial.println("Stop");
    mp3_stop ();
    Serial.print("Busy: ");
    Serial.println(analogRead(PIN_BUSY));
}
