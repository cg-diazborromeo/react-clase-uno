import { BlogPost } from "./tarea/Tarea1.js";

ReactDOM.render(
  <BlogPost
    titulo="Ardillas"
    parrafos={`Hoy vi una ardilla. 
    \nLa ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola. 
    \nCreo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
    autor={{
      nombre: "C. G. Diaz Borromeo",
      titulo: "Front End Developer",
      imagen:
        "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/333553008_3455518144719385_2180972273582119643_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fPqd9lPdOF4AX-NOmUV&_nc_ht=scontent-cph2-1.xx&oh=00_AfBnKdNDdyEk6Gms8WWEtBYPrRKQ99rs_RwyArFXuDL6yQ&oe=64300D28",
    }}
  />,
  document.getElementById("react-app")
);

// import { Tarjeta } from "./tarea/Tarea1.js";

// ReactDOM.render(
//   <Tarjeta
//     nombre="Carlos Gaston Diaz Borromeo"
//     titulo="Programador Front End"
//     imagen="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/333553008_3455518144719385_2180972273582119643_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fPqd9lPdOF4AX-NOmUV&_nc_ht=scontent-cph2-1.xx&oh=00_AfBnKdNDdyEk6Gms8WWEtBYPrRKQ99rs_RwyArFXuDL6yQ&oe=64300D28"
//   />,
//   document.getElementById("react-app")
// );

// import { Welcome } from "./components/Welcome.js";

// ReactDOM.render(
//   <Welcome nombre="Julián" />,
//   document.getElementById("react-app")
// );

// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));
