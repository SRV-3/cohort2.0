function getUser(username, cb){
    console.log("fetching");
    
    setTimeout(()=>{
        cb({id:1001, username:"srv"})
    },1000)

}

function getUserPost(id, cb){
        setTimeout(()=>{
            cb(["hello","hye","bye-bye"])
        },2000)
    }

getUser("srv", function(data){
    getUserPost(data.id, function(allPosts){
        console.log(data.id, data.username, allPosts[1]);
        
    })
})