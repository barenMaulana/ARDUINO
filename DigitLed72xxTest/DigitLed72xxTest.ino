#include <SPI.h>
#include "LedMatrix.h"

#define NUMBER_OF_DEVICES 1
#define CS_PIN 4
LedMatrix ledMatrix = LedMatrix(NUMBER_OF_DEVICES, CS_PIN);
 
void setup()
{
ledMatrix.init();
ledMatrix.setIntensity(10); // range is 0-15
ledMatrix.setText("         H A T I - H A T I       ");
}
 
void loop()
{
ledMatrix.clear();
ledMatrix.scrollTextLeft();
ledMatrix.drawText();
ledMatrix.commit();
delay(50);
}
