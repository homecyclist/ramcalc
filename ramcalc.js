var DDRFreq = document.getElementById('DDR_Freq');
var DDRtCL = document.getElementById('DDR_tCL');
var DDRns = document.getElementById('DDR_Latency');
var DDRtRFCns = document.getElementById('DDR_tRFCns');
var DDRtRFC1 = document.getElementById('DDR_tRFC1');

var DDRtRFC1_ = document.getElementById('DDR_tRFC1_');
var DDR_trfcns_ = document.getElementById('DDR_tRFCns_');

var DDR_tREFi = document.getElementById('DDR_tREFi');

DDRFreq.addEventListener('input', DDR_latencyNs);
DDRtCL.addEventListener('input', DDR_latencyNs);

DDRFreq.addEventListener('input', DDR_tRFCval);
DDRtRFCns.addEventListener('input', DDR_tRFCval);

DDRFreq.addEventListener('input', DDR_tRFCns_);
DDRtRFC1_.addEventListener('input', DDR_tRFCns_);

DDRFreq.addEventListener('input', ustotrefi);

//CAS Latency to Absolute Latency(ns)
function DDR_latencyNs(){
    var DDR_MT = parseInt(DDRFreq.value) || 0;
    var DDR_Cl = parseInt(DDRtCL.value) || 0;
    // DRAM Access Latency = 1.0/( dataRate/2.0 )*casLatency )*1000.0
    DDRns.value = ((1.0/(DDR_MT/2.0)*DDR_Cl)*1000).toPrecision(6)
}

function DDR_tRFCval(){
    var dataratemt = parseInt(DDRFreq.value) || 0;
    var tRFCns = parseFloat(DDRtRFCns.value) || 0;
    // DRAM tRFC1 = tRFC(ns) * datarate(MT) / 2000
    DDRtRFC1.value = (tRFCns*dataratemt/2000)
}

//Convert tRFC1 value to tRFC(ns):
function DDR_tRFCns_(){
    var dataratemt = parseInt(DDRFreq.value) || 0;
    var tRFCval = parseFloat(DDRtRFC1_.value) || 0;
    // DRAM tRFC(ns) = (tRFCval * 2000)/datarate
    DDR_trfcns_.value = (tRFCval*2000)/dataratemt
}

//Convert uS to tREFi
function ustotrefi(){
    var dataratemt = parseInt(DDRFreq.value) || 0;
    // tREFi val = datarate/2*7.8
    DDR_tREFi.value = (dataratemt/2*7.8)
}

