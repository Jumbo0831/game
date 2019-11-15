var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 7000;//process.env.PORT || 7000;
const path = require('path');
var wait_Player = "0";
var tmpRoomId;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/' , function(req, res){
    console.log("secuss");
    //res.sendFile(__dirname+'/game.html');
    res.sendFile(__dirname + '/index.html');

});
//ルーム作成
io.sockets.on('connection', function (socket) {
 
    //接続切断際
    socket.on('disconnection', function () {
        console.log('disconnection'); 
    });

    //room create
    socket.on('test_to_game', function () {
        
        if (wait_Player == "1") {
            console.log("playerB");
            console.log(tmpRoomId);
            socket.join(tmpRoomId);
            wait_Player = "0";
            var user_info = {};
            user_info.user_name = "playerB";
            user_info.roomId = tmpRoomId+"B";
            io.to(tmpRoomId).emit('battle', user_info);
        }
        else {
            wait_Player = "1";
            tmpRoomId = Math.floor(Math.random() * 100) + 0;
            console.log("playerA");
            console.log(tmpRoomId);
            socket.join(tmpRoomId);
            socket.join(0);
            var user_info = {};
            user_info.user_name = "playerA";
            user_info.roomId = tmpRoomId+"A";
            io.to(tmpRoomId).emit('battle', user_info);
        }    
        
    });
    //
    socket.on('kuma_Location', function (Kuma_Location) {
        console.log('kuma_Location id'+Kuma_Location.roomId+'kuma Location_name' + Kuma_Location.player_name);
        //console.log('player_name:' + Kuma_Location.player_name);
        //console.log('kuma_Location_x' + Kuma_Location.kuma_x);
        //console.log('kuma_Location_y' + Kuma_Location.kuma_y);
        io.to(Kuma_Location.roomId).emit('Kuma_Location_change', Kuma_Location);
    });
});
/*　
//ゲームの位置情報を受信
io.to(tmpRoomId).on('connection',function(socket){
    console.log('connected');
    socket.on('kuma_Location', function (Kuma_Location) {
        /*console.log('kuma_Location');
        console.log('player_name:' + Kuma_Location.player_name);
        console.log('kuma_Location_x' + Kuma_Location.kuma_x);
        console.log('kuma_Location_y' + Kuma_Location.kuma_y);
        io.to(tmpRoomId).emit('Kuma_Location_change', Kuma_Location);
    });
});
*/



http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
    return ("0.0.0.0");
});