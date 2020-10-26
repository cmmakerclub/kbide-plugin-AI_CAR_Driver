#ifndef __AI_CAR_Driver_CPP__
#define __AI_CAR_Driver_CPP__

#include<AI_CAR_Driver.h>

CAR_Driver::CAR_Driver(int address, TwoWire* bus) {
	this->addr = address;
	this->wire = bus;
}

void CAR_Driver::begin() {

	
	delay(180); // Wait to complete 1st H-resolution mode measurement.( max. 180ms. ) 
}

uint8_t CAR_Driver::readFB() {
	this->wire->requestFrom(this->addr, 3);
	if (this->wire->available() < 3) {
		Serial.println("BH1750 read error");
		return 0;
	}
	uint8_t xcv0 = this->wire->read();
    uint8_t xcv1 = this->wire->read();
    uint8_t xcv2 = this->wire->read();
	return xcv0;
}
uint8_t CAR_Driver::readLR() {
	this->wire->requestFrom(this->addr, 3);
	if (this->wire->available() < 3) {
		Serial.println("BH1750 read error");
		return 0;
	}
	uint8_t xcv0 = this->wire->read();
    uint8_t xcv1 = this->wire->read();
    uint8_t xcv2 = this->wire->read();
	return xcv1;
}
uint8_t CAR_Driver::readBT() {
	this->wire->requestFrom(this->addr, 3);
	if (this->wire->available() < 3) {
		Serial.println("BH1750 read error");
		return 0;
	}
	uint8_t xcv0 = this->wire->read();
    uint8_t xcv1 = this->wire->read();
    uint8_t xcv2 = this->wire->read();
	return xcv2;
}
void CAR_Driver::buzzer(uint8_t timelong = 0) {
	this->wire->beginTransmission(this->addr);
	this->wire->write(timelong); 
	this->wire->endTransmission();
}
void CAR_Driver::servomotor(uint8_t M2=0,uint8_t M3=0,uint8_t M4=0){
	this->wire->beginTransmission(this->addr);
    this->wire->write(0);
	this->wire->write(M2); 
    this->wire->write(M3); 
    this->wire->write(M4); 
	this->wire->endTransmission();
}
void CAR_Driver::setname_bl(uint16_t _num = 0){
	this->wire->beginTransmission(this->addr);
    this->wire->write(_num >> 8);
	this->wire->write(_num); 
	this->wire->endTransmission();
}
#endif
