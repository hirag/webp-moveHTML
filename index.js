
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var output = document.querySelector('.output');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
    output.innerHTML = textarea.value;
}
                
reset.addEventListener('click', function() {
    textarea.value = code;
    userEntry = textarea.value;
    updateCode();
});

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

textarea.onkeyup = function(){
    updateCode();
};
                            