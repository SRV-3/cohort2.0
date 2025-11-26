const reels = [
  {
    username: "beautybyana",
    likeCount: 12800,
    isLiked: false,
    commentCount: 320,
    caption: "Morning skincare routine for glowing skin ✨",
    video: "./video/1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=12",
    shareCount: 140,
    isFollowed: true
  },
  {
    username: "stylewithrahul",
    likeCount: 8900,
    isLiked: true,
    commentCount: 210,
    caption: "Winter streetwear fits 🔥",
    video: "./video/2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=32",
    shareCount: 90,
    isFollowed: false
  },
  {
    username: "cookwithmira",
    likeCount: 15600,
    isLiked: false,
    commentCount: 450,
    caption: "5-min pasta recipe everyone should try 😍",
    video: "./video/3.mp4",
    userProfile: "https://i.pravatar.cc/150?img=47",
    shareCount: 300,
    isFollowed: true
  },
  {
    username: "fitness_nikhil",
    likeCount: 22200,
    isLiked: true,
    commentCount: 670,
    caption: "Best home workout for chest 💪",
    video: "./video/4.mp4",
    userProfile: "https://i.pravatar.cc/150?img=18",
    shareCount: 190,
    isFollowed: true
  },
  {
    username: "travelwithsana",
    likeCount: 9800,
    isLiked: false,
    commentCount: 260,
    caption: "Hidden gem in Himachal 🌄",
    video: "./video/5.mp4",
    userProfile: "https://i.pravatar.cc/150?img=65",
    shareCount: 120,
    isFollowed: false
  },
  {
    username: "techbysid",
    likeCount: 6400,
    isLiked: false,
    commentCount: 150,
    caption: "iOS vs Android in 2025 — quick breakdown ⚡",
    video: "./video/1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=49",
    shareCount: 70,
    isFollowed: true
  },
  {
    username: "makeupwithkriti",
    likeCount: 19000,
    isLiked: true,
    commentCount: 520,
    caption: "Soft glam look for any occasion 💄",
    video: "./video/2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=3",
    shareCount: 250,
    isFollowed: false
  },
  {
    username: "thepetcorner",
    likeCount: 27500,
    isLiked: false,
    commentCount: 880,
    caption: "This puppy learning to sit 😭❤️",
    video: "./video/3.mp4",
    userProfile: "https://i.pravatar.cc/150?img=10",
    shareCount: 460,
    isFollowed: true
  },
  {
    username: "codingwitharav",
    likeCount: 5400,
    isLiked: true,
    commentCount: 110,
    caption: "JavaScript hack everyone should know 🤯",
    video: "./video/4.mp4",
    userProfile: "https://i.pravatar.cc/150?img=24",
    shareCount: 40,
    isFollowed: false
  },
  {
    username: "dancewithme",
    likeCount: 31200,
    isLiked: false,
    commentCount: 920,
    caption: "New dance trend 😍🔥 Try this!",
    video: "./video/5.mp4",
    userProfile: "https://i.pravatar.cc/150?img=57",
    shareCount: 510,
    isFollowed: true
  }
];

let allReels = document.querySelector('.all-reels')



function addData() {
    let sum = ""
    reels.forEach((elem, idx)=>{
        sum = sum+ `<div class="reel">
                        <video autoplay loop muted src="${elem.video}"></video>
                        <div class="bottom">
                            <div class="user">
                                <img src="${elem.userProfile}" alt="">
                                <h4>${elem.username}</h4>
                                <button id="${idx}" class="follow">${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                            <h3>${elem.caption}</h3>
                        </div>
                        <div class="right">
                            <div id="${idx}" class="like">
                                <h4 class="like-icon icon">${elem.isLiked ? '<i class="ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                                <h6>${elem.likeCount}</h6>
                            </div>
                            <div class="comment">
                                <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                                <h6>${elem.commentCount}</h6>
                            </div>
                            <div class="share">
                                <h4 class="share-icon icon"><i class="ri-send-plane-fill"></i></h4>
                                <h6>${elem.shareCount}</h6>
                            </div>
                            <div class="menu">
                                <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                            </div>
                        </div> 
                    </div>`
    })

    allReels.innerHTML = sum
}

addData()

allReels.addEventListener('click',(dets)=>{
    if(dets.target.className == 'like'){
        if(!reels[dets.target.id].isLiked){
        reels[dets.target.id].likeCount++
        reels[dets.target.id].isLiked = true
        
        }else{
            reels[dets.target.id].likeCount--
            reels[dets.target.id].isLiked = false
        }
    }

    if(dets.target.className == 'follow'){
        if(!reels[dets.target.id].isFollowed){
        reels[dets.target.id].isFollowed = true
        
        }else{
            reels[dets.target.id].isFollowed = false
        }
    }
    
    
    addData()
})