import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RTCView, RTCPeerConnection, MediaStream, RTCSessionDescription } from 'react-native-webrtc';
interface props{
  port:number,
  url:string
}
const Client: React.FC<props> = ({port,url}) => {
  const remoteStreamRef = useRef<MediaStream | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null | any>(null);
  const [pingResult, setPingResult] = useState<string>('Not Pinged');

  useEffect(() => {
    const initializeConnection = async () => {
      peerConnectionRef.current = new RTCPeerConnection();

      // Handle track event
      peerConnectionRef.current.ontrack = (event:any) => {
        if (event.streams && event.streams[0]) {
          remoteStreamRef.current = event.streams[0];
        }
      };

      // Fetch the offer from the server
      const response = await fetch(`http://${url}:${port}/offer`);
      const offer = await response.json();

      // Set remote description
      await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(offer));

      // Create answer and set local description
      const answer = await peerConnectionRef.current.createAnswer();
      await peerConnectionRef.current.setLocalDescription(answer);

      // Send the answer back to the server
      await fetch(`http://${url}:${port}/answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answer),
      });
    };

    initializeConnection();

    return () => {
      peerConnectionRef.current && peerConnectionRef.current.close();
    };
  }, []);

  const pingServer = async () => {
    try {
      const response = await fetch('http://<mobile_ip>:8080/ping');
      const result = await response.json();
      setPingResult(result.message);
    } catch (error) {
      console.error('Error pinging server:', error);
      setPingResult('Ping failed');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Ping Server" onPress={pingServer} />
      <Text>{pingResult}</Text>
      {remoteStreamRef.current ? (
        <RTCView
          streamURL={remoteStreamRef.current.toURL()}
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <Text>Waiting for remote stream...</Text>
      )}
    </View>
  );
};

export default Client;
