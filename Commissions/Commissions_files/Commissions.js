// Created by iWeb 3.0.4 local-build-20130523

function createMediaStream_id2()
{return IWCreateMediaCollection("http%3Awww.suewallis.co.uk/suewallis.co.uk/Commissions/Commissions_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http%3Awww.suewallis.co.uk/suewallis.co.uk/Commissions',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget13'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http%3Awww.suewallis.co.uk/suewallis.co.uk/Commissions',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(171,128),new IWSize(171,34),new IWSize(204,177),27,27,0,new IWSize(16,16)),new IWPhotoFrame([IWCreateImage('Commissions_files/Formal_inset_01.png'),IWCreateImage('Commissions_files/Formal_inset_02.png'),IWCreateImage('Commissions_files/Formal_inset_03.png'),IWCreateImage('Commissions_files/Formal_inset_06.png'),IWCreateImage('Commissions_files/Formal_inset_09.png'),IWCreateImage('Commissions_files/Formal_inset_08.png'),IWCreateImage('Commissions_files/Formal_inset_07.png'),IWCreateImage('Commissions_files/Formal_inset_04.png')],null,0,0.600000,1.000000,1.000000,1.000000,1.000000,14.000000,14.000000,14.000000,14.000000,191.000000,262.000000,191.000000,262.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget13',null,'widget14',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Commissions_files/CommissionsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();fixupIECSS3Opacity('id4');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
