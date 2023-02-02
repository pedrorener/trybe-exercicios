// Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const brotherElementoOndeVoceEsta = document.createElement('section');
brotherElementoOndeVoceEsta.id = 'brotherElementoOndeVoceEsta';
pai.appendChild(brotherElementoOndeVoceEsta)

// Crie um filho para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
const childElementoOndeVoceEsta = document.createElement('section');
childElementoOndeVoceEsta.id = 'childElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(childElementoOndeVoceEsta)

// Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const childPrimeiroFilhoDoFilho = document.createElement('section');
childPrimeiroFilhoDoFilho.id = 'childPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(childPrimeiroFilhoDoFilho)

// A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho = childPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;