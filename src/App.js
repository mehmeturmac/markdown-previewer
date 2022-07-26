import Header from './components/Header';
import InputArea from './components/InputArea';
import Previewer from './components/Previewer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-content">
      <Header />
      <div className="text-panels">
        <InputArea />
        <Previewer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
