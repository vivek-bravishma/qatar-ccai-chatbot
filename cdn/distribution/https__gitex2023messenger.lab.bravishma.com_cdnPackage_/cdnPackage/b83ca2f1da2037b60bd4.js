webpackJsonp([55],{1042:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n,o=t||{},l=String(o.unit);return n="dayOfMonth"===l?3===e||23===e?"-є":"-е":"-й",e+n}Object.defineProperty(t,"__esModule",{value:!0});var u=n(223),a=o(u),r=n(222),f=o(r),d={narrow:["нд","пн","вт","ср","чт","пт","сб"],short:["нед","пон","вів","сер","чтв","птн","суб"],long:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},i={short:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],long:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},s={long:["ночі","ранку","дня","вечора"]},g={ordinalNumber:l,weekday:(0,a.default)(d,"long"),weekdays:(0,f.default)(d,"long"),month:(0,a.default)(i,"long"),months:(0,f.default)(i,"long"),timeOfDay:(0,a.default)(s,"long",function(e){return e>=17?3:e>=12?2:e>=4?1:0}),timesOfDay:(0,f.default)(s,"long")};t.default=g,e.exports=t.default}});
//# sourceMappingURL=b83ca2f1da2037b60bd4.js.map