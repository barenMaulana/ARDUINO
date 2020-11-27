#define Joystick_x D2
#define Joystick_y D1
#define onlyAnalogPin A0

void setup() {
// put your setup code here, to run once:
Serial.begin(9600);
pinMode(Joystick_x, OUTPUT);
pinMode(Joystick_y, OUTPUT);
digitalWrite(Joystick_x, LOW);
digitalWrite(Joystick_y, LOW);
}

function click (level)
  gpio.write(0,level)
  print(level)
end

gpio.mode(0,gpio.OUTPUT)
gpio.trig(3,"both",click

void loop() {
int x,y;
x= joystickRead(Joystick_x);
y= joystickRead(Joystick_y);
Serial.print(“X = “);
Serial.print(x, DEC);
Serial.print(”Y = “);
Serial.print(y, DEC);
Serial.println();
delay(20);
// put your main code here, to run repeatedly:

}

int joystickRead(int pin) {
digitalWrite(pin, HIGH);
delay(30);
int read = analogRead(onlyAnalogPin);
digitalWrite(pin, LOW);
return read;

}
