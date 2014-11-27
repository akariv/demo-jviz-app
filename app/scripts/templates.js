this["JST"] = this["JST"] || {};

this["JST"]["basic_info"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-2">\n  <img src="' +
((__t = ( picture )) == null ? '' : __t) +
'"/>\n</div>\n<div clas="col-md-10">\n  <span class="name">' +
((__t = ( name )) == null ? '' : __t) +
'</span>\n  <span class="tagline">' +
((__t = ( summary.split('.')[0] )) == null ? '' : __t) +
'.</span>\n</div>\n';

}
return __p
};

this["JST"]["work"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row employment-item">\n  <div class="employment-title">\n    <span class="dates">' +
((__t = ( startDate )) == null ? '' : __t) +
' - ' +
((__t = ( hasOwnProperty('endDate') ? endDate : '' )) == null ? '' : __t) +
'</span>\n    <span class="position">' +
((__t = ( position )) == null ? '' : __t) +
'</span> @ <span class="company">' +
((__t = ( company )) == null ? '' : __t) +
'</span>\n  </div>\n  <span class="description">' +
((__t = ( hasOwnProperty('summary') ? summary : 'Something' )) == null ? '' : __t) +
'</span>\n</div>\n';

}
return __p
};