import {Upload, Icon, Modal, Button} from 'antd';
import React, { Component } from "react";


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class UploadImg extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://modernplace.ru/wp-content/uploads/2018/01/planirovki-2-komnatnoj-kvartiry-1.jpg',
      },
      {
        uid: '-2',
        name: 'image.png',
        status: 'done',
        url: 'https://images-cdn.cian.site/realty/uploads/froala_editor/images/Cian_Planirovka3_part2-04_F1MCd05.png',
      },
      {
        uid: '-3',
        name: 'image.png',
        status: 'done',
        url: 'https://play.min.io/makeapp/preset/cold-caramel.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143038Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=046377ff2f5056e5101fd210dd2a2b6b4d5f6a181089adb9e848d6aa804720db',
      },
      {
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url: 'https://lenspecsmu.ru/upload/obj_imgs/18000000000000498/39500000000939731.jpeg',
      },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
    );
    return (
        <div className="clearfix" style={{backgroundColor: "white"}}>
          <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
          >
            {fileList.length >= 5 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
          <Button type="primary" block>
            Submit
          </Button>
        </div>
    );
  }
}

export default UploadImg