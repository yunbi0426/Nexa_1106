if (nexacro) {
    nexacro.NexaLAP = {}
    nexacro.NexaLAP._projectNo = "Nexa_1106";
    nexacro.NexaLAP._NexaLAPServer_url = "http://localhost:8080/";

    if (nexacro.Environment) {
        nexacro.NexaLAP.init = function () {
            // NexaLAPServer Service Management
            nexacro._addService("NexaLAPServer", "bs", nexacro.NexaLAP._NexaLAPServer_url, "none", null, "", "0", "0");
        }
    }
}
