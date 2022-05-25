let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
    
    /* Hvor langt nede på siden er vi? - y-offset */
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
    /* Length to offset the dashes */
    var drawLength = pathLength * scrollPercentage;
    
    /* Draw in reverse */
    path.style.strokeDashoffset = pathLength - drawLength;
})
