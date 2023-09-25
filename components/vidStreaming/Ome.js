import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function AsyncOvenPlayer() {
  let a = 1
  useEffect(() => {
    let playerInterval;
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
        waterMark: {
          text: '',
          font: {
              'font-size': '20px',
              'color': '#fff',
              'font-weight': 'bold'
          },
          position: 'bottom-right'
      },
        sources: [
          {
            label: 'Drone 1',
            // Set the type to 'webrtc'
            type: 'webrtc',
            // Set the file to WebRTC Signaling URL with OvenMediaEngine 
            file: 'wss://uav.ikramatic.com.my:3334/app/stream'
          }
        ],
        
        mute : true,
        autoStart : true,
        
 
      });
      // player.play();
      
      
      player.on('stateChanged', function(data){
        player.getConfig().systemText.api.error[501].message = 'Waiting for live streaming.';
        
      });
      player.on('ready', function(data){
        console.log("Player is ready");
        player.play();
        a+=1;
      });

      player.on('erorr',function(){
        console.log("player is error");
      });

      playerInterval = setInterval(() => {
        if (player.getState() === 'PLAYING') {
          
        } else {
          console.log(a);
          player.play();
        }
      }, 5000);

      

      // Other initialization or behavior code related to OvenPlayer
      // ...
    }

    setupOvenPlayer();
  }, [a]);

  return (
    <div>
      
      <div id="player_id"></div>
      
    </div>
  );
}
