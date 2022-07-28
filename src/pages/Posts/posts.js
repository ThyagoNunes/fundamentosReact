export default [
  {
    id: Math.random(),
    title: 'O que são states?',
    description: 'São estados de armazenamento para valor',
  },
  {
    id: Math.random(),
    title: 'Entendendo as props...',
    description: 'Props são propriedades passadas de componente pai e acessadas pelos componentes filhos ',
  },
  {
    id: Math.random(),
    title: 'React Context API',
    description: 'Context api é basicamente você acessar propriedades dos componentes pais no mais profundos componentes filhos sem passar por prop drilling',
  },
  {
    id: Math.random(),
    title: 'Theming com Styled Components',
    description: 'ThemeProvider com o Theme{} e passado as props com ${({varDesestruturada}) => varDesestruturada.var.propriedade requisitada}',
  },
];
