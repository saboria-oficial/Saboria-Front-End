function toggleBackgroundColor(elementId) {
    let activeElement = document.getElementById(elementId);
    let currentColor = activeElement.style.backgroundColor;
    let defaultColor = "whitesmoke";
    let activeColor = "darkred";
    let fontColorActive = 'whitesmoke';
    let fontColorDefault = 'black'
    
    if (currentColor === activeColor) {
      activeElement.style.backgroundColor = defaultColor; // Define a cor de fundo padrão se estiver vermelho
      activeElement.style.color = fontColorDefault

    } else {
      activeElement.style.backgroundColor = activeColor; // Define a cor de fundo vermelha se não estiver vermelho
      activeElement.style.color = fontColorActive;
    }
  }