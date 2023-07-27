// alert funcetion here....
const setAlert = (msg,type = "danger") =>{
    return `<p class="alert alert-${type} d-flex justify-content-between align-items-center"> ${msg} <button data-bs-dismiss="alert" class="btn-close"></button></p>`
}

// Set data in ls....
const setLSdata = (key,value) =>{
    localStorage.setItem(key, JSON.stringify(value));
}

// Get data form ls here...
const getLSdata = (key) =>{
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
    } else {
        return [];
    }
}

const  timeAgo = (postTime) => {
    const currentTime = new Date();
    const postDate = new Date(postTime);
    const timeDifferenceInSeconds = Math.floor((currentTime - postDate) / 1000);
  
    if (timeDifferenceInSeconds < 60) {
      return `${timeDifferenceInSeconds} seconds ago`;
    } else if (timeDifferenceInSeconds < 3600) {
      const minutes = Math.floor(timeDifferenceInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 86400) {
      const hours = Math.floor(timeDifferenceInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 604800) {
      const days = Math.floor(timeDifferenceInSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 2419200) {
      const weeks = Math.floor(timeDifferenceInSeconds / 604800);
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 29030400) {
      const months = Math.floor(timeDifferenceInSeconds / 2419200);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(timeDifferenceInSeconds / 29030400);
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
}