/**
 * Proxy pour supprimer les pub
 * @source : wl.is/T9xWld.js
 */
var PROXY_DIRECT = "DIRECT";
var DIRECT = "DIRECT";
//var BLACK = "PROXY 8.8.8.8:53";
var BLACK = "PROXY 0.0.0.0:3421";
var WHITE = PROXY_DIRECT;

/**
* function shExpMatch
*/
function s(u, r) {
	return shExpMatch(u, r);
} 

/**
* function dnsDomainIs
*/
function d(h, r) {
	return dnsDomainIs(h, r);
}

/**
* function isInNet
*/
function n(h, r, m) {
	return isInNet(h, r, m);
}

/**
* Point d'entré
*/
function FindProxyForURL(url, host) {
	var u = url.toLowerCase();
	var h = host.toLowerCase();
	
	//Ip ou Url autorisées, liste Blanche
	if (d(h, "tomsjac.info")) {
		return WHITE;
	}

	//Ip ou Url à bannir (Ads)
	if ((((d(h, "a8.net")) || (d(h, "accesstrade.net")) || (d(h, "ad4game.com")) || (d(h, "adap.tv")) || (d(h, "adblade.com")) || (d(h, "adbn.ru")) || (d(h, "adbomb.ru")) || (d(h, "adbooth.net")) || (d(h, "adbuddiz.com")) || (d(h, "adcash.com")) || (d(h, "adcast.ru")) || (d(h, "webtracker.jp") || d(h, "ad\u002Dcloud.jp")) || (!s(u, "*configure*") && d(h, "adcolony.com")) || (d(h, "adcomplete.ru")) || (d(h, "adcv.jp")) || (d(h, "addthis.com")) || (d(h, "adexprt.com")) || (d(h, "adfalcon.com")) || (d(h, "adflow.ru")) || (d(h, "adfog.ru")) || (d(h, "adfonic.net")) || (d(h, "adform.com") || d(h, "adform.net")) || (d(h, "adfox.ru")) || (d(h, "adhands.ru")) || (d(h, "adhese.com")) || (d(h, "adhub.ru")) || (d(h, "adinch.com")) || (d(h, "adinfuse.com")) || (d(h, "adition.com")) || (d(h, "adjuggler.net")) || (d(h, "akncdn.com") || d(h, "adkeeper.com") || d(h, "ackak.com")) || (d(h, "luxup.ru")) || (d(h, "admarvel.com") || s(u, "*admarvel*.amazonaws.com*")) || (d(h, "admaster.com.cn") || d(h, "admaster.net")) || (d(h, "atemda.com") || d(h, "admeta.com")) || (d(h, "admob.com")) || (d(h, "adver.mobi") || d(h, "admobi.ru")) || (d(h, "admulti.ru")) || (d(h, "adnotch.com")) || (d(h, "adocean.pl")) || (d(h, "adorika.net")) || (d(h, "adotube.com")) || (d(h, "interseek.si")) || (d(h, "adpro.com.ua")) || (d(h, "madsone.com")) || (d(h, "adriver.ru")) || (d(h, "adrock.ru") || d(h, "adrock.ua") || d(h, "adrock.com.ua")) || (d(h, "adroll.com")) || (d(h, "adrotator.se")) || (d(h, "adshost2.com")) || (d(h, "adsmogo.net") || d(h, "adsmogo.mobi")) || (d(h, "adsniper.ru")) || (d(h, "adspeed.com")) || (d(h, "adspirit.de")) || (d(h, "adstark.ru")) || (d(h, "ad\u002Dstir.com")) || (d(h, "4dsply.com")) || (d(h, "ad\u002Dsys.com")) || (d(h, "adtaily.pl") || d(h, "adtaily.com")) || (d(h, "adtech.de")) || (d(h, "adtechus.com")) || (d(h, "adtilt.com") && !s(u, "*configure*")) || (d(h, "adtoma.com")) || (d(h, "adtotal.pl")) || (d(h, "adtrace.org")) || (d(h, "adnxs.com") || d(h, "adversal.com")) || (d(h, "adverserve.net")) || (d(h, "advertserve.com")) || (d(h, "adview.pl")) || (d(h, "am15.net")) || (d(h, "advolution.de")) || (d(h, "adwhirl.com")) || (d(h, "ad.adworx.at")) || (d(h, "adzerk.net")) || (d(h, "adztec.com")) || (d(h, "altrooz.com")) || (d(h, "amazon\u002Dadsystem.com")) || (s(u, "*.amazonaws.com/adversion*")) || (d(h, "spstaticimg.ameba.jp")) || (d(h, "amobee.com")) || (d(h, "advertising.com") || d(h, "atwola.com")) || (d(h, "appflood.com")) || (d(h, "applifier.com")) || (d(h, "cdn.applift.com")) || (d(h, "applovin.com")) || (d(h, "apprupt.com")) || (d(h, "consearch.jp")) || (d(h, "atech.ne.jp")) || (d(h, "atlassbx.com") || d(h, "atdmt.com")) || (d(h, "avocarrot.com")) || (d(h, "bannerflow.com")) || (d(h, "bcfads.com")) || (d(h, "bead\u002Dad.com")) || (d(h, "bnmla.com")) || (d(h, "brightroll.com") || d(h, "brightroll.de") || d(h, "btrll.com")) || (d(h, "bubblesmedia.ru")) || (d(h, "appads.com")) || (d(h, "buysellads.com")) || (d(h, "bypass.jp")) || (d(h, "carbonads.com") || d(h, "carbonads.net")) || (d(h, "altnet.jp")) || (d(h, "cb\u002Dcdn.com") || d(h, "chartboost.com")) || (s(u, "*cubecdn.net/js/loader_*")) || (n(h, "89.207.18.1", "255.255.255.0")) || (d(h, "content.ad")) || (d(h, "cpmstar.com")) || (d(h, "criteo.com")) || (d(h, "2o7.net")) || (d(h, "ad.mist.jp")) || (d(h, "ad\u002Dv.jp") || d(h, "adjust\u002Dnet.jp") || d(h, "adjust\u002Dsp.jp")) || (d(h, "d2c.ne.jp")) || (d(h, "impact\u002Dad.jp")) || (d(h, "directrev.com")) || (d(h, "doubleclick.net") && !s(u, "*ythome*")) || (d(h, "doubleclick.ne.jp")) || (d(h, "doubleverify.com")) || (s(u, "*.emediate.*/*") || s(u, "*/eas?c*")) || (d(h, "epom.com")) || (d(h, "europacash.com")) || (d(h, "exoclick.com")) || (d(h, "exponential.com")) || (s(u, "*graph.facebook.com/*advertise*") || s(u, "*graph.facebook.com/network_ads")) || (d(h, "fancrew.jp")) || (d(h, "affiliate.fc2.com") || d(h, "aimg.fc2.com")) || (s(u, "*.flipboard.com/flipmag/adManager.js") || s(u, "*.flipboard.com/*/adcreative/*") || s(u, "*.flipboard.com/*adname*") || s(u, "*.flipboard.com/flare/*")) || (d(h, "ads.flurry.com")) || (d(h, "mobytrks.com")) || (d(h, "fm\u002Dp.jp")) || (d(h, "fout.jp")) || (d(h, "fwmrm.net")) || (d(h, "bnr.rssad.jp")) || (d(h, "sponsorpay.com") || d(h, "fyber.com")) || (d(h, "gigazine.asia")) || (d(h, "adresult\u002Dsp.jp") || d(h, "mb\u002Dclick.jp") || d(h, "san\u002Dni\u002Dichi.com") || d(h, "socdm.com")) || (d(h, "adcdn.goo.ne.jp") || d(h, "ad.goo.ne.jp") || d(h, "owb101.goo.ne.jp")) || (s(u, "*/pagead*.googlesyndication.com/*") || d(h, "googletagservices.com") || d(h, "googleadservices.com") || s(u, "*.google.*/*ads.js*") || s(u, "*googlesyndication.com/pagead/*")) || (d(h, "googleadservices.com") && !s(u, "*/aclk?*")) || (d(h, "greystripe.com")) || (d(h, "heyzap.com")) || (d(h, "hot\u002Dmob.com")) || (d(h, "hotwords.com")) || (d(h, "ad\u002Dmove.jp")) || (d(h, "iconpeak.com")) || (d(h, "i\u002Dmobile.co.jp")) || (d(h, "360yield.com")) || (d(h, "infolinks.com")) || (d(h, "inmobi.com") || d(h, "inmobicdn.net") || s(h, "inmobisdk*.akamaihd.net") || d(h, "appsdt.com") || d(h, "inmobicdn.com")) || (d(h, "inner\u002Dactive.mobi")) || (d(h, "innovid.com")) || (d(h, "integral\u002Dmarketing.com")) || (d(h, "dlv.itmedia.co.jp") || d(h, "fc.itmedia.co.jp") || d(h, "tb.itmedia.co.jp")) || (d(h, "nend.net") || d(h, "adimg.net") || d(h, "adingo.jp") || d(h, "adlantis.jp") || d(h, "ad\u002Dv.jp") || d(h, "ad\u002Dstir.com") || d(h, "amoad.com") || d(h, "app\u002Dc.net") || d(h, "behaviad.net") || d(h, "i2i.jp") || d(h, "i\u002Dmobile.co.jp") || d(h, "ad.maist.jp") || d(h, "microad.jp") || d(h, "medibaad.com") || d(h, "unthem.com") || d(h, "tracx\u002Dad.jp") || d(h, "reporo.net") || d(h, "questionmarket.com")) || (d(h, "a.jumptap.com")) || (d(h, "kau.li")) || (s(u, "*presselite.com/iphone/pushnotification/interstitiel/interstitiel.*")) || (d(h, "kiip.me")) || (d(h, "kixer.com")) || (d(h, "kochava.com")) || (d(h, "leadbolt.com") || d(h, "leadbolt.net")) || (d(h, "lfstmedia.com")) || (d(h, "ligatus.com")) || (d(h, "lijit.com")) || (d(h, "jlisting.jp")) || (d(h, "livead.jp")) || (d(h, "aid\u002Dad.jp")) || (d(h, "image.click.livedoor.com")) || (d(h, "liverail.com")) || (d(h, "newzia.jp") || d(h, "logly.co.jp")) || (d(h, "madsone.com") || d(h, "mads.com")) || (d(h, "madvertise.de") || d(h, "uimserv.net")) || (d(h, "marketgid.com")) || (d(h, "ads1.msads.net") || d(h, "s1.2mdn.net") || s(u, "m*.2mdn.net*")) || (d(h, "marsads.com")) || (d(h, "m2pub.com") || d(h, "ad127m.com") || d(h, "xtendmedia.com") || d(h, "ad132m.com") || d(h, "ad131m.com") || d(h, "ad120m.com") || d(h, "adsmarket.com")) || (d(h, "mdotm.com")) || (d(h, "media\u002Db.jp")) || (d(h, "adland.ru")) || (d(h, "medialytics.com") || d(h, "medialets.com")) || (d(h, "serving\u002Dsys.com") || d(h, "smartclip.net") || d(h, "eyewonder.com")) || (d(h, ".media.net")) || (d(h, "mgid.com")) || (d(h, "cdn.millennialmedia.com") || d(h, "mydas.mobi")) || (d(h, "mreco0.jp")) || (d(h, "mobclix.com")) || (d(h, "mobfox.com")) || (d(h, "mobilefuse.net") || d(h, "mobilefuse.com")) || (d(h, "mobiletheory.com")) || (d(h, "mobiright.com")) || (d(h, "mocean.mobi")) || (s(u, "*ads*.mojiva.com*")) || (d(h, "mopub.com") && !s(u, "*filmon*")) || (d(h, "movad.de")) || (d(h, "mpnrs.com")) || (s(u, "*msn.com/adsadclient*") || d(h, "h2.msn.com") || d(h, "ads1.jp.msn.com") || d(h, "advertising.jp.msn.com") || d(h, "c.jp.msn.com") || d(h, "utm.sankei.jp.msn.com") || d(h, "rad.msn.com") || d(h, "stjjp.msn.com") || d(h, "udc.msn.com")) || (d(h, "mucu.jp")) || (s(u, "*admax.nexage.com/*")) || (d(h, "ads.nicovideo.jp")) || (d(h, "nuggad.net")) || (d(h, "exit\u002Dad.com") || d(h, "ichi\u002Dni\u002Dsan.net") || d(h, "inmobi\u002Djp.com")) || (s(u, "*csr.onet.pl/*onetShowAsynchAd*")) || (d(h, "openx.org") || d(h, "openxenterprise.com") || s(u, "*/openx/www/delivery/*.php*") || s(u, "*/openx/www/api/v*/*.php*") || d(h, "openx.com") || d(h, "openx.net") || d(h, "uauniverse.com")) || (d(h, "advg.jp")) || (d(h, "otherlevels.com")) || (d(h, "openvideoads.org")) || (d(h, "performancehorizon.com")) || (d(h, "playhaven.com")) || (d(h, "playnomics.net")) || (d(h, "adk2.co") || d(h, "adpdx.com") || d(h, "adk2x.com")) || (d(h, "pflexads.com")) || (d(h, "popads.net") || d(h, "popadscdn.net")) || (d(h, "propellerads.com") || d(h, "propellerpops.com") || d(h, "onclickads.net")) || (d(h, "pubmatic.com")) || (d(h, "api.pubnative.net")) || (d(h, "quantcount.com")) || (d(h, "recreativ.ru")) || (d(h, "revcontent.com")) || (d(h, "clkmon.com") || d(h, "clkrev.com") || d(h, "clkdeals.com")) || (d(h, "revmob.com")) || (d(h, "yieldmanager.com")) || (d(h, "rubiconproject.com")) || (d(h, "an.yandex.ru") || d(h, "lcads.ru") || d(h, "marketgid.com") || d(h, "livesmi.com") || d(h, "recreativ.ru") || d(h, "adtraff.ru") || d(h, "profitwizard.ru") || d(h, "bannerbank.ru") || d(h, "24s.ru") || d(h, "addisp.com") || d(h, "addnow.ru") || d(h, "adizer.ru") || d(h, "adpix.ru") || d(h, "adpro.com.ua") || d(h, "adru.net") || d(h, "adsclick.ru") || d(h, "adsellers.net") || d(h, "advertpay.ru") || d(h, "bannerbank.ru") || d(h, "begun.ru") || d(h, "goodadvert.com.ua") || d(h, "mg.dt00.net") || d(h, "neoban.su") || d(h, "rs.mail.ru") || d(h, "seopult.ru") || d(h, "wmip.ru")) || (d(h, "rnmd.net") && s(u, "*m3u*")) || (d(h, "aimatch.com")) || (d(h, "sbs\u002Dad.com")) || (d(h, "eacdn.com")) || (d(h, "smaato.com") || d(h, "smaato.net")) || (d(h, "smartadserver.com")) || (d(h, "smart\u002Dc.jp")) || (d(h, "snapmobile.asia")) || (s(u, "*speednetwor*.com*smart.js") || s(u, "*speednetwor*.com*adclickurl*")) || (d(h, "startapp.com") || d(h, "startappexchange.com") || d(h, "startappservice.com")) || (s(u, "*supersonicads.com/delivery/*") || s(u, "*ultraadserver.com/api*")) || (d(h, "taboolasyndication.com") || d(h, "taboola.com")) || (d(h, "appshelf.ttpsdk.info") || d(h, "houseads.ttpsdk.info")) || (s(u, "*.tapatalk.com/*get_ad.php*")) || (d(h, "tapjoyads.com") || d(h, "tapjoy.com")) || (d(h, "api.unthem.com") || d(h, "trafficgate.net")) || (d(h, "connect.decknetwork.net")) || (d(h, "tradedoubler.com") && !s(u, "*tradedoubler.com/click*") && !s(u, "*itunesredir*")) || (d(h, "trafficfactory.biz")) || (d(h, "globaltraffico.com") || d(h, "traffichaus.com")) || (d(h, "trafficjunky.com") || d(h, "trafficjunky.net")) || (d(h, "trafficposse.com")) || (d(h, "trafmag.com")) || (d(h, "rarenok.biz")) || (d(h, "transpera.com")) || (d(h, "tremorhub.com")) || (d(h, "tribalfusion.com")) || (d(h, "andomedia.com")) || (d(h, "readserver.net") || d(h, "rtbpop.com") || d(h, "1phads.com") || d(h, "admngronline.com") || d(h, "dotandad.com") || d(h, "everestads.net") || d(h, "wafmedia5.com") || d(h, "movi11.com")) || (d(h, "fastclick.net")) || (d(h, "valuecommerce.com")) || (d(h, "vdopia.com")) || (d(h, "adcel.vrvm.com")) || (d(h, "intellitxt.com")) || (d(h, "videoplaza.tv") || d(h, "videoplaza.com")) || (d(h, "vkmonster.com")) || (d(h, "buzzurl.jp")) || (d(h, "vserv.mobi")) || (d(h, "vungle.com")) || (d(h, "wigetmedia.com")) || (d(h, "wwwpromoter.com")) || (s(u, "*.ximad.com/ad3/*")) || (d(h, "ah.yimg.jp") || d(h, "listing.yahoo.co.jp") || d(h, "ov.yahoo.co.jp") || d(h, "bc.geocities.yahoo.co.jp") || d(h, "yeas.yahoo.co.jp") || d(h, "ads.yahoo.com") || s(u, "*mobile.yahoo.com/*/ads*")) || (d(h, "yicha.jp")) || (d(h, "yieldmo.com")) || (d(h, "yoc.mobi")) || (d(h, "yumenetworks.com")) || (d(h, "zedo.com")) || (d(h, "a.zestadz.com") || d(h, "assets.zestadz.com")) || (d(h, "zumobi.com")) || (d(h, "zwaar.org"))) || ((s(h, "ad.*") || s(h, "*.ad.*")) || (s(h, "*.adasset.*") || s(h, "adasset.*")) || (s(h, "adclick.*") || s(h, "*.adclick.*")) || (s(h, "*.adresult.*") || s(h, "adresult.*")) || ((s(h, "ads.*") && !d(h, "foxnews.com")) || s(h, "*.ads.*")) || (s(h, "adserv.*") || s(h, "*.adserv.*")) || (s(h, "*.adserve.*") || s(h, "adserve.*")) || (s(h, "adserver.*") || s(h, "*.adserver.*")) || (s(h, "ad\u002Dtraffic.*") || s(h, "*.ad\u002Dtraffic.*")) || (s(h, "*.adv.*") || s(h, "adv.*")) || (s(h, "advert.*") || s(h, "*.advert.*")) || (s(h, "*.advertorial.*") || s(h, "advertorial.*")) || (s(h, "*.adverts.*") || s(h, "adverts.*")) || (s(h, "adview.*") || s(h, "*.adview.*")) || (s(h, "*.adx.*") || s(h, "adx.*")) || (s(h, "*.adz.*") || s(h, "adz.*")) || (s(h, "banner.*") || s(h, "*.banner.*")) || (s(h, "banners.*") || s(h, "*.banners.*")) || (s(h, "*.viewad.*") || s(h, "viewad.*")) || (s(u, "*/ad/*") && !d(h, "mzstatic.com") && !d(h, "apple.com")) || (s(u, "*/adasset/*")) || (s(u, "*/adclick/*")) || (s(u, "*/adresult/*")) || (s(u, "*/ads/*") && !d(h, "mzstatic.com") && !d(h, "apple.com") && !d(h, "gumtree.com") && !d(h, "otomoto.pl") && !d(h, "watchdisneyxd.go.com") && !d(h, "fortune.com") && !s(h, "olx.*") && !s(h, "*.olx.*")) || (s(u, "*/adserv/*")) || (s(u, "*/adserve/*")) || (s(u, "*/adserver/*") && !d(h, "apple.com") && !d(h, "mzstatic.com")) || (s(u, "*/ad\u002Dtraffic/*")) || (s(u, "*/adv/*")) || (s(u, "*/advert/*")) || (s(u, "*/advertorial/*")) || (s(u, "*/adverts/*")) || (s(u, "*/adview/*")) || (s(u, "*/adx/*")) || (s(u, "*/adz/*")) || (s(u, "*/banner/*")) || (s(u, "*/banners/*")) || (s(u, "*/viewad/*"))) || ((d(h, "ad\u002Dx.co.uk")) || (d(h, "appsflyer.com")) || (d(h, "apsalar.com")) || (d(h, "crashlytics.com")) || (d(h, "crittercism.com")) || (d(h, "testflightapp.com")) || (d(h, "flurry.com")) || (d(h, "adidm.idmnet.pl") || d(h, "hit.gemius.pl")) || (d(h, "georiot.com")) || (d(h, "google\u002Danalytics.com")) || (d(h, "appsdt.com")) || (d(h, "kontagent.net")) || (d(h, "localytics.com")) || (d(h, "mathtag.com")) || (d(h, "mixpanel.com")) || (d(h, "mobileapptracking.com")) || (d(h, "quantserve.com")) || (d(h, "revsci.net")) || (d(h, "scorecardresearch.com")) || (d(h, "sessionm.com")) || (d(h, "statcounter.com")) || (d(h, "trackimpression.com")) || (d(h, "urbanairship.com"))) || ((d(h, "google\u002Danalytics.com")) || (d(h, "parsely.com")) || (d(h, "sitemeter.com")) || (d(h, "statcounter.com"))) || ((s(u, "*.pandora.com*/ads/*") || d(h, "stats.pandora.com") || s(u, "*.pandora.com*getlicensing*") || s(u, "*.p\u002Dcdn.com/*/ads/*") || s(u, "*.pandora.com*/devicead/*") || s(u, "*.pandora.com*file\u003Dads/*") || s(u, "*.p\u002Dcdn.com*/devicead/*") || s(u, "*.cloudfront.net/campaigns/*") || s(u, "*pandora.com*method\u003Dad*"))))) {
		return BLACK; 
	}
	
	/*
	if((!s(u, "*.flv") && !s(u, "*.mp4") && !s(u, "*.flv*") && !s(u, "*.mp4*") && s(u, "*hulu.com/published/*")) || s(u, "*ads\u002D*.hulu.com*") || s(u, "*hulu.com/beacon/*\u003Dadauditerror*") || s(u, "*hulu.com/v3/revenue/*") || s(u, "*ll.a.hulu.com*")) return "PROXY 46.28.247.84:80";
	*/
	
	return PROXY_DIRECT;
}
