Meteor.publish("posts",function(userid){
return Posts.find({});
})
Meteor.publish("likes",function(postid){
return Likes.find({post:postid});
})
Meteor.publish("appusers",function(){
return Meteor.users.find({_id: this.user});
})

Meteor.methods({
//{text:'',owner:'',date:'',parent:''}
'addPost':function(options){
var post = {
text:options.text,
owner:Meteor.user().emails[0].address,
date:new Date(),
parent:options.parent,
}
Posts.insert(post);
},
'removePost':function(id){
Posts.remove({_id:id});
},
'removeAllPosts':function(){
Posts.remove({});
},
'addNames':function(){

}
})