#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup(){
  lcd.begin();   // initializing the LCD
  lcd.backlight(); // Enable or Turn On the backlight 
  lcd.setCursor(3,0);
  lcd.print(" Hello Makers "); // Start Printing
    lcd.setCursor(3,0);
  lcd.print(" Hello Baren maulana "); // Start Printing
}

void loop(){
  // Nothing Absolutely Nothing!
}
