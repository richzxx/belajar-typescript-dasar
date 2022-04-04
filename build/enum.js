"use strict";
// Enum
// Numeric Enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 0] = "JAN";
    Month[Month["FEB"] = 1] = "FEB";
    Month[Month["MAR"] = 2] = "MAR";
    Month[Month["APR"] = 3] = "APR";
    Month[Month["MAY"] = 4] = "MAY";
    Month[Month["JUN"] = 5] = "JUN";
    Month[Month["JUL"] = 6] = "JUL";
    Month[Month["AUG"] = 7] = "AUG";
    Month[Month["SEP"] = 8] = "SEP";
    Month[Month["OCT"] = 9] = "OCT";
    Month[Month["NOV"] = 10] = "NOV";
    Month[Month["DEC"] = 11] = "DEC";
})(Month || (Month = {}));
var Bulan;
(function (Bulan) {
    Bulan["Jan"] = "Januari";
    Bulan["Feb"] = "Februari";
    Bulan["Mar"] = "Maret";
    Bulan["Apr"] = "April";
    Bulan["May"] = "Mei";
    Bulan["Jun"] = "Juni";
})(Bulan || (Bulan = {}));
console.log(Bulan.Jan);
