let hasmeeting = false;

const meeting =new Promise((resolve, reject) => {
    if (!hasmeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Zoom meeting",
            time : "10:00 AM"
        }
        resolve(meetingDetails);
    } else {
        reject(Error("Meeting has already been scheduled"));
    }
});

const addToCalender = (meetingDetails) => {
    const calender = `The ${meetingDetails.name} has been scheduled at ${meetingDetails.time} in ${meetingDetails.location}.`;
    return Promise.resolve(calender);
}

meeting
    .then(addToCalender)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.message);
    });