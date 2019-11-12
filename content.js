console.log('Gmail Service Desk Chrome Extension loaded.');

const targetNode = document;

// Options for the observer (which mutations to observe)
let config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.target.tagName === "IMG" && mutation.target.src.indexOf('issue-type-icons') > -1){
            mutation.target.style.display = "none";
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);