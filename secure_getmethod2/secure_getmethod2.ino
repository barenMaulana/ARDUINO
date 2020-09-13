// Include required libraries to get data from your data panel connection page.
#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h>
#include <ESP8266WebServer.h>
#include <ESP8266HTTPClient.h>

// Define the WiFi settings.
const char *ssid = "Bening";
const char *password = "12345678";
// Define the hostname, the port number and the fingerprint.
const char *host = "dmtechno.id/api-doorlock/public/users";
const char fingerprint[] PROGMEM = "B3 DD 76 06 D2 B5 A8 B4 A1 37 71 DB EC C9 EE 1C EC AF A3 8A";
const int httpsPort = 443;

void setup() {
WiFi.mode(WIFI_OFF);
delay(1000);
WiFi.mode(WIFI_STA);
Serial.println("connecting...");
WiFi.begin(ssid, password);
// Halt the code until connected to WiFi.
while (WiFi.status() != WL_CONNECTED) {
delay(500);
Serial.print("*");
}
}

void loop() {
// Create a WiFiClientSecure object.
WiFiClientSecure client;
// Set the fingerprint to connect the server.
client.setFingerprint(fingerprint);
// If the host is not responding,return.
if(!client.connect(host, httpsPort)){
Serial.println("Connection Failed!");
return;
}

// Send a GET request to a web page hosted by the server.
client.print(String("GET ") + 'webpage' + " HTTP/1.1\r\n" + "Host: " + host + "\r\n" + "Connection: close\r\n\r\n");

// Detect whether client is responding properly or not.
unsigned long timeout = millis();
while (client.available() == 0) {
if (millis() - timeout > 5000) {
Serial.println(">>> Client Timeout !");
client.stop();
return;
}
}

}
