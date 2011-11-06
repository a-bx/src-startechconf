Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({  
    title:'@RodrigoAyala Movie',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Video',
    window:win1
});

var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

tabGroup.open();

var videoOptions = {
    url: Titanium.Filesystem.resourcesDirectory + Titanium.Filesystem.separator + 'rodrigo-trabajando.mov',
		backgroundColor: '#111'
};

var movie = Titanium.Media.createVideoPlayer(videoOptions);
movie.movieControlStyle = Titanium.Media.VIDEO_CONTROL_NONE;
	
win1.add(movie);
 movie.addEventListener('complete', function (e) {
   alert("movie is finished");
	movie.close();  
});

movie.play();



