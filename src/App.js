import './App.css';
import Avatar from "./Avatar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
              <Avatar
                  person={{
                      name: 'Katsuko Saruhashi',
                      imageId: 'YfeOqp2'
                  }}
              />
              <Avatar
                  size={80}
                  person={{
                      name: 'Aklilu Lemma',
                      imageId: 'OKS67lh'
                  }}
              />
              <Avatar
                  size={50}
                  person={{
                      name: 'Lin Lanying',
                      imageId: '1bX5QH6'
                  }}
              />
          </div>
      </header>
    </div>
  );
}

export default App;
