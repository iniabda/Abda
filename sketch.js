const patrickHead = document.createElement('div');
patrickHead.setAttribute('id', 'patrick-head');
document.body.appendChild(patrickHead);

patrickHead.style.cssText = `
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: pink;
  position: relative;
`;

const patrickEyeStyle = `
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 40px;
`;

const patrickEyeLeft = document.createElement('div');
patrickEyeLeft.setAttribute('id', 'patrick-eye-left');
patrickEyeLeft.style.cssText = patrickEyeStyle + 'left: 60px;';
patrickHead.appendChild(patrickEyeLeft);

const patrickEyeRight = document.createElement('div');
patrickEyeRight.setAttribute('id', 'patrick-eye-right');
patrickEyeRight.style.cssText = patrickEyeStyle + 'left: 110px;';
patrickHead.appendChild(patrickEyeRight);

const patrickNose = document.createElement('div');
patrickNose.setAttribute('id', 'patrick-nose');
patrickNose.style.cssText = `
  width: 20px;
  height: 60px;
  background-color: black;
  position: absolute;
  top: 70px;
  left: 90px;
  transform: rotate(45deg);
`;
patrickHead.appendChild(patrickNose);

const patrickMouth = document.createElement('div');
patrickMouth.setAttribute('id', 'patrick-mouth');
patrickMouth.style.cssText = `
  width: 80px;
  height: 20px;
  background-color: black;
  position: absolute;
  top: 130px;
  left: 60px;
  border-radius: 10px;
`;
patrickHead.appendChild(patrickMouth);

setInterval(() => {
  const blinkDuration = Math.floor(Math.random() * 200) + 100;
  patrickEyeLeft.style.animation = `blink ${blinkDuration}ms linear`;
  patrickEyeRight.style.animation = `blink ${blinkDuration}ms linear`;

  const mouthHeight = Math.floor(Math.random() * 20) + 5;
  const mouthWidth = Math.floor(Math.random() * 40) + 10;
  patrickMouth.style.cssText = `
    width: ${mouthWidth}px;
    height: ${mouthHeight}px;
    background-color: black;
    position: absolute;
    top: 130px;
    left: 60px;
    border-radius: 10px;
  `;
}, 2000);