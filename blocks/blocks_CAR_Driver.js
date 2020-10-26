Blockly.Blocks['CAR_Driver_begin'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("CAR Driver begin at")
			.appendField(new Blockly.FieldDropdown([["0x12","0x12"], ["0x13","0x13"]]), "address");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Config AI CAR Driver");
		this.setHelpUrl("https://github.com/cmmakerclub/kbide-plugin-AI_CAR_Driver");
	}
};

Blockly.Blocks['car_readFB'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("readFB");
		this.setOutput(true, null);
		this.setColour(135);
		this.setTooltip("readFB");
		this.setHelpUrl("https://github.com/cmmakerclub/kbide-plugin-AI_CAR_Driver");
	}
};
Blockly.Blocks['car_readRL'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("readRL");
		this.setOutput(true, null);
		this.setColour(135);
		this.setTooltip("readRL");
		this.setHelpUrl("https://github.com/cmmakerclub/kbide-plugin-AI_CAR_Driver");
	}
};
Blockly.Blocks['car_readBT'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("readBT");
		this.setOutput(true, null);
		this.setColour(135);
		this.setTooltip("readBT");
		this.setHelpUrl("https://github.com/cmmakerclub/kbide-plugin-AI_CAR_Driver");
	}
};
Blockly.Blocks['car_con_motor'] = {
	init: function() {
	  this.appendValueInput("FB")
		  .setCheck("Number")
		  .appendField("DC Motor FB");
	  this.appendValueInput("RL")
		  .setCheck("Number")
		  .appendField("RL");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(135);
   this.setTooltip("ตัวเลขใส่ได้ 0-255  ตรงกลาง 128 ");
   this.setHelpUrl("https://github.com/cmmakerclub/kbide-plugin-AI_CAR_Driver");
	}
  };
  Blockly.Blocks['servomotor_tong'] = {
	init: function() {
	  this.appendDummyInput()
          .appendField("Servo Motor");
	  this.appendValueInput("M2")
		  .setCheck("Number")
		  .appendField("M2");
	  this.appendValueInput("M3")
		  .setCheck("Number")
		  .appendField("M3");
	  this.appendValueInput("M4")
		  .setCheck("Number")
		  .appendField("M4");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(135);
   this.setTooltip("ตัวเลขใส่ได้ 0-255  คือ 1000-2000 uS");
   this.setHelpUrl("https://github.com/cmmakerclub/kbide-plugin-AI_CAR_Driver");
	}
  };
  Blockly.Blocks['buzzer_tong'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Buzzer");
	  this.appendValueInput("S")
		  .setCheck("Number")
		  .appendField("S");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(135);
   this.setTooltip("ตัวเลขใส่ได้ 0-255  คือ 1 ค่าเท่ากับ ดังนาน 50ms");
   this.setHelpUrl("https://github.com/cmmakerclub/kbide-plugin-AI_CAR_Driver");
	}
  };
  Blockly.Blocks['setname_bl_tong'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Set name BLE");
	  this.appendValueInput("name")
		  .setCheck("Number");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(135);
   this.setTooltip("ตัวเลขใส่ได้ 0-65535");
   this.setHelpUrl("https://github.com/cmmakerclub/kbide-plugin-AI_CAR_Driver");
	}
  };