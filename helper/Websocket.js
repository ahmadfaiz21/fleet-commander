const WebS =({props,connection})=>{
    
  const socket = new WebSocket(connection);

  socket.addEventListener('open', (event) => {
    console.log('WebSocket is open:', event);
    socket.send('Hello, server!');
  });

  socket.addEventListener('message', (event) => {
      // console.log('Message from server:', event);
      
      props(event.data);
      
  });

  socket.addEventListener('close', (event) => {
    console.log('WebSocket is closed:', event);
  });

  socket.addEventListener('error', (event) => {
    console.error('WebSocket error:', event);
  });

  return () => {
    socket.close(); // Close the connection when component is unmounted
  };

}

export default WebS;