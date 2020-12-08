#include <AccelStepper.h> //library motor stepper

#define echoPin 2 // attach pin D2 Arduino to pin Echo of HC-SR04
#define trigPin 3 //attach pin D3 Arduino to pin Trig of HC-SR04

// defines variables
long duration; // variable for the duration of sound wave travel
int distance; // variable for the distance measurement

#define HALFSTEP 8        // definisi jumlah step

// definisi pin Arduino pada driver motor

#define motorPin1 11 // IN1 pada ULN2003 driver 1

#define motorPin2 10 // IN2 pada ULN2003 driver 1

#define motorPin3 9 // IN3 pada ULN2003 driver 1

#define motorPin4 8 // IN4 pada ULN2003 driver 1

// inisiasi urutan pin IN1-IN3-IN2-IN4 untuk library AccelStepper dengan motor 28BYJ-48

AccelStepper stepper1(HALFSTEP, motorPin1, motorPin3, motorPin2, motorPin4);

void setup() {
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an OUTPUT
  pinMode(echoPin, INPUT); // Sets the echoPin as an INPUT
  
  Serial.begin(9600); // // Serial Communication is starting with 9600 of baudrate speed
  Serial.println("Ultrasonic Sensor HC-SR04 Test"); // print some text in Serial Monitor
  Serial.println("with Arduino UNO R3");

 stepper1.setMaxSpeed(3000.0);    //setting kecepatan maksimal motor
 stepper1.setAcceleration(1000.0); //setting akselerasi
 stepper1.setSpeed(3000);            //setting kecepatan
 stepper1.moveTo(3000);        //setting untuk bergerak 3 putaran penuh
}

void loop() {
  // Clears the trigPin condition
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin HIGH (ACTIVE) for 10 microseconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  // Calculating the distance
  distance = duration * 0.034 / 2; // Speed of sound wave divided by 2 (go and back)
  // Displays the distance on the Serial Monitor
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  if(distance <= 140){
   if (stepper1.distanceToGo() == 0)
     {
      stepper1.moveTo(-stepper1.currentPosition());
      Serial.println(stepper1.currentPosition());
     }
  stepper1.run(); // perintah menjalankan motor stepper
  }else if(distance >= 140){
       if (stepper1.distanceToGo() == 0)
     {
      stepper1.moveTo(-stepper1.currentPosition());
      Serial.println(stepper1.currentPosition());
     }
  stepper1.stop(); // perintah menjalankan motor stepper
  }else{
       if (stepper1.distanceToGo() == 0)
     {
      stepper1.moveTo(-stepper1.currentPosition());
      Serial.println(stepper1.currentPosition());
     }
  stepper1.stop(); // perintah menjalankan motor stepper
  }
}
