
if (sbrzGSearchID) {
  (function() {
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + sbrzGSearchID;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
}

function activateSocial(id){
    var lab_id=eval(id);
	if (lab_id) {
      document.getElementById(id).setAttribute("href", lab_id);
	} else {
		document.getElementById(id).remove();
	}
}
var sbrzGSearchID;
var sbrzLinkedin, sbrzGoogleplus, sbrzGithub, sbrzDribbble, sbrzPinterest, sbrzVimeo, sbrzDropbox, sbrzWechat, sbrzYoutube, sbrzPay, sbrzPayLabel, sbrzFacebook, sbrzTwitter;
var sbrzlist={ sbrzLinkedin, sbrzGoogleplus, sbrzGithub, sbrzDribbble, sbrzPinterest, sbrzVimeo, sbrzDropbox, sbrzWechat, sbrzYoutube, sbrzFacebook, sbrzTwitter } ;
$( document ).ready(function() {
  for (var brzsocial in sbrzlist) {
	activateSocial(brzsocial);
  }
  var lab_id=eval("sbrzPay");
  if (lab_id) {
    document.getElementById("sbrzPay").setAttribute("href", lab_id);
    var txt_id=eval("sbrzPayLabel");
    if (txt_id){
      document.getElementById("sbrzPay").innerHTML=txt_id;
    } 
  } else {
   document.getElementById("sbrzPay").remove();
  }
});
