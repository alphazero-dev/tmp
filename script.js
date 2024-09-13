const { Terminal } = require('xterm');
const si = require('systeminformation');

window.onload = () => {
  // Terminal setup
  const terminal = new Terminal();
  terminal.open(document.getElementById('terminal-container'));
  terminal.write('Welcome to your custom terminal!\r\n');

  // Load CPU Info
  si.cpu().then(data => {
    document.getElementById('cpu-info').innerText = `CPU: ${data.manufacturer} ${data.brand}`;
  });

  // Load Memory Info
  si.mem().then(data => {
    document.getElementById('memory-info').innerText = `Memory: ${(data.used / (1024 ** 3)).toFixed(2)} GB / ${(data.total / (1024 ** 3)).toFixed(2)} GB`;
  });
};
