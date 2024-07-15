function copyToClipboard(text)
{
    navigator.clipboard.writeText(text);
}

document.getElementById("gen-passwd").addEventListener("click", function(){
    const passwd = document.getElementById("gen-passwd").value;
    if(passwd)
    {
        copyToClipboard(passwd);
        document.getElementById("tip-cp").textContent = "Copied to clipboard!";
    }
});