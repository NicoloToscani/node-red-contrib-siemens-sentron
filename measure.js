module.exports = function(RED) {
    function measureNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.unitId = config.unitId;
        this.device = config.device;
        this.data = config.data;
        var node = this;
        node.on('input', function(msg) {
            var p=msg.payload;
            let settings = {
             name: p.name || node.name || "",
             unitId: p.unitId || node.unitId,
             device: p.device || node.device,
             data: p.data || node.data,
            };
            var res = {};
            
            
            // PAC2200
            if(settings.device == "pac2200"){
            
              switch(settings.data){
                case 0:
                case "voltage-L1N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 1,
                      quantity: 2,
                      };
                  res.topic = "voltage-L1N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac2200";
                break;
                case 1:
                case "voltage-L2N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3,
                      quantity: 2,
                      };
                  res.topic = "voltage-L2N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac2200";
                break;
                case 2:
                case "voltage-L3N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 5,
                      quantity: 2,
                      };
                  res.topic = "voltage-L3N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac2200";
                break;
                case 3:
                case "voltage-L1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 7,
                      quantity: 2,
                      };
                  res.topic = "voltage-L1L2";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac2200";
                break;
                case 4:
                case "voltage-L2L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 9,
                      quantity: 2,
                      };
                  res.topic = "voltage-L2L3";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac2200";
                break;
                case 5:
                case "voltage-L3L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 11,
                      quantity: 2,
                      };
                  res.topic = "voltage-L3L1";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac2200";
                break;
                case 6:
                case "currentL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 13,
                      quantity: 2,
                      };
                  res.topic = "currentL1";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac2200";
                break;
                case 7:
                case "currentL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 15,
                      quantity: 2,
                      };
                  res.topic = "currentL2";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac2200";
                break;
                case 8:
                case "currentL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 17,
                      quantity: 2,
                      };
                  res.topic = "currentL3";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac2200";
                break;
                case 9:
                case "appPowerL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 19,
                      quantity: 2,
                      };
                  res.topic = "appPowerL1";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac2200";
                break;
                case 10:
                case "appPowerL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 21,
                      quantity: 2,
                      };
                  res.topic = "appPowerL2";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac2200";
                break;
                case 11:
                case "appPowerL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 23,
                      quantity: 2,
                      };
                  res.topic = "appPowerL3";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac2200";
                break;
                case 12:
                case "actPowerL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 25,
                      quantity: 2,
                      };
                  res.topic = "actPowerL1";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac2200";
                break;
                case 13:
                case "actPowerL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 27,
                      quantity: 2,
                      };
                  res.topic = "actPowerL2";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac2200";
                break;
                case 14:
                case "actPowerL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 29,
                      quantity: 2,
                      };
                  res.topic = "actPowerL3";
                   res.format = "float32";
                  res.unit = "W";
                  res.model = "pac2200";
                break;
                case 15:
                case "reactPowerL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 31,
                      quantity: 2,
                      };
                  res.topic = "reactPowerL1";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac2200";
                break;
                case 16:
                case "reactPowerL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 33,
                      quantity: 2,
                      };
                  res.topic = "reactPowerL2";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac2200";
                 break;
                case 17:
                case "reactPowerL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 35,
                      quantity: 2,
                      };
                  res.topic = "reactPowerL3";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac2200";
                break;
                case 18:
                case "pFactorL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 37,
                      quantity: 2,
                      };
                  res.topic = "pFactorL1";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac2200";
                break;
                case 19:
                case "pFactorL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 39,
                      quantity: 2,
                      };
                  res.topic = "pFactorL2";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac2200";
                break;
                case 20:
                case "pFactorL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 41,
                      quantity: 2,
                      };
                  res.topic = "pFactorL3";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac2200";
                break;
                case 21:
                case "frequency":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 55,
                      quantity: 2,
                      };
                  res.topic = "frequency";
                  res.format = "float32";
                  res.unit = "Hz";
                  res.model = "pac2200";
                break;
                case 22:
                case "voltageLN-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 57,
                      quantity: 2,
                      };
                  res.topic = "voltageLN-avg";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac2200";
                break;
                case 22:
                case "voltageLL-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 59,
                      quantity: 2,
                      };
                  res.topic = "voltageLL-avg";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac2200";
                break;
                case 23:
                case "current-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 61,
                      quantity: 2,
                      };
                  res.topic = "current-avg";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac2200";
                break;
                case 24:
                case "appPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 63,
                      quantity: 2,
                      };
                  res.topic = "appPower-tot";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac2200";
                break;
                case 25:
                case "actPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 65,
                      quantity: 2,
                      };
                  res.topic = "actPower-tot";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac2200";
                break;
                case 26:
                case "reactPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 67,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac2200";
                break;
                case 27:
                case "pf-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 69,
                      quantity: 2,
                      };
                  res.topic = "pf-tot";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac2200";
                break;
                case 28:
                case "current-In":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 71,
                      quantity: 2,
                      };
                  res.topic = "current-In";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac2200";
                break;
                case 29:
                case "actEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 549,
                      quantity: 2,
                      };
                  res.topic = "actEnergyImp";
                  res.format = "float32";
                  res.unit = "Wh";
                  res.model = "pac2200";
                break;
                case 30:
                case "reactEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 551,
                      quantity: 2,
                      };
                  res.topic = "reactEnergyImp";
                  res.format = "float32";
                  res.unit = "varh";
                  res.model = "pac2200";
                break;
                case 31:
                case "actEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 553,
                      quantity: 2,
                      };
                  res.topic = "actEnergyExp";
                  res.format = "float32";
                  res.unit = "Wh";
                  res.model = "pac2200";
                break;
                case 32:
                case "reactEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 555,
                      quantity: 2,
                      };
                  res.topic = "reactEnergyExp";
                  res.format = "float32";
                  res.unit = "varh";
                  res.model = "pac2200";
                break;
              }
            }
            // PAC1200
            if(settings.device == "pac1200"){
            
              switch(settings.data){
                case 0:
                case "active_power_+":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 0,
                      quantity: 2,
                      };
                  res.topic = "active_power_+";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1200";
                break;
                case 1:
                case "active_power_-":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 2,
                      quantity: 2,
                      };
                  res.topic = "active_power_-";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1200";
                break;
                case 2:
                case "reactive_power_+":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 4,
                      quantity: 2,
                      };
                  res.topic = "reactive_power_+";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1200";
                break;
                case 3:
                case "reactive_power_-":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6,
                      quantity: 2,
                      };
                  res.topic = "reactive_power_-";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1200";
                break;
                case 4:
                case "apparent_power_+":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 16,
                      quantity: 2,
                      };
                  res.topic = "apparent_power_+";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1200";
                break;
                case 5:
                case "apparent_power_-":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 18,
                      quantity: 2,
                      };
                  res.topic = "apparent_power_-";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1200";
                break;
                case 6:
                case "pf":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 24,
                      quantity: 2,
                      };
                  res.topic = "pf";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac1200";
                break;
                case 6:
                case "frequency":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 26,
                      quantity: 2,
                      };
                  res.topic = "frequency";
                  res.format = "float32";
                  res.unit = "Hz";
                  res.model = "pac1200";
                break;
                case 7:
                case "active_power_+_L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 40,
                      quantity: 2,
                      };
                  res.topic = "active_power_+_L1";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1200";
                break;
                case 8:
                case "active_power_-_L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 42,
                      quantity: 2,
                      };
                  res.topic = "active_power_-_L1";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1200";
                break;
                case 9:
                case "reactive_power_+_L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 44,
                      quantity: 2,
                      };
                  res.topic = "reactive_power_+_L1";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1200";
                break;
                case 10:
                case "reactive_power_-_L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 46,
                      quantity: 2,
                      };
                  res.topic = "reactive_power_-_L1";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1200";
                break;
                case 11:
                case "apparent_power_+_L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 56,
                      quantity: 2,
                      };
                  res.topic = "apparent_power_+_L1";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1200";
                break;
                case 12:
                case "apparent_power_-_L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 58,
                      quantity: 2,
                      };
                  res.topic = "apparent_power_-_L1";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1200";
                break;
                case 13:
                case "currentL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 60,
                      quantity: 2,
                      };
                  res.topic = "currentL1";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1200";
                break;
                case 14:
                case "currentPotentialL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 62,
                      quantity: 2,
                      };
                  res.topic = "currentPotentialL1";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1200";
                break;
                case 15:
                case "pFactorL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 64,
                      quantity: 2,
                      };
                  res.topic = "pFactorL1";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1200";
                break;
                case 16:
                case "active_power_+_L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 40,
                      quantity: 2,
                      };
                  res.topic = "active_power_+_L2";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1200";
                break;
                case 17:
                case "active_power_-_L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 42,
                      quantity: 2,
                      };
                  res.topic = "active_power_-_L2";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1200";
                break;
                case 18:
                case "reactive_power_+_L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 44,
                      quantity: 2,
                      };
                  res.topic = "reactive_power_+_L2";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1200";
                break;
                case 19:
                case "reactive_power_-_L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 46,
                      quantity: 2,
                      };
                  res.topic = "reactive_power_-_L2";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1200";
                break;
                case 20:
                case "apparent_power_+_L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 56,
                      quantity: 2,
                      };
                  res.topic = "apparent_power_+_L2";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1200";
                break;
                case 21:
                case "apparent_power_-_L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 58,
                      quantity: 2,
                      };
                  res.topic = "apparent_power_-_L2";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1200";
                break;
                case 22:
                case "currentL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 60,
                      quantity: 2,
                      };
                  res.topic = "currentL2";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1200";
                break;
                case 23:
                case "currentPotentialL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 62,
                      quantity: 2,
                      };
                  res.topic = "currentPotentialL2";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1200";
                break;
                case 24:
                case "pFactorL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 64,
                      quantity: 2,
                      };
                  res.topic = "pFactorL2";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1200";
                break;
                case 25:
                case "active_power_+_L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 40,
                      quantity: 2,
                      };
                  res.topic = "active_power_+_L3";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1200";
                break;
                case 26:
                case "active_power_-_L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 42,
                      quantity: 2,
                      };
                  res.topic = "active_power_-_L3";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1200";
                break;
                case 27:
                case "reactive_power_+_L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 44,
                      quantity: 2,
                      };
                  res.topic = "reactive_power_+_L3";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1200";
                break;
                case 28:
                case "reactive_power_-_L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 46,
                      quantity: 2,
                      };
                  res.topic = "reactive_power_-_L3";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1200";
                break;
                case 29:
                case "apparent_power_+_L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 56,
                      quantity: 2,
                      };
                  res.topic = "apparent_power_+_L3";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1200";
                break;
                case 30:
                case "apparent_power_-_L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 58,
                      quantity: 2,
                      };
                  res.topic = "apparent_power_-_L3";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1200";
                break;
                case 31:
                case "currentL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 60,
                      quantity: 2,
                      };
                  res.topic = "currentL3";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1200";
                break;
                case 32:
                case "currentPotentialL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 62,
                      quantity: 2,
                      };
                  res.topic = "currentPotentialL3";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1200";
                break;
                case 33:
                case "pFactorL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 64,
                      quantity: 2,
                      };
                  res.topic = "pFactorL3";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1200";
                break;
              }
            }
            // PAC1600
            else if(settings.device == "pac1600"){
              switch(settings.data){
                case 0:
                case "voltage-L1N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 2,
                      quantity: 2,
                      };
                  res.topic = "voltage-L1N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac1600";
                break;
                case 1:
                case "voltage-L2N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 4,
                      quantity: 2,
                      };
                  res.topic = "voltage-L2N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac1600";
                break;
                case 2:
                case "voltage-L3N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6,
                      quantity: 2,
                      };
                  res.topic = "voltage-L3N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac1600";
                break;
                case 3:
                case "currentL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 8,
                      quantity: 2,
                      };
                  res.topic = "currentL1";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1600";
                break;
                case 4:
                case "currentL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 10,
                      quantity: 2,
                      };
                  res.topic = "currentL2";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1600";
                break;
                case 5:
                case "currentL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 12,
                      quantity: 2,
                      };
                  res.topic = "currentL3";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1600";
                break;
                case 6:
                case "voltage-L1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 14,
                      quantity: 2,
                      };
                  res.topic = "voltage-L1L2";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac1600";
                break;
                case 7:
                case "voltage-L2L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 16,
                      quantity: 2,
                      };
                  res.topic = "voltage-L2L3";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac1600";
                break;
                case 8:
                case "voltage-L3L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 18,
                      quantity: 2,
                      };
                  res.topic = "voltage-L3L1";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac1600";
                break;
                case 9:
                case "actPowerL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 20,
                      quantity: 2,
                      };
                  res.topic = "actPowerL1";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1600";
                break;
                case 9:
                case "actPowerL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 22,
                      quantity: 2,
                      };
                  res.topic = "actPowerL2";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1600";
                break;
                case 10:
                case "actPowerL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 24,
                      quantity: 2,
                      };
                  res.topic = "actPowerL3";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1600";
                break;
                case 11:
                case "reactPowerL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 26,
                      quantity: 2,
                      };
                  res.topic = "reactPowerL1";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1600";
                break;
                case 12:
                case "reactPowerL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 28,
                      quantity: 2,
                      };
                  res.topic = "reactPowerL2";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1600";
                break;
                case 13:
                case "reactPowerL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 30,
                      quantity: 2,
                      };
                  res.topic = "reactPowerL3";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1600";
                break;
                case 14:
                case "appPowerL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 32,
                      quantity: 2,
                      };
                  res.topic = "appPowerL1";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1600";
                break;
                case 15:
                case "appPowerL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 34,
                      quantity: 2,
                      };
                  res.topic = "appPowerL2";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1600";
                break;
                case 16:
                case "appPowerL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 36,
                      quantity: 2,
                      };
                  res.topic = "appPowerL3";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1600";
                break;
                case 17:
                case "pFactorL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 38,
                      quantity: 2,
                      };
                  res.topic = "pFactorL1";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac1600";
                break;
                case 18:
                case "pFactorL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 40,
                      quantity: 2,
                      };
                  res.topic = "pFactorL2";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac1600";
                break;
                case 19:
                case "pFactorL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 42,
                      quantity: 2,
                      };
                  res.topic = "pFactorL3";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac1600";
                break;
                case 20:
                case "frequency":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 50,
                      quantity: 2,
                      };
                  res.topic = "frequency";
                  res.format = "float32";
                  res.unit = "Hz";
                  res.model = "pac1600";
                break;
                case 21:
                case "voltageLL-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 52,
                      quantity: 2,
                      };
                  res.topic = "voltageLL-avg";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac1600";
                break;
                case 22:
                case "voltageLN-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 54,
                      quantity: 2,
                      };
                  res.topic = "voltageLN-avg";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac1600";
                break;
                case 23:
                case "current-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 56,
                      quantity: 2,
                      };
                  res.topic = "current-avg";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac1600";
                break;
                case 24:
                case "actPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 58,
                      quantity: 2,
                      };
                  res.topic = "actPower-tot";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1600";
                break;
                case 25:
                case "reactPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 60,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac1600";
                break;
                case 26:
                case "appPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 62,
                      quantity: 2,
                      };
                  res.topic = "appPower-tot";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac1600";
                break;
                case 27:
                case "pf-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 64,
                      quantity: 2,
                      };
                  res.topic = "pf-tot";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac1600";
                break;
                case 28:
                case "unbalanceLL":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 68,
                      quantity: 2,
                      };
                  res.topic = "unbalanceLL";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 29:
                case "unbalanceLN":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 70,
                      quantity: 2,
                      };
                  res.topic = "unbalanceLN";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 30:
                case "conducturN":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 72,
                      quantity: 2,
                      };
                  res.topic = "conducturN";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 31:
                case "voltageL1Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 84,
                      quantity: 2,
                      };
                  res.topic = "voltageL1Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 32:
                case "voltageL2Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 86,
                      quantity: 2,
                      };
                  res.topic = "voltageL2Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 33:
                case "voltageL3Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 88,
                      quantity: 2,
                      };
                  res.topic = "voltageL3Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 34:
                case "currentL1Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 90,
                      quantity: 2,
                      };
                  res.topic = "currentL1Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 35:
                case "currentL2Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 92,
                      quantity: 2,
                      };
                  res.topic = "currentL2Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 35:
                case "currentL3Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 94,
                      quantity: 2,
                      };
                  res.topic = "currentL3Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 36:
                case "voltageL1L2Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 96,
                      quantity: 2,
                      };
                  res.topic = "voltageL1L2Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 37:
                case "voltageL2L3Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 98,
                      quantity: 2,
                      };
                  res.topic = "voltageL2L3Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 37:
                case "voltageL3L1Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 100,
                      quantity: 2,
                      };
                  res.topic = "voltageL3L1Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 38:
                case "kwL1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 112,
                      quantity: 2,
                      };
                  res.topic = "kwL1L2";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1600";
                break;
                case 39:
                case "kwL2L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 114,
                      quantity: 2,
                      };
                  res.topic = "kwL2L3";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1600";
                break;
                case 39:
                case "kwL3L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 116,
                      quantity: 2,
                      };
                  res.topic = "kwL3L1";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1600";
                break;
                case 40:
                case "actEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6944,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImp";
                  res.format = "int64";
                  res.unit = "kWh";
                  res.model = "pac1600";
                break;
                case 41:
                case "actEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6948,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExp";
                  res.format = "int64";
                  res.unit = "kWh";
                  res.model = "pac1600";
                break;
                case 42:
                case "reactEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6952,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImp";
                  res.format = "int64";
                  res.unit = "kvarh";
                  res.model = "pac1600";
                break;
                case 43:
                case "reactEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6956,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExp";
                  res.format = "int64";
                  res.unit = "kvarh";
                  res.model = "pac1600";
                break;
                case 43:
                case "appEnergy":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6960,
                      quantity: 4,
                      };
                  res.topic = "appEnergy";
                  res.format = "int64";
                  res.unit = "kvarh";
                  res.model = "pac1600";
                break;
                case 43:
                case "partActEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6964,
                      quantity: 4,
                      };
                  res.topic = "partActEnergyImp";
                  res.format = "int64";
                  res.unit = "kWh";
                  res.model = "pac1600";
                break;
                case 44:
                case "partActEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6968,
                      quantity: 4,
                      };
                  res.topic = "partActEnergyExp";
                  res.format = "int64";
                  res.unit = "kWh";
                  res.model = "pac1600";
                break;
                case 45:
                case "partReactEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6972,
                      quantity: 4,
                      };
                  res.topic = "partReactEnergyImp";
                  res.format = "int64";
                  res.unit = "kvarh";
                  res.model = "pac1600";
                break;
                case 46:
                case "partReactEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6976,
                      quantity: 4,
                      };
                  res.topic = "partReactEnergyExp";
                  res.format = "int64";
                  res.unit = "kvarh";
                  res.model = "pac1600";
                break;  
              }
            }
            // PAC3xx0
            else if(settings.device == "pac3xx0"){
            
              switch(settings.data){
                
              }
            }
            // PAC3200T
            else if(settings.device == "pac3200T"){
            
              switch(settings.data){
                
              }
            }
             // PAC4200
            else if(settings.device == "pac4200"){
            
              switch(settings.data){
                
              }
            }
            // PAC5200
            else if(settings.device == "pac5200"){
            
              switch(settings.data){
                
              }
            }
            // SEM3
            else if(settings.device == "sem3"){
            
              switch(settings.data){
                
              }
            }
            // ATC6300
            else if(settings.device == "atc6300"){
            
              switch(settings.data){
                
              }
            }
            // 3VA
            else if(settings.device == "3va"){
            
              switch(settings.data){
                
              }
            }
            // Powercenter 1000
            else if(settings.device == "powercenter1000"){
              
              switch(settings.data){
                case 0:
                case "temperature-inst":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3072,
                      quantity: 2,
                      };
                  res.topic = "temperature-inst";
                  res.format = "float32";
                  res.unit = "°C";
                  res.model = "powercenter1000";
                break;
                case 1:
                case "temperature-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3074,
                      quantity: 2,
                      };
                  res.topic = "temperature-avg";
                  res.format = "float32";
                  res.unit = "°C";
                  res.model = "powercenter1000";
                break;
                case 2:
                case "current-inst":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3076,
                      quantity: 2,
                      };
                  res.topic = "current-inst";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "powercenter1000";
                break;
                case 3:
                case "current-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3078,
                      quantity: 2,
                      };
                  res.topic = "current-avg";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "powercenter1000";
                break;
                case 4:
                case "current-max":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3080,
                      quantity: 2,
                      };
                  res.topic = "current-max";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "powercenter1000";
                break;
                case 5:
                case "voltage-LN":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3082,
                      quantity: 2,
                      };
                  res.topic = "voltage-LN";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "powercenter1000";
                break;
                case 6:
                case "frequency":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3084,
                      quantity: 2,
                      };
                  res.topic = "frequency";
                  res.format = "float32";
                  res.unit = "Hz";
                  res.model = "powercenter1000";
                break;
                case 7:
                case "actPower":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3086,
                      quantity: 2,
                      };
                  res.topic = "actPower";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "powercenter1000";
                break;
                case 8:
                case "appPower":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3088,
                      quantity: 2,
                      };
                  res.topic = "appPower";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "powercenter1000";
                break;
                case 9:
                case "reactPower":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3090,
                      quantity: 2,
                      };
                  res.topic = "reactPower";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "powercenter1000";
                break;
                case 10:
                case "pFactor":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3092,
                      quantity: 2,
                      };
                  res.topic = "pFactor";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "powercenter1000";
                break;
                case 11:
                case "actEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3094,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImp";
                  res.format = "float64";
                  res.unit = "Wh";
                  res.model = "powercenter1000";
                break;
                case 12:
                case "actEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3098,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExp";
                  res.format = "float64";
                  res.unit = "Wh";
                  res.model = "powercenter1000";
                break;
                case 13:
                case "reactEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3102,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImp";
                  res.format = "float64";
                  res.unit = "varh";
                  res.model = "powercenter1000";
                break;
                case 14:
                case "reactEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3106,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExp";
                   res.format = "float64";
                  res.unit = "varh";
                  res.model = "powercenter1000";
                break;
                case 15:
                case "status":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3110,
                      quantity: 1,
                      };
                  res.topic = "status";
                  res.format = "uint16";
                  res.unit = "";
                  res.model = "powercenter1000";
                break;
                case 16:
                case "alarmsStatus":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 2560,
                      quantity: 2,
                      };
                  res.topic = "alarmsStatus";
                  res.format = "uint32";
                  res.unit = "";
                  res.model = "powercenter1000";
                break;
                case 17:
                case "mecOperCycles":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 2593,
                      quantity: 2,
                      };
                  res.topic = "mecOperCycles";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "powercenter1000";
                break;
                case 18:
                case "tripOpers":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 2602,
                      quantity: 2,
                      };
                  res.topic = "tripOpers";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "powercenter1000";
                break;
                case 19:
                case "shortCircTrip":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 2624,
                      quantity: 2,
                      };
                  res.topic = "shortCircTrip";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "powercenter1000";
                break;
                    
              }
            }
            
            node.send(res);
        });
    }
    RED.nodes.registerType("measure", measureNode);
}
