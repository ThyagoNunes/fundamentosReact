# fundamentosReact
Nesse projeto simples eu apliquei alguns fundamentos do react e seu ecossistema ( styled-components &amp; React-Router-V5 ) 

- Componentes funcionais 
- A importância REACT FRAGMENT
- Props 
- Props children 
- Funções de Callback via Props 
- Renderizar listas no REACT e logo entendi que ele não renderiza certos tipos e pra isso tem que ser utilizado algumas funcionalidades.
- HOOKS: useState, useMemo, useRef, useEffect e os custom hooks
- Diferença entre o useEffect e useLayoutEffect 
- O conceito de IMUTABILIDADE e como usar bem o spread operator.
- Utilizar o PREVSTATE
- ContextApi para acessar as props nos componentes mais diversos da árvore dos componentes
- Classes dinâmicas
- Lifecycle dos componentes
- useEffect quando o componente Montar e desmontar
- useEffect executado a: 
 - Cada novo render
 - Renderizar apenas uma vez após ser montado 
 - Executar toda vez que um state ou prop sofrer alteração
- Como remover o eventListener que está funcionando enquanto o componente está desmontado.

Estilização: 
- Inline styles
- CSS modules
- SASS
- Styled Components [ Trabalhar com props no styled componentes, theming, useTheme ]

Após ter todo esse conteúdo absorvido. O Mateus Silva Também passou alguns desafios ( Mateus eu consegui ) 
- Aplicar a ContextApi para alguns componentes 
- Aplicar a Context para alguns estilos globais. Onde tiver esses valores no código implementados na mão, substituir pela CONTEXT
- Custom Hook para o Localstorage do theme selecionado na aplicação. [ useState, useEffect ] e Localstorage [ getItem & setItem ] 

Como tudo no React é componente, as nossas rotas também são componentes.
Utilizei o React router V5 para fazer as rotas e aprendi/implementei: 

- Criação de rotas
- BrowseRouter
- Exact
- Link to 
- Switch 
- useParams 
- useLocation
- Navegação programática - useHistory. method .push('/route') [ Dentro do BrowseRouter ] ( Reedirecionar através dos componentes ) 
- react-spring { useTransition, animated } 
