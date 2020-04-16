import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {NodeCameraView} from 'react-native-nodemediaclient'

export default class App extends Component {
  state = {
    isPublish: false,
    publishBtnTitle: 'Start Publish'
  }
  render() {
    return (
      <View>
        <NodeCameraView
            style={{height:600, width: '100%'}}
            ref={(vb) => this.vb = vb}
            outputUrl={'rtmp://a.rtmp.youtube.com/live2/jgy1-7vz9-wj9d-1pu5'}
            camera={{ cameraId: 1, cameraFrontMirror: true }}
            audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
            video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
            autopreview={true}
          />
        <Button
          onPress={() => {
            if (this.state.isPublish) {
              this.setState({ publishBtnTitle: 'Start Publish', isPublish: false });
              console.log(this.vb)
              this.vb.stop();
            } else {
              this.setState({ publishBtnTitle: 'Stop Publish', isPublish: true });
              this.vb.start();
            }
          }}
          title={this.state.publishBtnTitle}
          color="#841584"
        />
      </View>
    )
  }
}
