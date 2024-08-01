import React, { useEffect, useRef, useState } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import { RTCView, mediaDevices, RTCPeerConnection, MediaStream } from 'react-native-webrtc';
import HttpBridge,{BridgeServer} from 'react-native-http-bridge-refurbished';

interface ServerProps {
  port: number;
  audio: boolean;
  video: boolean;
}

const Server: React.FC<ServerProps> = ({ port, audio, video }) => {
  const localStreamRef = useRef<MediaStream | null>(null);
  const [lastCalled, setLastCalled] = useState<number | undefined>();
  useEffect(() => {
    const startServer = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        if (
          granted[PermissionsAndroid.PERMISSIONS.CAMERA] !== PermissionsAndroid.RESULTS.GRANTED ||
          granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] !== PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.error('Permissions not granted');
          return;
        }
      }

      // Initialize HTTP Bridge
      HttpBridge.start(port, '127.0.0.1', async (request) => {
        console.log('Request received: ', request);
        if (request.url === '/offer') {
          const offer = await createOffer();
          return {
            status: 200,
            body: JSON.stringify(offer),
          };
        } else if (request.url === '/ping') {
          return {
            status: 200,
            body: JSON.stringify({ message: 'success' }),
          };
        }
      });
      // Access the camera
      const stream = await mediaDevices.getUserMedia({
        video,
        audio,
      });

      localStreamRef.current = stream;
    };

    const createOffer = async () => {
      const peerConnection = new RTCPeerConnection();
      localStreamRef.current?.getTracks().forEach(track => peerConnection.addTrack(track, localStreamRef.current!));
      const offer = await peerConnection.createOffer({});
      await peerConnection.setLocalDescription(offer);
      return offer;
    };

    startServer();
    
    return () => {
      
      HttpBridge.stop();
      localStreamRef.current?.getTracks().forEach(track => track.stop());
    };
  }, [port, audio, video]);

  return (
    <View style={{ flex: 1 }}>
      {localStreamRef.current ? (
        <RTCView
          streamURL={localStreamRef.current.toURL()}
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <Text>Loading camera...</Text>
      )}
    </View>
  );
};

export default Server;
