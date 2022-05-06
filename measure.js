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
                  res.unit = "V";
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
                      address: 80,
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
                      address: 82,
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
                      address: 84,
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
                      address: 86,
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
                      address: 96,
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
                      address: 98,
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
                      address: 100,
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
                      address: 102,
                      quantity: 2,
                      };
                  res.topic = "currentPotentialL2";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac1200";
                break;
                case 24:
                case "pFactorL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 104,
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
                      address: 120,
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
                      address: 122,
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
                      address: 124,
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
                      address: 126,
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
                      address: 136,
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
                      address: 138,
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
                      address: 140,
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
                      address: 142,
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
                      address: 144,
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
                      address: 1,
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
                      address: 3,
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
                      address: 5,
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
                      address: 7,
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
                      address: 9,
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
                      address: 11,
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
                      address: 13,
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
                      address: 15,
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
                      address: 17,
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
                      address: 19,
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
                      address: 21,
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
                      address: 23,
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
                      address: 25,
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
                      address: 27,
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
                      address: 29,
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
                      address: 31,
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
                      address: 33,
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
                      address: 35,
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
                      address: 37,
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
                      address: 39,
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
                      address: 41,
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
                      address: 49,
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
                      address: 51,
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
                      address: 53,
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
                      address: 55,
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
                      address: 57,
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
                      address: 59,
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
                      address: 61,
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
                      address: 63,
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
                      address: 65,
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
                      address: 67,
                      quantity: 2,
                      };
                  res.topic = "unbalanceLN";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 30:
                case "unbalanceI":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 69,
                      quantity: 2,
                      };
                  res.topic = "unbalanceI";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 31:
                case "conducturN":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 71,
                      quantity: 2,
                      };
                  res.topic = "conducturN";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 32:
                case "voltageL1Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 83,
                      quantity: 2,
                      };
                  res.topic = "voltageL1Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 33:
                case "voltageL2Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 85,
                      quantity: 2,
                      };
                  res.topic = "voltageL2Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 34:
                case "voltageL3Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 87,
                      quantity: 2,
                      };
                  res.topic = "voltageL3Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 35:
                case "currentL1Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 89,
                      quantity: 2,
                      };
                  res.topic = "currentL1Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 36:
                case "currentL2Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 91,
                      quantity: 2,
                      };
                  res.topic = "currentL2Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 37:
                case "currentL3Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 93,
                      quantity: 2,
                      };
                  res.topic = "currentL3Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 38:
                case "voltageL1L2Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 95,
                      quantity: 2,
                      };
                  res.topic = "voltageL1L2Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 39:
                case "voltageL2L3Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 97,
                      quantity: 2,
                      };
                  res.topic = "voltageL2L3Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 40:
                case "voltageL3L1Thd":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 99,
                      quantity: 2,
                      };
                  res.topic = "voltageL3L1Thd";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac1600";
                break;
                case 41:
                case "kwL1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 111,
                      quantity: 2,
                      };
                  res.topic = "kwL1L2";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1600";
                break;
                case 42:
                case "kwL2L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 113,
                      quantity: 2,
                      };
                  res.topic = "kwL2L3";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1600";
                break;
                case 43:
                case "kwL3L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 115,
                      quantity: 2,
                      };
                  res.topic = "kwL3L1";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac1600";
                break;
                case 44:
                case "actEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6943,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImp";
                  res.format = "int64";
                  res.unit = "kWh";
                  res.model = "pac1600";
                break;
                case 45:
                case "actEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6947,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExp";
                  res.format = "int64";
                  res.unit = "kWh";
                  res.model = "pac1600";
                break;
                case 46:
                case "reactEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6951,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImp";
                  res.format = "int64";
                  res.unit = "kvarh";
                  res.model = "pac1600";
                break;
                case 47:
                case "reactEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6955,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExp";
                  res.format = "int64";
                  res.unit = "kvarh";
                  res.model = "pac1600";
                break;
                case 48:
                case "appEnergy":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6959,
                      quantity: 4,
                      };
                  res.topic = "appEnergy";
                  res.format = "int64";
                  res.unit = "kvarh";
                  res.model = "pac1600";
                break;
                case 49:
                case "partActEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6963,
                      quantity: 4,
                      };
                  res.topic = "partActEnergyImp";
                  res.format = "int64";
                  res.unit = "kWh";
                  res.model = "pac1600";
                break;
                case 50:
                case "partActEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6967,
                      quantity: 4,
                      };
                  res.topic = "partActEnergyExp";
                  res.format = "int64";
                  res.unit = "kWh";
                  res.model = "pac1600";
                break;
                case 51:
                case "partReactEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6971,
                      quantity: 4,
                      };
                  res.topic = "partReactEnergyImp";
                  res.format = "int64";
                  res.unit = "kvarh";
                  res.model = "pac1600";
                break;
                case 52:
                case "partReactEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 6975,
                      quantity: 4,
                      };
                  res.topic = "partReactEnergyExp";
                  res.format = "int64";
                  res.unit = "kvarh";
                  res.model = "pac1600";
                break;  
              }
            }
            // PAC31000
            else if(settings.device == "pac3100"){
            
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
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
                  res.model = "pac3100";
                break;
                case 18:
                case "current-In":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 37,
                      quantity: 2,
                      };
                  res.topic = "current-In";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac3100";
                break;
                case 19:
                case "frequency":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 39,
                      quantity: 2,
                      };
                  res.topic = "frequency";
                  res.format = "float32";
                  res.unit = "Hz";
                  res.model = "pac3100";
                break;
                case 20:
                case "appPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 47,
                      quantity: 2,
                      };
                  res.topic = "appPower-tot";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac3100";
                break;
                case 25:
                case "actPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 49,
                      quantity: 2,
                      };
                  res.topic = "actPower-tot";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac3100";
                break;
                case 26:
                case "reactPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 51,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac3100";
                break;
                case 27:
                case "pf-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 53,
                      quantity: 2,
                      };
                  res.topic = "pf-tot";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac3100";
                break;
                case 29:
                case "actEnergy":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 801,
                      quantity: 4,
                      };
                  res.topic = "actEnergy";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3100";
                break;
                case 30:
                case "reactEnergy":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 805,
                      quantity: 4,
                      };
                  res.topic = "reactEnergy";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3100";
                break;
              }
            }
            // PAC3120
            else if(settings.device == "pac3120"){
            
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
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
                  res.model = "pac3120";
                break;
                case 21:
                case "voltageL1Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 43,
                      quantity: 2,
                      };
                  res.topic = "voltageL1Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3120";
                break;
                case 22:
                case "voltageL2Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 45,
                      quantity: 2,
                      };
                  res.topic = "voltageL2Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3120";
                break;
                case 23:
                case "voltageL3Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 47,
                      quantity: 2,
                      };
                  res.topic = "voltageL3Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3120";
                break;
                case 24:
                case "currentL1Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 49,
                      quantity: 2,
                      };
                  res.topic = "currentL1Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3120";
                break;
                case 25:
                case "currentL2Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 51,
                      quantity: 2,
                      };
                  res.topic = "currentL2Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3120";
                break;
                case 26:
                case "currentL3Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 53,
                      quantity: 2,
                      };
                  res.topic = "currentL3Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3120";
                break;
                case 27:
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
                  res.model = "pac3120";
                break;
                case 28:
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
                  res.model = "pac3120";
                break;
                case 29:
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
                  res.model = "pac3120";
                break;
                case 30:
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
                  res.model = "pac3120";
                break;
                case 31:
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
                  res.model = "pac3120";
                break;
                case 32:
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
                  res.model = "pac3120";
                break;
                case 33:
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
                  res.model = "pac3120";
                break;
                case 34:
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
                  res.model = "pac3120";
                break;
                case 35:
                case "unbalanceVoltage":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 71,
                      quantity: 2,
                      };
                  res.topic = "unbalanceVoltage";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3120";
                break;
                case 36:
                case "unbalanceCurrent":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 73,
                      quantity: 2,
                      };
                  res.topic = "unbalanceCurrent";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3120";
                break;
                case 37:
                case "current-In":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 223,
                      quantity: 2,
                      };
                  res.topic = "current-In";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac3120";
                break;
                case 38:
                case "actEnergyImpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 801,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff1";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3120";
                break;
                case 39:
                case "actEnergyImpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 805,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3120";
                break;
                case 40:
                case "actEnergyExpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 809,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff1";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3120";
                break;
                case 41:
                case "actEnergyExpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 813,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3120";
                break;
                case 42:
                case "reactEnergyImpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 817,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff1";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3120";
                break;
                case 43:
                case "reactEnergyImpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 821,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3120";
                break;
                case 44:
                case "reactEnergyExpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 825,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff1";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3120";
                break;
                case 45:
                case "reactEnergyExpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 829,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3120";
                break;
                case 46:
                case "appEnergyTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 833,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff1";
                  res.format = "int64";
                  res.unit = "VAh";
                  res.model = "pac3120";
                break;
                case 47:
                case "appEnergyTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 837,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff2";
                  res.format = "int64";
                  res.unit = "VAh";
                  res.model = "pac3120";
                break; 
              }
            }
            // PAC3220
            else if(settings.device == "pac3220"){
            
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
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
                  res.model = "pac3220";
                break;
                case 21:
                case "voltageL1Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 43,
                      quantity: 2,
                      };
                  res.topic = "voltageL1Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3220";
                break;
                case 22:
                case "voltageL2Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 45,
                      quantity: 2,
                      };
                  res.topic = "voltageL2Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3220";
                break;
                case 23:
                case "voltageL3Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 47,
                      quantity: 2,
                      };
                  res.topic = "voltageL3Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3220";
                break;
                case 24:
                case "currentL1Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 49,
                      quantity: 2,
                      };
                  res.topic = "currentL1Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3220";
                break;
                case 25:
                case "currentL2Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 51,
                      quantity: 2,
                      };
                  res.topic = "currentL2Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3220";
                break;
                case 26:
                case "currentL3Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 53,
                      quantity: 2,
                      };
                  res.topic = "currentL3Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3220";
                break;
                case 27:
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
                  res.model = "pac3220";
                break;
                case 28:
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
                  res.model = "pac3220";
                break;
                case 29:
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
                  res.model = "pac3220";
                break;
                case 30:
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
                  res.model = "pac3220";
                break;
                case 31:
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
                  res.model = "pac3220";
                break;
                case 32:
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
                  res.model = "pac3220";
                break;
                case 33:
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
                  res.model = "pac3220";
                break;
                case 34:
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
                  res.model = "pac3220";
                break;
                case 35:
                case "unbalanceVoltage":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 71,
                      quantity: 2,
                      };
                  res.topic = "unbalanceVoltage";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3220";
                break;
                case 36:
                case "unbalanceCurrent":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 73,
                      quantity: 2,
                      };
                  res.topic = "unbalanceCurrent";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3220";
                break;
                case 37:
                case "current-In":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 223,
                      quantity: 2,
                      };
                  res.topic = "current-In";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac3220";
                break;
                case 38:
                case "actEnergyImpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 801,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff1";
                  res.format = "double";
                  res.unit = "Wh";
                  res.model = "pac3220";
                break;
                case 39:
                case "actEnergyImpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 805,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff2";
                  res.format = "double";
                  res.unit = "Wh";
                  res.model = "pac3220";
                break;
                case 40:
                case "actEnergyExpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 809,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff1";
                  res.format = "double";
                  res.unit = "Wh";
                  res.model = "pac3220";
                break;
                case 41:
                case "actEnergyExpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 813,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff2";
                  res.format = "double";
                  res.unit = "Wh";
                  res.model = "pac3220";
                break;
                case 42:
                case "reactEnergyImpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 817,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff1";
                  res.format = "double";
                  res.unit = "varh";
                  res.model = "pac3220";
                break;
                case 43:
                case "reactEnergyImpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 821,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff2";
                  res.format = "double";
                  res.unit = "varh";
                  res.model = "pac3220";
                break;
                case 44:
                case "reactEnergyExpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 825,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff1";
                  res.format = "double";
                  res.unit = "varh";
                  res.model = "pac3220";
                break;
                case 45:
                case "reactEnergyExpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 829,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff2";
                  res.format = "double";
                  res.unit = "varh";
                  res.model = "pac3220";
                break;
                case 46:
                case "appEnergyTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 833,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff1";
                  res.format = "double";
                  res.unit = "VAh";
                  res.model = "pac3220";
                break;
                case 47:
                case "appEnergyTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 837,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff2";
                  res.format = "double";
                  res.unit = "VAh";
                  res.model = "pac3220";
                break; 
                
              }
            }
            // PAC3200T
            else if(settings.device == "pac3200T"){
            
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
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
                  res.model = "pac3200T";
                break;
                case 21:
                case "voltageL1Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 43,
                      quantity: 2,
                      };
                  res.topic = "voltageL1Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3200T";
                break;
                case 22:
                case "voltageL2Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 45,
                      quantity: 2,
                      };
                  res.topic = "voltageL2Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3200T";
                break;
                case 23:
                case "voltageL3Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 47,
                      quantity: 2,
                      };
                  res.topic = "voltageL3Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3200T";
                break;
                case 24:
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
                  res.model = "pac3200T";
                break;
                case 25:
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
                  res.model = "pac3200T";
                break;
                case 26:
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
                  res.model = "pac3200T";
                break;
                case 27:
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
                  res.model = "pac3200T";
                break;
                case 28:
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
                  res.model = "pac3200T";
                break;
                case 29:
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
                  res.model = "pac3200T";
                break;
                case 30:
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
                  res.model = "pac3200T";
                break;
                case 31:
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
                  res.model = "pac3200T";
                break;
                case 32:
                case "ampUnbalanceVoltage":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 71,
                      quantity: 2,
                      };
                  res.topic = "ampUnbalanceVoltage";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3200T";
                break;
                case 33:
                case "ampUnbalanceCurrent":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 73,
                      quantity: 2,
                      };
                  res.topic = "ampUnbalanceCurrent";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac3200T";
                break;
                case 34:
                case "current-In":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 223,
                      quantity: 2,
                      };
                  res.topic = "current-In";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac3200T";
                break;
                case 35:
                case "actEnergyImpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 801,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff1";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 36:
                case "actEnergyImpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 805,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 37:
                case "actEnergyExpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 809,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff1";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 38:
                case "actEnergyExpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 813,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 39:
                case "reactEnergyImpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 817,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff1";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 40:
                case "reactEnergyImpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 821,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 41:
                case "reactEnergyExpTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 825,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff1";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 42:
                case "reactEnergyExpTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 829,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 43:
                case "appEnergyTariff1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 833,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff1";
                  res.format = "int64";
                  res.unit = "VAh";
                  res.model = "pac3200T";
                break;
                case 44:
                case "appEnergyTariff2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 837,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff2";
                  res.format = "int64";
                  res.unit = "VAh";
                  res.model = "pac3200T";
                break;
                case 45:
                case "actEnergyImpTariff1L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 841,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff1L1";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 46:
                case "actEnergyImpTariff2L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 845,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff2L1";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 47:
                case "actEnergyExpTariff1L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 849,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff1L1";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 48:
                case "actEnergyExpTariff2L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 853,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff2L1";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 49:
                case "reactEnergyImpTariff1L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 857,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff1L1";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 50:
                case "reactEnergyImpTariff2L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 861,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff2L1";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 51:
                case "reactEnergyExpTariff1L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 865,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff1L1";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 52:
                case "reactEnergyExpTariff2L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 869,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff2L1";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 53:
                case "appEnergyTariff1L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 873,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff1L1";
                  res.format = "int64";
                  res.unit = "VAh";
                  res.model = "pac3200T";
                break;
                case 54:
                case "appEnergyTariff2L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 877,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff2L1";
                  res.format = "int64";
                  res.unit = "VAh";
                  res.model = "pac3200T";
                break;
                case 55:
                case "actEnergyImpTariff1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 881,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff1L2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 56:
                case "actEnergyImpTariff2L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 885,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff2L2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 57:
                case "actEnergyExpTariff1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 889,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff1L2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 58:
                case "actEnergyExpTariff2L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 893,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff2L2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 59:
                case "reactEnergyImpTariff1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 897,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff1L2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 60:
                case "reactEnergyImpTariff2L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 901,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff2L2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 61:
                case "reactEnergyExpTariff1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 905,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff1L2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 62:
                case "reactEnergyExpTariff2L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 909,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff2L2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 63:
                case "appEnergyTariff1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 913,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff1L2";
                  res.format = "int64";
                  res.unit = "VAh";
                  res.model = "pac3200T";
                break;
                case 64:
                case "appEnergyTariff2L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 917,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff2L2";
                  res.format = "int64";
                  res.unit = "VAh";
                  res.model = "pac3200T";
                break;
                case 65:
                case "actEnergyImpTariff1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 921,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff1L2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 66:
                case "actEnergyImpTariff2L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 925,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImpTariff2L2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 67:
                case "actEnergyExpTariff1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 929,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff1L2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 68:
                case "actEnergyExpTariff2L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 933,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExpTariff2L2";
                  res.format = "int64";
                  res.unit = "Wh";
                  res.model = "pac3200T";
                break;
                case 69:
                case "reactEnergyImpTariff1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 937,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff1L2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 70:
                case "reactEnergyImpTariff2L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 941,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImpTariff2L2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 71:
                case "reactEnergyExpTariff1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 945,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff1L2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 72:
                case "reactEnergyExpTariff2L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 949,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExpTariff2L2";
                  res.format = "int64";
                  res.unit = "varh";
                  res.model = "pac3200T";
                break;
                case 73:
                case "appEnergyTariff1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 953,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff1L2";
                  res.format = "int64";
                  res.unit = "VAh";
                  res.model = "pac3200T";
                break;
                case 74:
                case "appEnergyTariff2L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 957,
                      quantity: 4,
                      };
                  res.topic = "appEnergyTariff2L2";
                  res.format = "int64";
                  res.unit = "VAh";
                  res.model = "pac3200T";
                break;
              }
            }
             // PAC4200
            else if(settings.device == "pac4200"){
            
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
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
                  res.model = "pac4200";
                break;
                case 21:
                case "voltageL1Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 43,
                      quantity: 2,
                      };
                  res.topic = "voltageL1Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 22:
                case "voltageL2Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 45,
                      quantity: 2,
                      };
                  res.topic = "voltageL2Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 23:
                case "voltageL3Thdr":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 47,
                      quantity: 2,
                      };
                  res.topic = "voltageL3Thdr";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 24:
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
                  res.model = "pac4200";
                break;
                case 25:
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
                  res.model = "pac4200";
                break;
                case 26:
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
                  res.model = "pac4200";
                break;
                case 27:
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
                  res.model = "pac4200";
                break;
                case 28:
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
                  res.model = "pac4200";
                break;
                case 29:
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
                  res.model = "pac4200";
                break;
                case 30:
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
                  res.model = "pac4200";
                break;
                case 31:
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
                  res.model = "pac4200";
                break;
                case 32:
                case "unbalanceVoltage":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 71,
                      quantity: 2,
                      };
                  res.topic = "unbalanceVoltage";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 33:
                case "unbalanceCurrent":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 73,
                      quantity: 2,
                      };
                  res.topic = "unbalanceCurrent";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 34:
                case "cosPhiL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 243,
                      quantity: 2,
                      };
                  res.topic = "cosPhiL1";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac4200";
                break;
                case 35:
                case "cosPhiL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 245,
                      quantity: 2,
                      };
                  res.topic = "cosPhiL2";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac4200";
                break;
                case 36:
                case "cosPhiL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 247,
                      quantity: 2,
                      };
                  res.topic = "cosPhiL3";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac4200";
                break;
                case 37:
                case "displacementAngleL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 249,
                      quantity: 2,
                      };
                  res.topic = "displacementAngleL1";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac4200";
                break;
                case 38:
                case "displacementAngleL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 251,
                      quantity: 2,
                      };
                  res.topic = "displacementAngleL2";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac4200";
                break;
                case 39:
                case "displacementAngleL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 253,
                      quantity: 2,
                      };
                  res.topic = "displacementAngleL3";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac4200";
                break;
                case 40:
                case "phaseAngleL11":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 255,
                      quantity: 2,
                      };
                  res.topic = "phaseAngleL11";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac4200";
                break;
                case 41:
                case "phaseAngleL12":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 257,
                      quantity: 2,
                      };
                  res.topic = "phaseAngleL12";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac4200";
                break;
                case 42:
                case "phaseAngleL13":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 259,
                      quantity: 2,
                      };
                  res.topic = "phaseAngleL13";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac4200";
                break;
                case 43:
                case "voltageThdL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 261,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL1";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 44:
                case "voltageThdL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 263,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL2";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 45:
                case "voltageThdL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 265,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL3";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 46:
                case "currentThdL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 267,
                      quantity: 2,
                      };
                  res.topic = "currentThdL1";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 47:
                case "currentThdL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 269,
                      quantity: 2,
                      };
                  res.topic = "currentThdL2";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 48:
                case "currentThdL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 271,
                      quantity: 2,
                      };
                  res.topic = "currentThdL3";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 49:
                case "distortionCurrentL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 273,
                      quantity: 2,
                      };
                  res.topic = "distortionCurrentL1";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac4200";
                break;
                case 50:
                case "distortionCurrentL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 275,
                      quantity: 2,
                      };
                  res.topic = "distortionCurrentL2";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac4200";
                break;
                case 51:
                case "distortionCurrentL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 277,
                      quantity: 2,
                      };
                  res.topic = "distortionCurrentL3";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac4200";
                break;
                case 52:
                case "reactPower-tot-L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 279,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot-L1";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac4200";
                break;
                case 53:
                case "reactPower-tot-L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 281,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot-L2";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac4200";
                break;
                case 54:
                case "reactPower-tot-L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 283,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot-L3";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac4200";
                break;
                case 55:
                case "reactPower-L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 285,
                      quantity: 2,
                      };
                  res.topic = "reactPower-L1";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac4200";
                break;
                case 56:
                case "reactPower-L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 287,
                      quantity: 2,
                      };
                  res.topic = "reactPower-L2";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac4200";
                break;
                case 57:
                case "reactPower-L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 289,
                      quantity: 2,
                      };
                  res.topic = "reactPower-L3";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac4200";
                break;
                case 58:
                case "unbalanceVoltage":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 291,
                      quantity: 2,
                      };
                  res.topic = "unbalanceVoltage";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 59:
                case "unbalanceCurrent":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 293,
                      quantity: 2,
                      };
                  res.topic = "unbalanceCurrent";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac4200";
                break;
                case 60:
                case "current-In":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 295,
                      quantity: 2,
                      };
                  res.topic = "current-In";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac4200";
                break;
                case 61:
                case "reactPower-tot-qtot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 297,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot-qtot";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac4200";
                break;
                case 62:
                case "reactPower-tot-q1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 299,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot-q1";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac4200";
                break;
              }
            }
            // PAC5200
            else if(settings.device == "pac5200"){
            
              switch(settings.data){
                case 0:
                case "voltage-L1N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 201,
                      quantity: 2,
                      };
                  res.topic = "voltage-L1N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac5200";
                break;
                case 1:
                case "voltage-L2N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 203,
                      quantity: 2,
                      };
                  res.topic = "voltage-L2N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac5200";
                break;
                case 2:
                case "voltage-L3N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 205,
                      quantity: 2,
                      };
                  res.topic = "voltage-L3N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac5200";
                break;
                case 3:
                case "voltage-N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 207,
                      quantity: 2,
                      };
                  res.topic = "voltage-N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac5200";
                break;
                case 4:
                case "currentL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 209,
                      quantity: 2,
                      };
                  res.topic = "currentL1";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac5200";
                break;
                case 5:
                case "currentL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 211,
                      quantity: 2,
                      };
                  res.topic = "currentL2";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac5200";
                break;
                case 6:
                case "currentL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 213,
                      quantity: 2,
                      };
                  res.topic = "currentL3";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac5200";
                break;
                case 7:
                case "current-In":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 215,
                      quantity: 2,
                      };
                  res.topic = "current-In";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac5200";
                break;
                case 8:
                case "voltage-L1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 217,
                      quantity: 2,
                      };
                  res.topic = "voltage-L1L2";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac5200";
                break;
                case 9:
                case "voltage-L2L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 219,
                      quantity: 2,
                      };
                  res.topic = "voltage-L2L3";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac5200";
                break;
                case 10:
                case "voltage-L3L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 221,
                      quantity: 2,
                      };
                  res.topic = "voltage-L3L1";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac5200";
                break;
                case 11:
                case "voltageLN-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 223,
                      quantity: 2,
                      };
                  res.topic = "voltageLN-avg";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "pac5200";
                break;
                case 12:
                case "current-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 225,
                      quantity: 2,
                      };
                  res.topic = "current-avg";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "pac5200";
                break;
                case 13:
                case "actPowerL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 227,
                      quantity: 2,
                      };
                  res.topic = "actPowerL1";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac5200";
                break;
                case 14:
                case "actPowerL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 229,
                      quantity: 2,
                      };
                  res.topic = "actPowerL2";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac5200";
                break;
                case 15:
                case "actPowerL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 231,
                      quantity: 2,
                      };
                  res.topic = "actPowerL3";
                   res.format = "float32";
                  res.unit = "W";
                  res.model = "pac5200";
                break;
                case 16:
                case "actPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 233,
                      quantity: 2,
                      };
                  res.topic = "actPower-tot";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "pac5200";
                break;
                case 17:
                case "reactPowerL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 235,
                      quantity: 2,
                      };
                  res.topic = "reactPowerL1";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac5200";
                break;
                case 18:
                case "reactPowerL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 237,
                      quantity: 2,
                      };
                  res.topic = "reactPowerL2";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac5200";
                break;
                case 19:
                case "reactPowerL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 239,
                      quantity: 2,
                      };
                  res.topic = "reactPowerL3";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac5200";
                break;
                case 20:
                case "reactPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 241,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac5200";
                break;
                case 21:
                case "appPowerL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 243,
                      quantity: 2,
                      };
                  res.topic = "appPowerL1";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac5200";
                break;
                case 22:
                case "appPowerL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 245,
                      quantity: 2,
                      };
                  res.topic = "appPowerL2";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac5200";
                break;
                case 23:
                case "appPowerL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 247,
                      quantity: 2,
                      };
                  res.topic = "appPowerL3";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac5200";
                break;
                case 24:
                case "appPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 249,
                      quantity: 2,
                      };
                  res.topic = "appPower-tot";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "pac5200";
                break;
                case 25:
                case "cosPhiL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 251,
                      quantity: 2,
                      };
                  res.topic = "cosPhiL1";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 26:
                case "cosPhiL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 253,
                      quantity: 2,
                      };
                  res.topic = "cosPhiL2";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 27:
                case "cosPhiL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 255,
                      quantity: 2,
                      };
                  res.topic = "cosPhiL3";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 28:
                case "cosPhi-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 257,
                      quantity: 2,
                      };
                  res.topic = "cosPhi-tot";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 29:
                case "pFactorL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 259,
                      quantity: 2,
                      };
                  res.topic = "pFactorL1";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 30:
                case "pFactorL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 261,
                      quantity: 2,
                      };
                  res.topic = "pFactorL2";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 31:
                case "pFactorL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 263,
                      quantity: 2,
                      };
                  res.topic = "pFactorL3";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 32:
                case "pFactor-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 265,
                      quantity: 2,
                      };
                  res.topic = "pFactor-tot";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 33:
                case "phaseAngleL11":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 267,
                      quantity: 2,
                      };
                  res.topic = "phaseAngleL11";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac5200";
                break;
                case 34:
                case "phaseAngleL12":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 269,
                      quantity: 2,
                      };
                  res.topic = "phaseAngleL12";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac5200";
                break;
                case 35:
                case "phaseAngleL13":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 271,
                      quantity: 2,
                      };
                  res.topic = "phaseAngleL13";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac5200";
                break;
                case 36:
                case "phaseAngle-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 273,
                      quantity: 2,
                      };
                  res.topic = "phaseAngle-tot";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac5200";
                break;
                case 37:
                case "frequency":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 275,
                      quantity: 2,
                      };
                  res.topic = "frequency";
                  res.format = "float32";
                  res.unit = "Hz";
                  res.model = "pac5200";
                break;
                case 38:
                case "ampUnbalanceVoltage":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 277,
                      quantity: 2,
                      };
                  res.topic = "ampUnbalanceVoltage";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac5200";
                break;
                case 39:
                case "ampUnbalanceCurrent":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 279,
                      quantity: 2,
                      };
                  res.topic = "ampUnbalanceCurrent";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "pac5200";
                break;
                case 40:
                case "voltageThdL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 295,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL1";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 41:
                case "voltageThdL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 297,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL2";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 42:
                case "voltageThdL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 299,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL3";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 43:
                case "currentThdL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 301,
                      quantity: 2,
                      };
                  res.topic = "currentThdL1";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 44:
                case "currentThdL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 303,
                      quantity: 2,
                      };
                  res.topic = "currentThdL2";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 45:
                case "currentThdL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 305,
                      quantity: 2,
                      };
                  res.topic = "currentThdL3";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "pac5200";
                break;
                case 46:
                case "phaseAngleL12-voltage":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 307,
                      quantity: 2,
                      };
                  res.topic = "phaseAngleL12-voltage";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac5200";
                break;
                case 47:
                case "phaseAngleL13-voltage":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 309,
                      quantity: 2,
                      };
                  res.topic = "phaseAngleL13-voltage";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac5200";
                break;
                case 48:
                case "phaseAngleL12-current":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 311,
                      quantity: 2,
                      };
                  res.topic = "phaseAngleL12-current";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac5200";
                break;
                case 49:
                case "phaseAngleL13-current":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 313,
                      quantity: 2,
                      };
                  res.topic = "phaseAngleL13-current";
                  res.format = "float32";
                  res.unit = "°";
                  res.model = "pac5200";
                break;
                case 49:
                case "reactPower-Q1-L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 315,
                      quantity: 2,
                      };
                  res.topic = "reactPower-Q1-L1";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac5200";
                break;
                case 50:
                case "reactPower-Q1-L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 317,
                      quantity: 2,
                      };
                  res.topic = "reactPower-Q1-L2";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac5200";
                break;
                case 51:
                case "reactPower-Q1-L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 319,
                      quantity: 2,
                      };
                  res.topic = "reactPower-Q1-L3";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac5200";
                break;
                case 52:
                case "reactPower-Q1-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 321,
                      quantity: 2,
                      };
                  res.topic = "reactPower-Q1-tot";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "pac5200";
                break;
              }
            }
            // SEM3
            else if(settings.device == "sem3"){
            
              switch(settings.data){
                case 0:
                case "voltageLine1-L1-N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 1,
                      quantity: 2,
                      };
                  res.topic = "voltageLine1-L1-N";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 1:
                case "voltageLine1-L2-N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3,
                      quantity: 2,
                      };
                  res.topic = "voltageLine1-L2-N";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 2:
                case "voltageLine1-L3-N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 5,
                      quantity: 2,
                      };
                  res.topic = "voltageLine1-L3-N";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 3:
                case "voltageLine1-L1-L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 7,
                      quantity: 2,
                      };
                  res.topic = "voltageLine1-L1-L2";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 4:
                case "voltageLine1-L2-L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 9,
                      quantity: 2,
                      };
                  res.topic = "voltageLine1-L2-L3";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 5:
                case "voltageLine1-L3-L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 11,
                      quantity: 2,
                      };
                  res.topic = "voltageLine1-L3-L1";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 6:
                case "voltageLine2-L1-N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 13,
                      quantity: 2,
                      };
                  res.topic = "voltageLine2-L1-N";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 7:
                case "voltageLine2-L2-N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 15,
                      quantity: 2,
                      };
                  res.topic = "voltageLine2-L2-N";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 8:
                case "voltageLine2-L3-N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 17,
                      quantity: 2,
                      };
                  res.topic = "voltageLine2-L3-N";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 9:
                case "voltageLine2-L1-L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 19,
                      quantity: 2,
                      };
                  res.topic = "voltageLine2-L1-L2";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 10:
                case "voltageLine2-L2-L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 21,
                      quantity: 2,
                      };
                  res.topic = "voltageLine2-L2-L3";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 11:
                case "voltageLine2-L3-L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 23,
                      quantity: 2,
                      };
                  res.topic = "voltageLine2-L3-L1";
                  res.format = "uint32";
                  res.unit = "V";
                  res.model = "sem3";
                break;
                case 12:
                case "frequencyLine1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 25,
                      quantity: 2,
                      };
                  res.topic = "frequencyLine1";
                  res.format = "uint32";
                  res.unit = "Hz";
                  res.model = "sem3";
                break;
                case 13:
                case "frequencyLine2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 27,
                      quantity: 2,
                      };
                  res.topic = "frequencyLine2";
                  res.format = "uint32";
                  res.unit = "Hz";
                  res.model = "sem3";
                break;
                case 14:
                case "batteryVoltage":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 29,
                      quantity: 2,
                      };
                  res.topic = "batteryVoltage";
                  res.format = "uint32";
                  res.unit = "V DC";
                  res.model = "sem3";
                break;
                case 15:
                case "totalTime":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 31,
                      quantity: 2,
                      };
                  res.topic = "totalTime";
                  res.format = "uint32";
                  res.unit = "s";
                  res.model = "sem3";
                break;
                case 16:
                case "timeLine1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 33,
                      quantity: 2,
                      };
                  res.topic = "timeLine1";
                  res.format = "uint32";
                  res.unit = "s";
                  res.model = "sem3";
                break;
                case 17:
                case "timeLine2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 35,
                      quantity: 2,
                      };
                  res.topic = "timeLine2";
                  res.format = "uint32";
                  res.unit = "s";
                  res.model = "sem3";
                break;
                case 18:
                case "timeLine1not":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 37,
                      quantity: 2,
                      };
                  res.topic = "timeLine1not";
                  res.format = "uint32";
                  res.unit = "s";
                  res.model = "sem3";
                break;
                case 19:
                case "timeLine2not":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 39,
                      quantity: 2,
                      };
                  res.topic = "timeLine2not";
                  res.format = "uint32";
                  res.unit = "s";
                  res.model = "sem3";
                break;
                case 20:
                case "timeLine1breakClose":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 41,
                      quantity: 2,
                      };
                  res.topic = "timeLine1breakClose";
                  res.format = "uint32";
                  res.unit = "s";
                  res.model = "sem3";
                break;
                case 21:
                case "timeLine2breakClose":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 43,
                      quantity: 2,
                      };
                  res.topic = "timeLine2breakClose";
                  res.format = "uint32";
                  res.unit = "s";
                  res.model = "sem3";
                break;
                case 22:
                case "totalClosed":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 45,
                      quantity: 2,
                      };
                  res.topic = "totalClosed";
                  res.format = "uint32";
                  res.unit = "s";
                  res.model = "sem3";
                break;
                case 23:
                case "line1Aut":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 49,
                      quantity: 2,
                      };
                  res.topic = "line1Aut";
                  res.format = "uint32";
                  res.unit = "";
                  res.model = "sem3";
                break;
                case 24:
                case "line2Aut":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 51,
                      quantity: 2,
                      };
                  res.topic = "line2Aut";
                  res.format = "uint32";
                  res.unit = "";
                  res.model = "sem3";
                break;
                case 25:
                case "line1Man":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 53,
                      quantity: 2,
                      };
                  res.topic = "line1Man";
                  res.format = "uint32";
                  res.unit = "";
                  res.model = "sem3";
                break;
                case 26:
                case "line2Man":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 55,
                      quantity: 2,
                      };
                  res.topic = "line2Man";
                  res.format = "uint32";
                  res.unit = "";
                  res.model = "sem3";
                break; 
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
                case 0:
                case "currentL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 1,
                      quantity: 2,
                      };
                  res.topic = "currentL1";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "3va";
                break;
                case 1:
                case "currentL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3,
                      quantity: 2,
                      };
                  res.topic = "currentL2";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "3va";
                break;
                case 2:
                case "currentL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 5,
                      quantity: 2,
                      };
                  res.topic = "currentL2";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "3va";
                break;
                case 3:
                case "current-In":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 7,
                      quantity: 2,
                      };
                  res.topic = "current-In";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "3va";
                break;
                case 4:
                case "current-G":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 9,
                      quantity: 2,
                      };
                  res.topic = "current-G";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "3va";
                break;
                case 5:
                case "3ph-average-current":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 11,
                      quantity: 2,
                      };
                  res.topic = "3ph-average-current";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "3va";
                break;
                case 6:
                case "currentUnbalance":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 13,
                      quantity: 2,
                      };
                  res.topic = "currentUnbalance";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "3va";
                break;
                case 7:
                case "highPhaseCurrent":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 15,
                      quantity: 2,
                      };
                  res.topic = "highPhaseCurrent";
                  res.format = "uint16";
                  res.unit = "";
                  res.model = "3va";
                break;
                case 8:
                case "maxPhaseCurrent":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 17,
                      quantity: 2,
                      };
                  res.topic = "maxPhaseCurrent";
                  res.format = "float32";
                  res.unit = "A";
                  res.model = "3va";
                break;
                case 9:
                case "voltage-L1N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 25,
                      quantity: 2,
                      };
                  res.topic = "voltage-L1N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "3va";
                break;
                case 10:
                case "voltage-L2N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 27,
                      quantity: 2,
                      };
                  res.topic = "voltage-L2N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "3va";
                break;
                case 11:
                case "voltage-L3N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 29,
                      quantity: 2,
                      };
                  res.topic = "voltage-L3N";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "3va";
                break;
                case 12:
                case "voltage-L1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 19,
                      quantity: 2,
                      };
                  res.topic = "voltage-L1L2";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "3va";
                break;
                case 13:
                case "voltage-L2L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 21,
                      quantity: 2,
                      };
                  res.topic = "voltage-L2L3";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "3va";
                break;
                case 14:
                case "voltage-L3L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 23,
                      quantity: 2,
                      };
                  res.topic = "voltage-L3L1";
                   res.format = "float32";
                  res.unit = "V";
                  res.model = "3va";
                break;
                case 15:
                case "voltageLN-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 25,
                      quantity: 2,
                      };
                  res.topic = "voltageLN-avg";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "3va";
                break;
                case 16:
                case "voltageLL-avg":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 27,
                      quantity: 2,
                      };
                  res.topic = "voltageLL-avg";
                  res.format = "float32";
                  res.unit = "V";
                  res.model = "3va";
                 break;
                case 17:
                case "voltageUnbalance":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 41,
                      quantity: 2,
                      };
                  res.topic = "voltageUnbalance";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "3va";
                break;
                case 18:
                case "frequency":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 45,
                      quantity: 2,
                      };
                  res.topic = "frequency";
                  res.format = "float32";
                  res.unit = "Hz";
                  res.model = "3va";
                break;
                case 19:
                case "actPowerL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 29,
                      quantity: 2,
                      };
                  res.topic = "actPowerL1";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "3va";
                break;
                case 20:
                case "actPowerL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 31,
                      quantity: 2,
                      };
                  res.topic = "actPowerL2";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "3va";
                break;
                case 21:
                case "actPowerL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 33,
                      quantity: 2,
                      };
                  res.topic = "actPowerL1";
                  res.format = "float32";
                  res.unit = "3";
                  res.model = "3va";
                break;
                case 22:
                case "actPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 35,
                      quantity: 2,
                      };
                  res.topic = "actPower-tot";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "3va";
                break;
                case 23:
                case "appPowerL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 37,
                      quantity: 2,
                      };
                  res.topic = "appPowerL1";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "3va";
                break;
                case 24:
                case "appPowerL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 57,
                      quantity: 2,
                      };
                  res.topic = "appPowerL2";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "3va";
                break;
                case 25:
                case "appPowerL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 59,
                      quantity: 2,
                      };
                  res.topic = "appPowerL3";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "3va";
                break;
                case 26:
                case "appPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 61,
                      quantity: 2,
                      };
                  res.topic = "appPower-tot";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "3va";
                break;
                case 27:
                case "reactPower-tot-L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 39,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot-L1";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "3va";
                break;
                case 28:
                case "reactPower-tot-L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 41,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot-L2";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "3va";
                break;
                case 29:
                case "reactPower-tot-L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 43,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot-L3";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "3va";
                break;
                case 30:
                case "reactPower-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 45,
                      quantity: 2,
                      };
                  res.topic = "reactPower-tot";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "3va";
                break;
                case 31:
                case "pFactorL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 49,
                      quantity: 2,
                      };
                  res.topic = "pFactorL1";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "3va";
                break;
                case 32:
                case "pFactorL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 51,
                      quantity: 2,
                      };
                  res.topic = "pFactorL2";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "3va";
                break;
                case 33:
                case "pFactorL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 53,
                      quantity: 2,
                      };
                  res.topic = "pFactorL3";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "3va";
                break;
                case 34:
                case "pf-tot":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 55,
                      quantity: 2,
                      };
                  res.topic = "pf-tot";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "3va";
                break;
                case 35:
                case "currentThdL1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 93,
                      quantity: 2,
                      };
                  res.topic = "currentThdL1";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "3va";
                break;
                case 36:
                case "currentThdL2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 59,
                      quantity: 2,
                      };
                  res.topic = "currentThdL2";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "3va";
                break;
                case 37:
                case "currentThdL3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 61,
                      quantity: 2,
                      };
                  res.topic = "currentThdL3";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "3va";
                break;
                case 38:
                case "voltageThdL1N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 63,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL1N";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "3va";
                break;
                case 39:
                case "voltageThdL2N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 65,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL2N";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "3va";
                break;
                case 40:
                case "voltageThdL3N":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 67,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL3N";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "3va";
                break;
                case 41:
                case "voltageThdL1L2":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 105,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL1L2";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "3va";
                break;
                case 42:
                case "voltageThdL2L3":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 107,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL2L3";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "3va";
                break;
                case 43:
                case "voltageThdL3L1":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 109,
                      quantity: 2,
                      };
                  res.topic = "voltageThdL3L1";
                  res.format = "float32";
                  res.unit = "%";
                  res.model = "3va";
                break;
                case 44:
                case "actEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 121,
                      quantity: 4,
                      };
                  res.topic = "actEnergyImp";
                  res.format = "float64";
                  res.unit = "Wh";
                  res.model = "3va";
                break;
                case 45:
                case "actEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 125,
                      quantity: 4,
                      };
                  res.topic = "actEnergyExp";
                  res.format = "float64";
                  res.unit = "Wh";
                  res.model = "3va";
                break;
                case 46:
                case "reactEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 81,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyImp";
                  res.format = "float64";
                  res.unit = "varh";
                  res.model = "3va";
                break;
                case 47:
                case "reactEnergyExp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 85,
                      quantity: 4,
                      };
                  res.topic = "reactEnergyExp";
                  res.format = "float64";
                  res.unit = "varh";
                  res.model = "3va";
                break;
                
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
                      address: 3071,
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
                      address: 3073,
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
                      address: 3075,
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
                      address: 3077,
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
                      address: 3079,
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
                      address: 3081,
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
                      address: 3083,
                      quantity: 2,
                      };
                  res.topic = "frequency";
                  res.format = "float32";
                  res.unit = "Hz";
                  res.model = "powercenter1000";
                break;
                case 7:
                case "actPower-L":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3085,
                      quantity: 2,
                      };
                  res.topic = "actPower-L";
                  res.format = "float32";
                  res.unit = "W";
                  res.model = "powercenter1000";
                break;
                case 8:
                case "appPower-L":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3087,
                      quantity: 2,
                      };
                  res.topic = "appPower-L";
                  res.format = "float32";
                  res.unit = "VA";
                  res.model = "powercenter1000";
                break;
                case 9:
                case "reactPower-L":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3089,
                      quantity: 2,
                      };
                  res.topic = "reactPower-L";
                  res.format = "float32";
                  res.unit = "var";
                  res.model = "powercenter1000";
                break;
                case 10:
                case "pFactor-L":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3091,
                      quantity: 2,
                      };
                  res.topic = "pFactor-L";
                  res.format = "float32";
                  res.unit = "";
                  res.model = "powercenter1000";
                break;
                case 11:
                case "actEnergyImp":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 3093,
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
                      address: 3097,
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
                      address: 3101,
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
                      address: 3105,
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
                      address: 3109,
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
                      address: 2559,
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
                      address: 2592,
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
                      address: 2601,
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
                      address: 2623,
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
