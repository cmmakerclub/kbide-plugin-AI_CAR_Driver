Blockly.JavaScript['CAR_Driver_begin'] = function (block) {
	var dropdown_address = block.getFieldValue('address');
	var WIRE_OBJ = 'Wire';
	var SDA_PIN = 4, SCL_PIN = 5;

	var board_name = Vue.prototype.$global.board.board_info.name;
	if (board_name == 'kidbright-arduino') {
		WIRE_OBJ = 'Wire1';
		SDA_PIN = 4;
		SCL_PIN = 5;
	} else if (board_name == 'ipst-wifi') {

	}

	var code = '';
	code += '#EXTINC#include <AI_CAR_Driver.h>#END\n';
	code += '#EXTINC#include <Wire.h>#END\n';
	code += '#VARIABLE CAR_Driver carx(' + dropdown_address + ', &' + WIRE_OBJ + ');#END\n';
	code += '\n';
	code += WIRE_OBJ + '.begin(' + SDA_PIN + ', ' + SCL_PIN + ');\n';
	code += 'carx.begin();\n';
	return code;
};

Blockly.JavaScript['car_readFB'] = function (block) {
	var code = 'carx.readFB()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['car_readRL'] = function (block) {
	var code = 'carx.readRL()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['car_readBT'] = function (block) {
	var code = 'carx.readBT()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['car_con_motor'] = function (block) {
	var value_fb = Blockly.JavaScript.valueToCode(block, 'FB', Blockly.JavaScript.ORDER_ATOMIC);
	var value_rl = Blockly.JavaScript.valueToCode(block, 'RL', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'carx.carmotor(' + value_fb + ',' + value_rl + ');\n';
	return code;
};
Blockly.JavaScript['servomotor_tong'] = function (block) {
	var value_m2 = Blockly.JavaScript.valueToCode(block, 'M2', Blockly.JavaScript.ORDER_ATOMIC);
	var value_m3 = Blockly.JavaScript.valueToCode(block, 'M3', Blockly.JavaScript.ORDER_ATOMIC);
	var value_m4 = Blockly.JavaScript.valueToCode(block, 'M4', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'carx.servomotor(' + value_m2 + ',' + value_m3 + ',' + value_m4 + ');\n';
	return code;
};
Blockly.JavaScript['buzzer_tong'] = function (block) {
	var value_s = Blockly.JavaScript.valueToCode(block, 'S', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'carx.buzzer(' + value_s + ');\n';
	return code;
};
Blockly.JavaScript['setname_bl_tong'] = function (block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'carx.buzzer(' + value_name + ');\n';
	return code;
};