module.exports = {
    profileUrl: () => {
        return `/profile/1`;
    },
    friendsUrl: (user) => {
        return `/friends/1`;
    },
    newWorkoutUrl: (user) => {
        return `/new_workout/`;
    },
    printUser: (user) => {
        console.log(user);
    },
    //added
    printScores: (score) => {
        console.log(score);
    },

    showFriend: (friend) => {
        return friend;
    },
    getUserScore: (user) => {
        let lastIndex = user.scores.length-1;
        return user.scores[lastIndex].weekly_score;
    },
    printHistory: (history) => {
        console.log('history', history);
    },
    printType: (entry) => {
        console.log('type', typeof entry);
    },
    nameExercise: (id) => {
        const table = ['Bicep Curls','Tricep Extensions','Bench Press','Dead Lift',];
        // let key = id.toString();
        // let key = '1';
        // console.log(typeof id);
        return table[id-1];
    },
    getUserScore: (user) => {
        if(user.scores.length != 0){
            let lastIndex = user.scores.length-1;
            return user.scores[lastIndex].weekly_score;
        }
        else 
        {
            return 0;
        }
    }

}