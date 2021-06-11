
const LastActivity = (updated_at) => {

const startDate = new Date();
return (Math.floor((startDate.getTime() - Date.parse(updated_at)) / 86400000) > 0 ? Math.floor((startDate.getTime() - Date.parse(updated_at)) / 86400000).toString() : "Today");

};

export default LastActivity;