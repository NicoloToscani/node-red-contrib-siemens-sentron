module.exports = function(RED) {
    
    function fromDouble64IEEE(bytes) {
	    // Decode 8 bytes IEEE754 Floats
	    
	    // define exponent and mantissa length
	    let ebits = 11;
	    let fbits = 52;
	    
	    // Bytes to bits
	    var bits = [];
	    for (var i = bytes.length; i; i -= 1) {
		var byte = bytes[i - 1];
		for (var j = 8; j; j -= 1) {
		    bits.push(byte % 2 ? 1 : 0); byte = byte >> 1;
		}
	    }
	    bits.reverse();
	    var str = bits.join('');
	   
	    // Unpack sign, exponent, fraction
	    var bias = (1 << (ebits - 1)) - 1;
	    var s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
	    var e = parseInt(str.substring(1, 1 + ebits), 2);
	    var f = parseInt(str.substring(1 + ebits), 2);
	     
	    // Produce number
	    if (e === (1 << ebits) - 1) {
		return f !== 0 ? NaN : s * Infinity;
		
	    }
	    else if (e > 0) {
		return s * Math.pow(2, e - bias) * (1 + f / Math.pow(2, fbits));
	    }
	    else if (f !== 0) {
		return s * Math.pow(2, -(bias-1)) * (f / Math.pow(2, fbits));
		
	    }
	    else {
		return s * 0;
	
	    }
}
    
    function converterNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.unitId = config.unitId;
        this.device = config.device;
        this.data = config.data;
        var node = this;
        node.on('input', function(msg) {
        switch(msg.format) {
            case "float32":
                if(msg.model == "pac2200" || msg.model == "pac1200" || msg.model == "pac1600" || msg.model == "pac3100" || msg.model == "pac3200T" || msg.model == "pac4200"
                   || msg.model == "pac5200" || msg.model == "sem3" || msg.model == "atc6300" || msg.model == "3va" || msg.model == "powercenter1000" || msg.model == "pac3120"|| msg.model == "pac3220" ){
                   
                   // Convert payload
                   msg.payload = msg.payload.buffer.readFloatBE(0,4).toFixed(2);
                } 
                // Send payload
                node.send(msg);
            break;
            case "float64":
                if(msg.model == "pac2200" || msg.model == "pac1200" || msg.model == "pac1600" || msg.model == "pac3100" || msg.model == "pac3200T" || msg.model == "pac4200"
                   || msg.model == "pac5200" || msg.model == "sem3" || msg.model == "atc6300" || msg.model == "3va" || msg.model == "powercenter1000" || msg.model == "pac3120"|| msg.model == "pac3220"){
                   
                   // Convert payload
                   msg.payload = msg.payload.buffer.readFloatBE(0,8).toFixed(2);
                } 
                // Send payload
                node.send(msg);
            break;
            case "uint16":
                if(msg.model == "pac2200" || msg.model == "pac1200" || msg.model == "pac1600" || msg.model == "pac3100" || msg.model == "pac3200T" || msg.model == "pac4200"
                   || msg.model == "pac5200" || msg.model == "sem3" || msg.model == "atc6300" || msg.model == "3va" || msg.model == "powercenter1000" || msg.model == "pac3120"|| msg.model == "pac3220"){
                   
                   // Convert payload
                   msg.payload = msg.payload.buffer.readUInt16BE();
                   
                   // Check POC1000 status register
                   if(msg.model == "pac2200" && msg.topic == "status"){
                         
                         if(msg.payload == 0){
                         
                            msg.deviceState = "Unknown";   
                            
                         }
                         
                         else if (msg.payload == 1){
                         
                            msg.deviceState = "Breaker OFF";
                            
                         }
                         
                         else if (msg.payload == 2){
                         
                            msg.deviceState = "Breaker ON";
                            
                         }
                         else if (msg.payload == 3){
                         
                            msg.deviceState = "Breaker TRIP & level blocked";
                            
                         }
                   }
                   
                }
                // Send payload
                node.send(msg);
            break;
            case "uint32":
                if(msg.model == "pac2200" || msg.model == "pac1200" || msg.model == "pac1600" || msg.model == "pac3100" || msg.model == "pac3200T" || msg.model == "pac4200"
                   || msg.model == "pac5200" || msg.model == "sem3" || msg.model == "atc6300" || msg.model == "3va" || msg.model == "powercenter1000" || msg.model == "pac3120"|| msg.model == "pac3220"){
                
                   // Convert payload
                   msg.payload = msg.payload.buffer.readUInt32BE(0,4).toFixed(2);
                }
                // Send payload
                node.send(msg);
            break;
            case "int64":
                if(msg.model == "pac2200" || msg.model == "pac1200" || msg.model == "pac1600" || msg.model == "pac3100" || msg.model == "pac3200T" || msg.model == "pac4200"
                   || msg.model == "pac5200" || msg.model == "sem3" || msg.model == "atc6300" || msg.model == "3va" || msg.model == "powercenter1000" || msg.model == "pac3120"|| msg.model == "pac3220"){
                
                    // Convert payload
                   msg.payload = msg.payload.buffer.readBigInt64BE(0);
                }
                // Send payload
                node.send(msg);
            break;
            case "double":
                if(msg.model == "pac2200" || msg.model == "pac1200" || msg.model == "pac1600" || msg.model == "pac3100" || msg.model == "pac3200T" || msg.model == "pac4200"
                   || msg.model == "pac5200" || msg.model == "sem3" || msg.model == "atc6300" || msg.model == "3va" || msg.model == "powercenter1000" || msg.model == "pac3120"|| msg.model == "pac3220"){
                
                    // Convert payload
                    msg.payload = Number((fromDouble64IEEE(msg.payload.buffer) /1000).toFixed(3));
                   
                }
                // Send payload
                node.send(msg);
            break;
            
            default:
                node.warn("Getter not configured for this data format: (" + msg.format + ")." );
                node.send(msg);
        }
 
        });
    }
    RED.nodes.registerType("getter",converterNode);
}
