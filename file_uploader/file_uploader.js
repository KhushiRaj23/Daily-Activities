document.getElementById('uploadButton').addEventListener('click',function(){
    var fileInput=document.getElementById('fileInput');
    //selecting only first file from the lists of file uploaded.
    var file=fileInput.files[0];
    var errorSpan=document.getElementById('errorSpan');

    if(file){
        if(file.size > 4*1024*1024){
            errorSpan.textContent='file size should not be more than 4 mb!';
        }else{
            errorSpan.textContent='';
        }
    }else{
        errorSpan.textContent='select a file';
    }
});
