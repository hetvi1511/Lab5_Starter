// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();

    voiceSelect.innerHTML = '';
    const defOption = document.createElement('option');
    defOption.textContent = 'Select voices:';
    defOption.disabled = true;
    defOption.selected = true;
    voiceSelect.appendChild(defOption);

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const selectedIndex = voiceSelect.value;
    const text = textInput.value;

    if (text.trim() === '' || selectedIndex === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}