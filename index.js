
function setImgs() {
  const imgs = document.getElementsByTagName('img')
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = "https://i.imgur.com/arhJ7IE.jpeg"
  }
}

setImgs()

const targetNode = document.getElementsByTagName('body');
const observer = new MutationObserver(setImgs)

observer.observe(targetNode[0], { childList: true, subtree: true });
