let services = document.getElementById("services");
let logout_list = [
{ "id": "amazon",
"title": "Amazon", 
"method": "get", 
"url": "http://www.amazon.com/gp/flex/sign-out.html?action=sign-out"
},
{ "id": "blogger",
"title": "Blogger", 
"method":"get", 
"url": "http://www.blogger.com/logout.g"
},
{ "id": "delicious",
"title": "Delicious", 
"method":"get", 
"url": "http://www.delicious.com/logout"
},
{ "id": "dreamhost",
"title": "DreamHost", 
"method":"get", 
"url": "https://panel.dreamhost.com/index.cgi?Nscmd=Nlogout"
},
{ "id": "dropbox",
"title": "Dropbox", 
"method":"get", 
"url": "https://www.dropbox.com/logout"
},
{ "id": "ebay",
"title": "eBay", 
"method":"get", 
"url": "https://signin.ebay.com/ws/eBayISAPI.dll?SignIn"
},
{ "id": "gandi",
"title": "Gandi", 
"method":"get", 
"url": "https://www.gandi.net/login/out"
},
{ "id": "github",
"title": "GitHub", 
"method":"get", 
"url": "https://github.com/logout"
},
{ "id": "gmail",
"title": "GMail", 
"method":"get", 
"url": "http://mail.google.com/mail/?logout"
},
{ "id": "google",
"title": "Google", 
"method":"get", 
"url": "https://accounts.google.com/Logout"
},
{ "id": "hulu",
"title": "Hulu", 
"method":"get", 
"url": "https://secure.hulu.com/logout"
},
{ "id": "instapaper",
"title": "Instapaper", 
"method":"get", 
"url": "http://www.instapaper.com/user/logout"
},
{ "id": "linode",
"title": "Linode", 
"method":"get", 
"url": "https://manager.linode.com/session/logout"
},
{ "id": "myspace",
"title": "MySpace", 
"method":"get", 
"url": "http://www.myspace.com/index.cfm?fuseaction=signout"
},
{ "id": "netflix",
"title": "NetFlix", 
"method":"get", 
"url": "http://www.netflix.com/Logout"
},
{ "id": "newegg",
"title": "Newegg", 
"method":"get", 
"url": "https://secure.newegg.com/NewMyAccount/AccountLogout.aspx"
},
{ "id": "photobucket",
"title": "Photobucket", 
"method":"get", 
"url": "http://photobucket.com/logout"
},
{ "id": "skype",
"title": "Skype", 
"method":"get", 
"url": "https://secure.skype.com/account/logout"
},
{ "id": "slashdot",
"title": "Slashdot", 
"method":"get", 
"url": "http://slashdot.org/my/logout"
},
{ "id": "soundcloud",
"title": "SoundCloud", 
"method":"get", 
"url": "http://soundcloud.com/logout"
},
{ "id": "thinkgeek",
"title": "ThinkGeek", 
"method":"get", 
"url": "https://www.thinkgeek.com/brain/account/login.cgi?a=lo"
},
{ "id": "threadless",
"title": "Threadless", 
"method":"get", 
"url": "http://www.threadless.com/logout"
},
{ "id": "tumblr",
"title": "Tumblr", 
"method":"get", 
"url": "http://www.tumblr.com/logout"
},
{ "id": "vimeo",
"title": "Vimeo", 
"method":"get", 
"url": "http://vimeo.com/log_out"
},
{ "id": "wikipedia",
"title": "Wikipedia", 
"method":"get", 
"url": "http://en.wikipedia.org/w/index.php?title=Special:UserLogout"
},
{ "id": "woot",
"title": "Woot", 
"method":"get", 
"url": "https://account.woot.com/logout"
},
{ "id": "wordpress",
"title": "Wordpress", 
"method":"get", 
"url": "https://wordpress.com/wp-login.php?action=logout"
}
];

function logout_process(service_data){
    let card = `
    <div class="slideInUp animated card" id="service-${service_data.id}">
    <div class="image" style="padding: 20px;">
    <img src="img/logos/${service_data.thumbnail || "clean-logo.png" }">
    </div>
    <div class="content">
    <img src="${service_data.url}" alt="" class="hidden" />
    ${service_data.title}
    </div>
    </div>
    `;
    services.insertAdjacentHTML('beforeend', card);
}

window.onload = function(){
  logout_list.forEach(function(service) {
   logout_process(service)
 });
}