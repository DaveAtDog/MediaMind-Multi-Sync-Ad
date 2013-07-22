function cacheBuster()
{
	return Math.round(Math.random() * 1000000)
}

var flashvars = {};
var params = {};
var attributes = {};
swfobject.embedSWF("swf/Master.swf?" + cacheBuster(), "swf_master", "468", "60", "8.0.0", false, flashvars, params, attributes);
swfobject.embedSWF("swf/Slave1.swf?" + cacheBuster(), "swf_slave1", "120", "60", "8.0.0", false, flashvars, params, attributes);
swfobject.embedSWF("swf/Slave2.swf?" + cacheBuster(), "swf_slave2", "120", "60", "8.0.0", false, flashvars, params, attributes);
