const observer = new MutationObserver( (mut, obs) => {
    let btn = document.querySelector('.ytp-ad-skip-button');
    if (btn) removeYtAds(btn);
    //Incase of ads overlay
    let ad = document.querySelector('.ytp-ad-module');
    if (ad) ad.style.display = "none";
});
observer.observe(document, {
    childList: true,
    subtree: true,
});
function removeYtAds(btn) {
    let videoContainer = document.querySelector('.html5-main-video');
    videoContainer.currentTime = videoContainer.duration;
    btn.click();
}