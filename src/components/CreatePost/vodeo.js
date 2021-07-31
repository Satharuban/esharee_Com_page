import React, { PureComponent } from 'react'
 
export default class UploadFile extends PureComponent {
    state = {
        name: '',
        path: '',
        preview: null,
        data: null
    }
 
    changeName = (e) => {
        this.setState({ name: e.target.value })
    }
 
         //Select the file 
    changePath = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
 
        let src,preview,type=file.type;
 
                 // match a string of type image/ at the beginning
        if (/^image\/\S+$/.test(type)) {
            src = URL.createObjectURL(file)
            preview = <img src={src} alt='' />
        }
                 // match the string of type video/ at the beginning
        else if (/^video\/\S+$/.test(type)) {
            src = URL.createObjectURL(file)
            preview = <video src={src} autoPlay loop controls />
        }
                 // match a string of type text/ at the beginning
        else if (/^text\/\S+$/.test(type)) {
            const self = this;
            const reader = new FileReader();
            reader.readAsText(file);
                        //  / / Note: onload is an asynchronous function, which needs to be handled independently
            reader.onload = function (e) {
                preview = <textarea value={this.result} readOnly></textarea>
                self.setState({ path: file.name, data: file, preview: preview })
            }
            return;
        } 
 
        this.setState({ path: file.name, data: file, preview: preview })
    }
 
         // upload files 
    upload = () => {
        
        const data = this.state.data;
        if (!data) {
                        //  Console.log('unselected file');
            return;
        }
 
                 //The url here should be the upload file api provided by the server. 
        const url = 'http://localhost:3000/api/upload';
        const form = new FormData();
 
                //  / / The file field here is determined by the uploaded api, can be other values
        form.append('file', data);
 
        fetch(url, {
            method: 'POST',
            body: form
        }).then(res => {
            console.log(res)
        })
    }
 
        //  / / Close the modal box
    cancel = () => {
        this.props.closeOverlay();
    }
 
    render() {
        const { name, path, preview } = this.state;
        return (
            <div>
                                 <h4 style={{marginBottom:10}}>Upload file</h4>

                <div className='row'>
                                         <label>file name</label>
                                         <input type='text' placeholder='Please enter the file name' value={name} onChange={this.changeName} />
                </div>
                <div className='row'>
                                         <label>file path</label>
                    <div className='row-input'>
                                                 <span>{path ? path : 'Please select the file path'}</span>
                        <input type='file' accept='video/*,image/*,text/plain' onChange={this.changePath} />
                    </div>
                </div>
                <div className='media' style={{margin:10}}>
                    {preview}
                </div>
                <br/>
                                 <button className='primary upload'style={{display: '',
              borderRadius: 10, borderColor: "#CF0505", width: 'auto', color: "blue", height: 35, fontSize: 13, margin: "1px 5px 1px 5px", padding: '5px 15px 5px 15px',
              fontWeight: 800,
              border: " 2px solid blue",
              backgroundColor: "transparent",
             }} onClick={this.upload}>Upload</button>
                                 <button className='primary cancel'style={{display: '',
              borderRadius: 10, borderColor: "#CF0505", width: 'auto', color: "#CF0505", height: 35, fontSize: 13, margin: "1px 5px 1px 5px", padding: '5px 15px 5px 15px',
              fontWeight: 800,
              border: " 2px solid #CF0505",
              backgroundColor: "transparent",
             }} onClick={this.cancel}>Cancel</button>
            </div>
        )
    }
}
