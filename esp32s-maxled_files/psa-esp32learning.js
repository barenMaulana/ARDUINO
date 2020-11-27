   'use strict';

    if (typeof jQuery === "undefined") {

        var script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-latest.min.js';
        script.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);
    }

	var _pushassist = {};

	_pushassist.appkey		= "AIzaSyAExvLquLphb8ImrLNOz_jo_3F47n__LuQ";
	_pushassist.serverUrl	= "https://api2.pushassist.com";
	_pushassist.Url			= "https://esp32learning.pushassist.com";
	_pushassist.assetsURL	= "https://cdn.pushassist.com/account";
	_pushassist.subdomain	= "esp32learning";
	_pushassist.safariWebsitePushId = "web.com.pushassist.push";
	_pushassist.intervalTime = 5;
    
    _pushassist.isEnabledUnsubscribedWidget = 0;
    _pushassist.widgetType = 0;    
    _pushassist.widgetTitle = "Push Notification Preferences";
    
    _pushassist.subscribeMessage    =   "Subscribe to Notification";
    _pushassist.subscriberClick    =   "Subscribe";
    _pushassist.subscriberSuccessMessage    =   "You will get notifications from us.";
    
    _pushassist.unsubscribeMessage    =   "Opt out from Notification";
    _pushassist.unsubscriberClick    =   "Unsubscribe";
    _pushassist.unsubscriberSuccessMessage    =   "Successfully opted out from notification.";       
        
    _pushassist.unsubscrubeButtonMessage = "Disable Automated Profiling";
    _pushassist.subscrubeButtonMessage = "Enable Automated Profiling";    
        
    _pushassist.confirmationWidget = "Are you sure?";
    _pushassist.confirmationWidgetButtonYes = "Yes";
    _pushassist.confirmationWidgetButtonNo = "No";
    _pushassist.thankYouWidget = "Preference saved successfully";
  
    var _pa;

	var subdomainUrl = "https://"+ _pushassist.subdomain + ".pushassist.com";

	function get_values() {

        var fontURL = "https://fonts.googleapis.com/css?family=Roboto:400,100,300",
            headfonts = document.getElementsByTagName("head")[0],
            fontlink = document.createElement("link");
        fontlink.rel = "stylesheet", fontlink.href = fontURL, headfonts.appendChild(fontlink);

		var cssUrl = "https://cdn1.pushassist.com/account/css/psa-notification.css",
			headcss = document.getElementsByTagName("head")[0],
			link = document.createElement("link");
			link.type = "text/css", link.rel = "stylesheet", link.href = cssUrl, headcss.appendChild(link);
	}

    function _pa_params() {

        var _pa_out = [], i;

        if (typeof _pa === 'undefined') {
            _pa = [];
        }

        var _length = _pa.length;

        if (_length > 0) {

            for (i=0 ; i<_length; ++i) {

             _pa_out.push(encodeURIComponent(_pa[i]));

            }

            return _pa_out;
        }
    }

	function check_browser_version() {

        var nAgt = navigator.userAgent;
        var verOffset, version, ix, nameOffset, majorVersion;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {

            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) != -1) {

            version = nAgt.substring(verOffset + 4);
        }
        // Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {

            version = nAgt.substring(verOffset + 5);
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {

            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {

            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {

            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {

            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {

            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {

            version = nAgt.substring(verOffset + 1);
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);

        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        return majorVersion;	//browser version
    }

    function check_browser() {

        var nAgt = navigator.userAgent;
        var verOffset, nameOffset, browser;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
            browser = 'Opera';
        }
        // Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
            browser = 'Edge';
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Explorer';
        }
        // Samsung
        else if (nAgt.match(/(SamsungBrowser)\/?\s*/i)) {
            browser = 'Samsung';
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Internet Explorer 11';
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);

            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }

        return browser;
    }

    function browser_compatible() {

        if ("Chrome" === check_browser() || "Samsung" === check_browser()) {

            return "Notification" in window && "serviceWorker" in navigator && "showNotification" in ServiceWorkerRegistration.prototype && "PushManager" in window && check_browser_version() >= 42 ? !0 : !1;

        } else if ("Opera" === check_browser()) {

            return "Notification" in window && "serviceWorker" in navigator && "showNotification" in ServiceWorkerRegistration.prototype && "PushManager" in window && check_browser_version() >= 42 ? !0 : !1;

        } else if ("Firefox" === check_browser()) {

            return check_browser_version() > 43 ? !0 : !1;

        } else if ("Safari" === check_browser()) {

            return "safari" in window && "pushNotification" in window.safari ? !0 : !1;

        } else if ("Edge" === check_browser()) {

            return check_browser_version() > 13 ? !0 : !1;
        }
    }
    
    function setStorage(key, value) {
        localStorage.setItem(key, value);
    }

    function getStorage(key) {
        return localStorage.getItem(key);
    }    

	function setCookie(name, value, exdays) {
        var n = new Date;
        n.setTime(n.getTime() + (exdays*24*60*60*1000));
        var a = "; expires=" + n.toUTCString();
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + a + "; path=/"
	}

	function getCookie(name){
        for (var i = name + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
            for (var a = t[n];
                " " == a.charAt(0);) a = a.substring(1);
            if (0 == a.indexOf(i)) return a.substring(i.length, a.length)
        }
        return ""
	}

	function notificationPopup() {

		jQuery("body").append('<div class=\"pushassist_notification7 bottom_right\"> <div class=\"pushassist_notification7_inner_wraper\" id=\"pushassist_notification_inner_wraper\"> <div class=\"pushassist_notification7_head_wraper\"> <div class=\"pushassist_notification7_image_wraper\"> <div class=\"push_noti7_imginnerwrap\"> <img src=\"https://cdn.pushassist.com/account/uploads/pushassist_default.png\"> </div> </div> <div class=\"pushassist_notification7_title_wraper\"> <span class=\"pushassist_notification7_title\"> Esp32learning Would Like to Send You Push Notifications. </span> </div> </div> <div class=\"pushassist_notification7_text_wraper\"> <p class=\"pushassist_notification7_message\"> Notifications can be turned off anytime from browser settings. </p> </div> </div> <div class=\"pushassist7_button_wrapper\"> <button class=\"pushassist7_btn_close\" id=\"psa_close\">Don\'t Allow</button> <button class=\"pushassist7_btn_allow\" id=\"psa_allow\">Allow</button> </div> <div class=\"pushassist_notification7_footer_wraper\"> <a class=\"pushassist7_branding\" target=\"_blank\" href=\"http://pushassist.com\"> <img src=\"https://i.imgur.com/JB1FzMC.png\"> </a> <span><a class=\"pushassist7_powered_by\" target=\"_blank\" href=\"http://pushassist.com\">Powered by PushAssist</a></span> </div> </div>');

		document.getElementById("psa_close").addEventListener("click", function() {

			setCookie("pushassist_notification_status", "block", 2);

			var n = document.getElementById("pushassist_notification_inner_wraper");
			n.parentNode.remove(n);
		});

		document.getElementById("psa_allow").addEventListener("click", function() {

			var n = document.getElementById("pushassist_notification_inner_wraper");
			n.parentNode.remove(n);

			var ScreenLeft = void 0 !== window.screenLeft ? window.screenLeft : screen.left,
				ScreenTop = void 0 !== window.screenTop ? window.screenTop : screen.top,
				thisWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
				thisHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
				W = 550,
				H = 450,
				l = thisWidth / 2 - W / 2 + ScreenLeft,
				t = thisHeight / 2 - H / 2 + ScreenTop,
				subWindow;

				if(undefined === _pa_params()) {

					subWindow = window.open(subdomainUrl, "_blank", "scrollbars=yes, width=" + W + ", height=" + H + ", top=" + t + ", left=" + l);
				} else {

					subWindow = window.open(subdomainUrl + '?segment=' + _pa_params(), "_blank", "scrollbars=yes, width=" + W + ", height=" + H + ", top=" + t + ", left=" + l);
				}

				return subWindow ? (subWindow.focus(), subWindow.height <= 0 ? !1 : !0) : void 0
		});
	}
	
	function unsubscribeWidget(){
        jQuery("body").append('<div class=\"pushassist_notification18 top_left\" id=\"pushassist_widget\"><span class=\"pushassist_unsub_widget\" id=\"pushassist_unsub_widget\">Opt out from Notification</span>');
        
        /*  Template Start */
	
        jQuery(document).on('click', '.pushassist_unsub_widget', function () {
            jQuery(this).remove();
            jQuery('#pushassist_widget').append('<div id="pushassist_confirm_widget"><span class="pushassist_confirm_widget">'+ _pushassist.confirmationWidget +'</span> <div class="pushassist_action_yes" id="pushassist_action_yes">' + _pushassist.confirmationWidgetButtonYes + '</div> <div class="pushassist_action_no" id="pushassist_action_no">'+ _pushassist.confirmationWidgetButtonNo +'</div></div>');
        });
        
        jQuery(document).on('click', '.pushassist_action_yes', function () {
            jQuery('#pushassist_confirm_widget').remove();
            
            if((getCookie('psa_unsubscribed') === '' && getCookie('psa_subscribe') === '') ||  getCookie('psa_unsubscribed') === ''){            
                setCookie('psa_unsubscribed', 1, 100);
                setCookie('psa_subscribe', '', 100);            
                jQuery('#pushassist_widget').append('<div class="pushassist_thank_you_widget">' + _pushassist.unsubscriberSuccessMessage + '</div>');
                _pa_subscribeUnsubscribed();                
            } else {
                setCookie('psa_subscribe', 0, 100);
                setCookie('psa_unsubscribed', '', 100);
                jQuery('#pushassist_widget').append('<div class="pushassist_thank_you_widget">' + _pushassist.subscriberSuccessMessage + '</div>');
                _pa_subscribeUnsubscribed();
            }
        });
        
        jQuery(document).on('click', '.pushassist_action_no', function () {
            jQuery('#pushassist_confirm_widget').remove();            
            if((getCookie('psa_unsubscribed') === '' && getCookie('psa_subscribe') === '') ||  getCookie('psa_unsubscribed') === ''){                
                jQuery('#pushassist_widget').append('<span class="pushassist_unsub_widget">' + _pushassist.unsubscribeMessage + '</span>');                
            } else {
                jQuery('#pushassist_widget').append('<span class="pushassist_unsub_widget">' + _pushassist.subscribeMessage + '</span>');
            }
        });	
            
        jQuery(document).on('click', '.pushassist_open_popup', function () {
            jQuery('#pushassist_bell_dailog_body').toggle();
            
            jQuery('#pushassist_bell_hover_message_box').hide();
            jQuery('#pushassist_bell_thank_you_message_box').hide();
        });
			
        jQuery(document).on('click', '.pushassist_personal_info_btn', function () {
			
            if(jQuery('#pushassist_personal_info_btn').text() === _pushassist.unsubscrubeButtonMessage){
                setCookie('psa_personal_info', 1, 100);
                jQuery('#pushassist_personal_info_btn').text(_pushassist.subscrubeButtonMessage);
                _pa_subscribeInfo();
            } else {				
                setCookie('psa_personal_info', 0, 100);
                jQuery('#pushassist_personal_info_btn').text(_pushassist.unsubscrubeButtonMessage);
                _pa_subscribeInfo();
            }
            
            jQuery('#pushassist_bell_dailog_body').hide();
            jQuery('#pushassist_bell_thank_you_message_text').text(_pushassist.thankYouWidget);
            jQuery('#pushassist_bell_thank_you_message_box').show();
        });
			
        jQuery(document).on('click', '.pushassist_unsub_btn', function () {
                    
            jQuery('#pushassist_bell_dailog_body').hide();
            
            if(jQuery('#pushassist_unsub_btn').text() === _pushassist.unsubscriberClick){
                setCookie('psa_unsubscribed', 1, 100);
                setCookie('psa_subscribe', '', 100);
                jQuery('#pushassist_bell_thank_you_message_text').text(_pushassist.unsubscriberSuccessMessage);
                jQuery('#pushassist_unsub_btn').text(_pushassist.subscriberClick);
                jQuery('#pushassist_bell_thank_you_message_box').show();
                _pa_subscribeUnsubscribed();   
            } else {
                setCookie('psa_subscribe', 0, 100);
                setCookie('psa_unsubscribed', '', 100);
                jQuery('#pushassist_bell_thank_you_message_text').text(_pushassist.subscriberSuccessMessage);
                jQuery('#pushassist_unsub_btn').text(_pushassist.unsubscriberClick);
                jQuery('#pushassist_bell_thank_you_message_box').show();
                _pa_subscribeUnsubscribed();
            }				
        });
			
        jQuery(document).on('hover', '.pushassist_notification19', function () {
								
            if(getCookie('psa_unsubscribed') === '1'){                
                jQuery('#pushassist_bell_hover_message_text').text(_pushassist.subscribeMessage);
            }
            
            if(getCookie('psa_subscribe') === '0'){
                jQuery('#pushassist_bell_hover_message_text').text(_pushassist.unsubscribeMessage);
            }				
            
            if(getCookie('psa_unsubscribed') === '' && getCookie('psa_subscribe') === ''){
                jQuery('#pushassist_bell_hover_message_text').text(_pushassist.unsubscribeMessage);
            }				
        });
        
        /*  Template End */
    }  
        
    function widget_preload() {
        
        if(_pushassist.widgetType === 0){
            
            if(getCookie('psa_unsubscribed') === '1'){            
                jQuery('#pushassist_unsub_widget').text(_pushassist.subscribeMessage);            
            } 
            
            if(getCookie('psa_subscribe') === '0'){
                jQuery('#pushassist_unsub_widget').text(_pushassist.unsubscribeMessage);
            } 
            
            if(getCookie('psa_unsubscribed') === '' && getCookie('psa_subscribe') === ''){
                jQuery('#pushassist_unsub_widget').text(_pushassist.unsubscribeMessage);
            }
            
        } else {       
        
            if(getCookie('psa_unsubscribed') === '1'){
                jQuery('#pushassist_bell_hover_message_text').text(_pushassist.subscribeMessage);
                
                jQuery('#pushassist_unsub_btn').text(_pushassist.subscriberClick);
                jQuery('#pushassist_bell_resubscribe_message_box').hide();
                jQuery('#pushassist_bell_thank_you_message_box').show();            
            }
            
            if(getCookie('psa_subscribe') === '0'){
                jQuery('#pushassist_bell_hover_message_text').text(_pushassist.unsubscribeMessage);
                
                jQuery('#pushassist_unsub_btn').text(_pushassist.unsubscriberClick);
                jQuery('#pushassist_bell_resubscribe_message_box').show();
                jQuery('#pushassist_bell_thank_you_message_box').hide();				
            }
            
            if(getCookie('psa_personal_info') === '1'){
                jQuery('#pushassist_personal_info_btn').text(_pushassist.subscrubeButtonMessage);
            } else {
                jQuery('#pushassist_personal_info_btn').text(_pushassist.unsubscrubeButtonMessage);
            }
        }		
    }
            
    function _pa_subscribeUnsubscribed() {
    
        var registration_id = getCookie("pushassist_key");
        
        if(registration_id !== '') {
    
            var json = {
                json: JSON.stringify({
                    subscriber_token: registration_id,
                    sub_domain: _pushassist.subdomain
                })
            };
    
            var clickDeliveryURL = _pushassist.serverUrl + "/receiver/subscribe-unsubscribe/";
    
            // send update to server
            return fetch(clickDeliveryURL, {
                method: 'post',
                body: json.json
            }).then(function (response) {
    
                // Examine the text in the response
                return response.json().then(function (data) {
    
                    if (data.status === "Success") {
                        //console.log(data.message);
                    }
                });
            });
        }
    }
    
    function _pa_subscribeInfo() {
    
        var registration_id = getCookie("pushassist_key");
        var ipAddress = getCookie("ip_address");
    
        if(registration_id !== '') {
    
            var json = {
                json: JSON.stringify({
                    subscriber_token: registration_id,
                    sub_domain: _pushassist.subdomain,
                    ip_address: ipAddress
                })
            };
    
            var clickDeliveryURL = _pushassist.serverUrl + "/receiver/auto-personal-info/";
    
            // send update to server
            return fetch(clickDeliveryURL, {
                method: 'post',
                body: json.json
            }).then(function (response) {
    
                // Examine the text in the response
                return response.json().then(function (data) {
    
                    if (data.status === "Success") {
                        //console.log(data.message);
                        
                        if(data.ip_address !== ''){
                            setCookie("ip_address", data.ip_address, 100);
                        }
                    }
                });
            });
        }
    }
	
	function openFBpopup(url, elm) {
        var new_fbwindow = window.open(url, "", "width=800,height=600");
        new_fbwindow.onbeforeunload = function () {
            setCookie("psa_fb_status", "1", 14);
            jQuery(elm).hide();
        }
    } 
        
    window.onload = function() {
        var is_cookie_set = getCookie("psa_fb_status");
        if(is_cookie_set !== ''){
            jQuery('.psa_fb_login').hide();
        }
    }

	function show_notification_child_window() {

        var ScreenLeft = void 0 !== window.screenLeft ? window.screenLeft : screen.left,
            ScreenTop = void 0 !== window.screenTop ? window.screenTop : screen.top,
            thisWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
            thisHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
            W = 550,
            H = 450,
            l = thisWidth / 2 - W / 2 + ScreenLeft,
            t = thisHeight / 2 - H / 2 + ScreenTop,
            subWindow;

            if(undefined === _pa_params()) {

                subWindow = window.open(subdomainUrl, "_blank", "scrollbars=yes, width=" + W + ", height=" + H + ", top=" + t + ", left=" + l);
            } else {

                subWindow = window.open(subdomainUrl + '?segment=' + _pa_params(), "_blank", "scrollbars=yes, width=" + W + ", height=" + H + ", top=" + t + ", left=" + l);
            }

            return subWindow ? (subWindow.focus(), subWindow.height <= 0 ? !1 : !0) : void 0
	}

	/* getting data from child window */

	function getChildWindowMessage(storeData) {

		jQuery.each(storeData, function(key, value) {
			"new_user" !== key && setCookie(key, value, 730);
			setCookie(key, value, 730);
		});
	}

	function getOrigin(data) {
		var a = document.createElement("a");
		return a.href = data, a.hostname;
	}

	window.addEventListener("message", function(e) {

		return getOrigin(e.origin) !== getOrigin(subdomainUrl) ? !1 : void("block" === e.data ? (setCookie("pushassist_notification_status", "block", 2), setCookie("pushassist_key", "", -1)) : getChildWindowMessage(e.data));
	});

	/* end */
	
	/* JS API Start */

   function _pa_subscriberID() {

       var registration_id = decodeURIComponent(getCookie("pushassist_key"));
       var browser = check_browser();
       var json = JSON.stringify({
           subscriber_id: '',
           browser: browser
       });

       if(registration_id !== '') {

           registration_id = registration_id.replace('%3A', ':');

           json = JSON.stringify({
               subscriber_id: registration_id,
               browser: browser
           });
       }

       return json;
   }

   function _pa_isSubscribed() {

       var registration_id = getCookie("pushassist_key");

       var result = JSON.stringify({
           subscribed: false
       });

       if(registration_id !== '') {

           var json = {
               json: JSON.stringify({
                   subscriber_key: registration_id,
                   sub_domain: _pushassist.subdomain
               })
           };

           var clickDeliveryURL = _pushassist.serverUrl + "/js-api/is-subscriber";

           // send update to server
           return fetch(clickDeliveryURL, {
               method: 'post',
               body: json.json
           }).then(function (response) {

               // Examine the text in the response
               return response.json().then(function (data) {

                   if (data.status === "Success") {

                       result = JSON.stringify({
                           subscribed: true
                       });
                   }
                   return result;
               });
           });
       }
       return result;
   }

   function _pa_addToSegment(segment) {

       var registration_id = getCookie("pushassist_key");

       var result = false;

       if(registration_id !== '') {

           var json = {
               json: JSON.stringify({
                   subscriber_key: registration_id,
                   sub_domain: _pushassist.subdomain,
                   segment: segment
               })
           };

           var clickDeliveryURL = _pushassist.serverUrl + "/js-api/add-subscriber-segment";

           // send update to server
           return fetch(clickDeliveryURL, {
               method: 'post',
               body: json.json
           }).then(function (response) {

               // Examine the text in the response
               return response.json().then(function (data) {

                   if (data.status === "Success") {
                       result = true;
                   }
                   return result;
               });
           });
       }

       return result;
   }

   function _pa_removeSubscriberFromSegment() {

       var registration_id = getCookie("pushassist_key");

       var result = false;

       if(registration_id !== '') {

           var json = {
               json: JSON.stringify({
                   subscriber_key: registration_id,
                   sub_domain: _pushassist.subdomain,
                   segment: segment
               })
           };

           var clickDeliveryURL = _pushassist.serverUrl + "/js-api/remove-segment-subscriber";

           // send update to server
           return fetch(clickDeliveryURL, {
               method: 'post',
               body: json.json
           }).then(function (response) {

               // Examine the text in the response
               return response.json().then(function (data) {

                   if (data.status === "Success") {
                       result = true;
                   }

                   return result;
               });
           });
       }

       return result;
   }

   function _pa_changeSegment(current_segment, change_segment, yes_no) {

       var registration_id = getCookie("pushassist_key");

       var result = false;

       if(registration_id !== '') {

           var json = {
               json: JSON.stringify({
                   subscriber_key: registration_id,
                   old_segment: current_segment,
                   new_segment: change_segment,
                   remove_from_existing: yes_no
               })
           };

           var clickDeliveryURL = _pushassist.serverUrl + "/js-api/change-segment";

           // send update to server
           return fetch(clickDeliveryURL, {
               method: 'post',
               body: json.json
           }).then(function (response) {

               // Examine the text in the response
               return response.json().then(function (data) {

                   if (data.status === "Success") {
                       result = true;
                   }

                   return result;
               });
           });
       }

       return result;
   }

   function _pa_subscriberSegments() {

       var registration_id = getCookie("pushassist_key");

       var result = JSON.stringify({
           segments: null
       });

       if(registration_id !== '') {

           var json = {
               json: JSON.stringify({
                   subscriber_key: registration_id,
                   sub_domain: _pushassist.subdomain
               })
           };

           var clickDeliveryURL = _pushassist.serverUrl + "/js-api/subscriber-segment";

           // send update to server
           return fetch(clickDeliveryURL, {
               method: 'post',
               body: json.json
           }).then(function (response) {

               // Examine the text in the response
               return response.json().then(function (data) {
                   if (data.status === "Success") {
                       result = JSON.stringify({
                           segments: data.segments
                       });
                   }
                   return result;
               });
           });
       }
       return result;
   }

   /* JS API End */

	self.addEventListener("load", function() {

        if(_pushassist.isEnabledUnsubscribedWidget === 1){
        
            if("subscribe" === getCookie("pushassist_notification_status") && "" !== getCookie("pushassist_key")){ unsubscribeWidget(); widget_preload(); }
        }

		get_values(); // include manifest.json on page load

		var pushassist_prompt = document.getElementsByClassName('psa_show_notification_opt_in');

		if (pushassist_prompt.length === 0) {

            if(!0 === browser_compatible()){

               "subscribe" === getCookie("pushassist_notification_status") || "block" === getCookie("pushassist_notification_status") ? void 0 : setTimeout( function() { notificationPopup() }, _pushassist.intervalTime * 1000);
            }

        } else {

			 for (var i = 0; i < pushassist_prompt.length; i++) {

				 pushassist_prompt[i].addEventListener('click', function () {

                     if(!0 === browser_compatible()){

                         "subscribe" === getCookie("pushassist_notification_status") || "block" === getCookie("pushassist_notification_status") ? void 0 : show_notification_child_window();
                     }

				 });
			 }
		}

	});