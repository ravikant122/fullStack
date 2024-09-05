// import TodoApp from "./components/TodoApp";
// import UsingMemo from "./components/UsingMemo";
// import CardWrapper from "./components/CardWrapper";
// import UseEffectHook from "./components/hooks/UseEffectHook";
// import UseCallbackHook from "./components/hooks/UseCallbackHook";
// import CustomHook from "./components/hooks/CustomHook";
// import UseMemoHook from "./components/hooks/UseMemoHook";
// import Routing from "./components/Routing/Routing";
// import PropDriling from "./components/props and state/PropDriling";
// import ContextApi from "./components/props and state/ContentAPI/ContextAPI";
// import Counter from "./components/props and state/State Manangement/Counter";
import { RecoilRoot } from "recoil";
// import Network from "./components/props and state/State Manangement/Network";
import CleanUpUseEffect from "./components/hooks/CleanUpUseEffect";

function App() {
  return (
    <div>
      <RecoilRoot>
        <CleanUpUseEffect />
      </RecoilRoot>
    </div>
  );
}

export default App;
