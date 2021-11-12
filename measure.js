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
                      address: 3025,
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
            else if(settings.device == "pac1200"){
            
              switch(settings.data){
                
              }
            }
            // PAC1600
            else if(settings.device == "pac1600"){
            
              switch(settings.data){
                
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
                
              }
            }
            
            
            
            
            node.send(res);
        });
    }
    RED.nodes.registerType("measure", measureNode);
}
