#include <Servo.h>
Servo myservo;  
int sudut= 90;
void setup(){
 myservo.attach(D5);
}
void loop(){
   myservo.write(sudut); 
}
