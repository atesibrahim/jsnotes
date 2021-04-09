  uploadTo() {

    const fileUploadInput = this.shadowRoot.querySelector('#fileUploadInput');
    const status = this.shadowRoot.querySelector('#status');
    const progressbar = this.shadowRoot.querySelector('#progressbar');
    let uploadedFiles = this.shadowRoot.querySelector('#uploadedFiles');
    const _scopeOfComponent = this;

    let child = '';
    let fileByteArray = [];

    fileUploadInput.addEventListener('change', function (event) {

      let file = event.target.files;

      if (file.length > 5) {
        alert('Error : You can upload maximum 5 files!');
        return;
      }

      for (let index = 0; index < file.length; index++) {

        if (file[index].size > 2 * 1024 * 1024) {
          alert('Hata : The file size can not be exceeded 2 MB!');
          return;
        }
        let formdata = new FormData();
        formdata.append(file[index].name, file[index]);
        const ajax = new XMLHttpRequest();
        ajax.upload.addEventListener("progress", progressHandler, false);
        ajax.addEventListener("load", completeHandler, false);
        ajax.addEventListener("error", errorHandler, false);
        ajax.addEventListener("abort", abortHandler, false);
        ajax.open("POST", "https://httpbin.org/post");
        ajax.send(formdata);

        function progressHandler(event) {
          const pb = progressbar.querySelector('.progress');
          let percent = (event.loaded / event.total) * 100;
          pb.style.width = (Math.round(percent) + '%');
          if (percent !== 100) {
            uploadedFiles.innerHTML = "<public-anchor class='anchor'><public-icon icon='public-custom:upload'></public-icon>"
              + file[index].name + "</public-anchor>"
              + "<div class='uploadedProgress'>" + Math.round(percent) + "%"
              + "</div>" +
              "<div id='progressbar'><div class='progress'></div></div><br>";
          } else {
            child += "<public-anchor class='anchor'><public-icon icon='public-custom:upload'></public-icon>"
              + file[index].name + "</public-anchor>"
              + "<div class='uploadedProgress'>"
              + "<public-icon icon='public-small:approve' type='small' class='uploadedIcon'></public-icon></div><br>";
          }

        }

        function completeHandler(event) {
          uploadedFiles.innerHTML = child;

          //event.target.response.split('files')[1].split('base64,')[1]

          _scopeOfComponent.sendFileToCache(file[0]);
        }

        function errorHandler(event) {
          status.innerHTML = "Upload Failed";
        }

        function abortHandler(event) {
          status.innerHTML = "Upload Aborted";
        }
      }

    });
  }


sendFileToCache(file) {
    
    let fileByteArray = [];


    openfile();
    
      // Eventhandler for file input. 
      function openfile() {
        // Pass the file to the blob, not the input[0].
        let fileData = new Blob([file]);
        // Pass getBuffer to promise.
        let promise = new Promise(getBuffer(fileData));
        // Wait for promise to be resolved, or log error.
        promise.then(function(data) {
          // Here you can pass the bytes to another function.
          for (let i = 0; i < data.length; i++) {
            fileByteArray.push(data[i]);
          }
        }).catch(function(err) {
          console.log('Error: ',err);
        });
      }

      /* 
        Create a function which will be passed to the promise
        and resolve it when FileReader has finished loading the file.
      */
      function getBuffer(fileData) {
        return function(resolve) {
            let reader = new FileReader();
            reader.readAsArrayBuffer(fileData);
            reader.onload = function() {
              let arrayBuffer = reader.result
              let bytes = new Uint8Array(arrayBuffer);              
              resolve(bytes);
            }
        }
      }
}
