import "./App.scss";
import YugiohCardForm from "./components/YugiohCardForm";
import YugiohCard from "./components/YugiohCard";

function App() {
  return (
    <div>
      <div className="alert alert-primary">Projeto Limpom com bootstrap</div>

      <YugiohCardForm></YugiohCardForm>
      <YugiohCard></YugiohCard>
    </div>
  );
}

export default App;
