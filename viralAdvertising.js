const viralAdvertising = () => {
    let n = 5;
    let shared = 5, like = 0, totalLikes = 0;
    for (let i = 0; i < n; i++) {
        like = Math.floor(shared / 2);
        shared = like * 3;
        totalLikes += like;
    }
    console.log(like)
    return totalLikes;
}


console.log(viralAdvertising());