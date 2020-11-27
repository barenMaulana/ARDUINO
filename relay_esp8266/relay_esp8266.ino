const int relay = D0;

void setup() {

  Serial.begin(115200);
  pinMode(relay, OUTPUT);

}

void loop() {
  digitalWrite(relay, HIGH);
  Serial.println("relay menyala");
  delay(1000);
  Serial.println("relay mati");
  digitalWrite(relay, LOW);
  delay(2000);

}
