module.exports = function(RED) {
    function converterNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.unitId = config.unitId;
        this.data = config.data;
        var node = this;
        node.on('input', function(msg) {
        switch(msg.format) {
            case "float32":
                if(msg.model == "pac2200" || msg.model == "iem3000" || msg.model == "pm5000" ){
                   msg.payload = msg.payload.buffer.readFloatBE(0,4).toFixed(2);
                } 
            break;
            case "uint32":
                if(msg.model == "pac2200" || msg.model == "iem3000" || msg.model == "pm5000" ){
                
                   msg.payload = msg.payload.buffer.readUInt32BE(0,4).toFixed(2);
                }
                node.send(msg);
            break;
            case "int64":
                if(msg.model == "pac2200" || msg.model == "iem3000" || msg.model == "pm5000" ){
                
                   msg.payload = msg.payload.buffer.readBigInt64BE(0);
                }
                node.send(msg);
            break;
            default:
                node.warn("Extractor not configured for this data format: (" + msg.format + ")." );
                node.send(msg);
        }
 
        });
    }
    RED.nodes.registerType("converter",converterNode);
}
