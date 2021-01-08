import { Theme } from '../models/theme.interface';

export const themes = {
  primary: {
    '--text-color': '#212121',
    //cor de fundo do site 
    '--body-background': '#ffffff',
    '--body-color': 'black',
    //icone do login
    '--icon-color': '#003366',
    //icone da tela inicial
    '--icon-hover': '#d1d1d1',
    '--primary': '#212121',
    //botões iniciais
    '--primary-color': '#8594e7',
    //fundo da tela de icones iniciais depois do login
    '--primary-background': '#f6f6f6',
    '--secondary': '#757575',
    //cor da logomarca
    '--secondary-color': '#66b3ff',
    '--warning-color': 'string',
    '--success-color': 'string',
    '--accent': 'black',
    '--white': '#FFFFFF',
    '--nav-height': '70px',
    '--footer-height': '50px',
    //rodapé
    '--footer-background': '#f6f6f6',
    //cor do footer
    '--nav-color': '#f6f6f6',
    '--text-color-button': '#fff',
    '--bg-inicial': '#8594E7'
  } as Theme,
  secondary: {
    '--text-color': '#d1d1d1',
    '--body-background': 'black',
    '--body-color': 'white',
    '--icon-color': 'white',
    '--icon-hover': '#d1d1d1',
    '--primary-background': 'black',
    '--primary': 'blue',
    '--primary-color': 'blue',
    '--secondary': 'red',
    '--secondary-color': 'string',
    '--warning-color': 'string',
    '--success-color': 'string',
    '--accent': '#FF5722',
    '--white': '#FFFFFF',
    '--nav-height': '70px',
    '--nav-color': 'black',
    '--footer-height': '50px',
    '--footer-background': '#689F38',
  } as Theme,
};
