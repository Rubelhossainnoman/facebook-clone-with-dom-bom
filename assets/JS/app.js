// Get element here....
const mySwiper = document.querySelectorAll('.mySwiper');
if (mySwiper) {
    mySwiper.forEach(item => {
        const swiper = new Swiper(item, {
            slidesPerView: 5,
              spaceBetween: 10,
            //   loop: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                640: {
                  slidesPerView:3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              },
        });
        
    });
}
const selectStoriesMenu = document.querySelector(".body_middle_story_header #stories");
const storiesItem = document.querySelector(".body_middle_story_contents");
const selectReelsMenu = document.querySelector(".body_middle_story_header #reels");
const reelsItem = document.querySelector(".body_middle_reels_contents");

if (selectStoriesMenu) {
    selectStoriesMenu.onclick = () =>{
        selectStoriesMenu.classList.add("active");
        storiesItem.classList.add("active");
        selectReelsMenu.classList.remove("active");
        reelsItem.classList.remove("active")
    }
}
if (selectReelsMenu) {
    selectReelsMenu.onclick = () =>{
        selectReelsMenu.classList.add("active");
        reelsItem.classList.add("active")
        storiesItem.classList.remove("active");
        selectStoriesMenu.classList.remove("active");
    }
}

const sMSLCO = document.getElementById('body_left_items_one'); // see more see less contents one
const sMSLCT = document.getElementById('body_left_items_two'); // see more see less contents two
const sMSLBO = document.querySelector('.see_more.one'); // see more see less button one
const sMSLBT = document.querySelector('.see_more.two'); // see more see less button two
const sMSLTO = document.querySelector('.see_more.one p'); // see more see less text one
const sMSLTT = document.querySelector('.see_more.two p'); // see more see less text two

if (sMSLBO) {
    sMSLBO.onclick = () =>{
        sMSLBO.classList.toggle("active");
        sMSLCO.classList.toggle("active");
        sMSLTO.innerHTML = "See Less"
    }
}
if (sMSLBT) {
    sMSLBT.onclick = () =>{
        sMSLBT.classList.toggle("active");
        sMSLCT.classList.toggle("active");
        sMSLTT.innerHTML = "See Less"
    }
}

// Now so all post here....
const showAllPosts = document.querySelector(".all_fb_posts");
// Show all post here...
const showPost = () =>{
    const data = getLSdata("posts");
    
    //Take a list here....
    let postList = "";
    
    if (data.length > 0) {
        // Use map now...for showing data....
        data.reverse().map((item) => {

            postList += `<div class="posts_item">
            <div class="posts_header">
            <div class="user_profile_info">
                <img class="profile_image" src="./assets/image/profile image/Rubel Hossain.png" alt="">
                <div class="user_info_contents">
                <div class="username_update">${item.name} <span>Update his cover photo.</span></div>
                <div class="post_time_ago">${timeAgo(item.postTime)} <img src="./assets/image/icon/Shared with Public group.svg" alt=""></div>
                </div>
            </div>
            <div class="posts_action">
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="postActions" data-bs-toggle="dropdown" aria-expanded="false"><img src="./assets/image/icon/three_dot.svg" alt=""></button>
                <ul class="dropdown-menu" aria-labelledby="postActions">
                <li style="cursor:pointer;"><a class="dropdown-item" dataEdit="${item.id}">Edit Post</a></li>
                <li style="cursor:pointer;"><a class="dropdown-item DeletePost" dataDelete="${item.id}">Delete post</a></li>
                </ul>
                </div>
                <div class="hide_post">
                <i style="background-image: url(./assets/image/icon/icons_4.png);background-position: -168px -84px;height: 20px;width: 20px;display: block;"></i>
                </div>
            </div>
            </div>
            <div class="posts_contents">
            <div class="post_desc">
                <p>${item.desc}</p>
            </div>
            <div class="post_image">
                <img src="${item.photo}" alt="">
            </div>
            <!-- <div class="post_video">
                <video controls autoplay class="w-100" src="https://www.youtube.com/embed/ztGlXSEXkoA"></video>
            </div> -->
            </div>
            <div class="post_react_number">
            <div class="react_items">
                <div class="like"><img src="./assets/image/icon/like.svg" alt="">1</div>
                <div class="comment">3 comments</div>
                <div class="share">0 share</div>
            </div>
            </div>
            <div class="post_like_comment_share">
            <ul>
                <li>
                <div>
                    <i style="display: block;background-image: url(./assets/image/icon/icon_5.png);background-position: 0px -172px;width: 18px;height: 18px;background-repeat: no-repeat;"></i>
                    <p class="m-0">Like</p>
                </div>
                </li>
                <li>
                <div>
                    <i style="display: block;background-image: url(./assets/image/icon/icon_5.png);background-position: 0px -134px;width: 18px;height: 18px;background-repeat: no-repeat;"></i>
                    <p class="m-0">Comment</p>
                </div>
                </li>
                <li>
                <div>
                    <i style="display: block;background-image: url(./assets/image/icon/icon_5.png);background-position: 0px -191px;width: 18px;height: 18px;background-repeat: no-repeat;"></i>
                    <p class="m-0">Share</p>
                </div>
                </li>
            </ul>
            </div>
        </div>`
        });
    } else {
        postList = `<div class="data_not_found">
        <p class="m-0 text-center">Data Not Found</p>
      </div>`;
    }
    showAllPosts.innerHTML = postList;
}

showPost();



// Now back end work from here...
const createPostForm = document.getElementById("createPostForm");
const closeBtn = document.querySelector(".close_modal");
const msg = document.getElementById("msg");

if (createPostForm) {

    createPostForm.onsubmit = (e) =>{
        e.preventDefault();
        // Get from data here...
        const data = new FormData(e.target);
        const genarateObject = Object.fromEntries(data.entries());
        
        // Distructring here....
        const {name,desc,photo} = genarateObject;
        
        // Now valication here...
        if (!name || !photo) {
            msg.innerHTML = setAlert("All fields are required!");
        } else {
            // Get ls data here....
            const data = getLSdata("posts");

            let getId = 1;
            if (data.length > 0) {
                // console.log(data.find(data => data.id));
                getId += 1;
            }

            // now push data here..
            data.push({
                id : getId,
                name : name,
                desc : desc,
                photo : photo,
                postTime : Date.now()
            })

            // now set data in ls...
            setLSdata("posts", data);
        }
        e.target.reset();
        closeBtn.click();
        showPost();
    }
    
}

// Delete post now..here....
if (showAllPosts) {
    showAllPosts.onclick = (e) =>{
        if (e.target.classList.contains("DeletePost")) {
            // Get id now...
            const id = e.target.getAttribute("dataDelete");
            // Get ls data here...
            const data = getLSdata("posts");

            const conif = confirm("Are you sure? to delete this data");

            if (conif) {
                const newData = data.filter(data => data.id != id);

                // Now again set data here...
                setLSdata("posts", newData);

                showPost();
            }

            return showPost();

        }
    }
}