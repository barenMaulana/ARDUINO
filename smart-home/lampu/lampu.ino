#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "Bening";
const char* password = "12345678";

int pinCH_1 = 16;
const int wifi = 2;

void setup () {

  Serial.begin(115200);
  WiFi.begin(ssid, password);

   pinMode(wifi, OUTPUT);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting..");

  }

  if(WiFi.status() == WL_CONNECTED){
    Serial.println("Connected!!!");
  }
  else{
    Serial.println("Connected Failed!!!");
  }

}

void loop() {

  if (WiFi.status() == WL_CONNECTED) {
    digitalWrite(wifi, HIGH);
    HTTPClient http;

    http.begin("http://iot.webcanggih.com/proses.php");
    int httpCode = http.GET();

    if (httpCode > 0) {
      char json[500];
      String payload = http.getString();
      payload.toCharArray(json, 500);
      
      //StaticJsonDocument<200> doc;
      DynamicJsonDocument doc(JSON_OBJECT_SIZE(5));

     // Deserialize the JSON document
       deserializeJson(doc, json);
       
     int id   = doc["id"];
     int CH_1 = doc["CH_1"];
     
     Serial.print("id= ");
     Serial.println(id);
     Serial.print("Channel 1= ");
     Serial.println(CH_1);
     Serial.println(" ");

     if(CH_1 == 0){
      pinMode(pinCH_1, INPUT);
      digitalWrite(pinCH_1, HIGH);
      Serial.println("mesin mati");
     }
     else{  
      pinMode(pinCH_1, OUTPUT);
      digitalWrite(pinCH_1, LOW);
      Serial.println("mesin nyala");
     }
      
      delay(1000);
      
    }

    http.end();

  }

}
