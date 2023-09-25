import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function AsyncOvenPlayer() {
  useEffect(() => {
    async function setupOvenPlayer() {
      // Load OvenPlayer via CDN
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/ovenplayer@0.10.0/dist/ovenplayer.js';
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

      // Initialize OvenPlayer with WebRTC source
      const player = OvenPlayer.create('player_id', {
        sources: [
          {
            label: 'label_for_webrtc',
            // Set the type to 'webrtc'
            type: 'webrtc',
            // Set the file to WebRTC Signaling URL with OvenMediaEngine 
            file: 'wss://uav.ikramatic.com.my:3334/app/stream'
          }
        ]
        
      });
      console.log("const player called");

      // Other initialization or behavior code related to OvenPlayer
      // ...
    }

    setupOvenPlayer();
  }, []);

  return (
    <div>
      
      <div id="player_id"></div>
      
    </div>
  );
}
