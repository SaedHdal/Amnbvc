client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  '+setcolors') {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('جاري عمل الالوان يرجى الانتظار لمدة دقيقة |white_check_mark')
        }else{
            message.channel.send('ما معاك البرمشن المطلوب  |x')
            }
    }
});