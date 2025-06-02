const changeText = document.getElementById('text')
const outputBtn = document.getElementById('btn')

outputBtn.addEventListener('click', () => {
  changeText.textContent = 'ボタンをクリックしました';
})