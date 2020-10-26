#ifndef __AI_CAR_Driver_H__
#define __AI_CAR_Driver_H__

#include<Arduino.h>
#include<Wire.h>

class CAR_Driver {
	private:
		TwoWire* wire;
		uint8_t addr = 0x12;
		
	public:
		CAR_Driver(int address, TwoWire* bus=&Wire) ;
		
		void begin() ;
		uint8_t readFB() ;
        uint8_t readLR() ;
        uint8_t readBT() ;
        void buzzer(uint8_t timelong = 0);
        void servomotor(uint8_t M2=0,uint8_t M3=0,uint8_t M4=0);
        void carmotor(uint8_t FB = 128,uint8_t LR = 128);
        void setname_bl(uint16_t _num = 0);
		
}
;

#endif
