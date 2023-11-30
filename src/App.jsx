import createRoot from 'react-dom';
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Casper" animal="Cat" breed="Mix" />
    <Pet name="Marley" animal="Dog" breed="Labrador" />
    <Pet name="Loki" animal="Dog" breed="Mix" />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
