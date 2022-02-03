// Created by iWeb 3.0.4 local-build-20150310

function createMediaStream_id2()
{return IWCreatePhotocast("http%3Awww.suewallis.co.uk/suewallis.co.uk/Happy_Days_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http%3Awww.suewallis.co.uk/suewallis.co.uk',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http%3Awww.suewallis.co.uk/suewallis.co.uk',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(6,new IWSize(94,94),new IWSize(94,32),new IWSize(115,141),27,27,0,new IWSize(11,12)),new IWPhotoFrame([IWCreateImage('Happy_Days_files/WhiteCorners_01.png'),IWCreateImage('Happy_Days_files/WhiteCorners_02.png'),IWCreateImage('Happy_Days_files/WhiteCorners_03.png'),IWCreateImage('Happy_Days_files/WhiteCorners_06.png'),IWCreateImage('Happy_Days_files/WhiteCorners_09.png'),IWCreateImage('Happy_Days_files/WhiteCorners_08.png'),IWCreateImage('Happy_Days_files/WhiteCorners_07.png'),IWCreateImage('Happy_Days_files/WhiteCorners_04.png')],null,2,0.150000,50.000000,50.000000,50.000000,50.000000,82.000000,88.000000,87.000000,87.000000,704.000000,1324.000000,704.000000,1324.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Happy_Days_files/Happy_DaysMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
