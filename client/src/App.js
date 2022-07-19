import './App.css';
import 'antd/dist/antd.css';
import '../node_modules/'
import Favorites from './components/Favorites'
import FrequentlyVisited from './components/FrequentlyVisited'


function App() {
    return ( 
        <div>
          <Favorites/>
          <FrequentlyVisited/>
        </div>
        
        
    )
}

export default App;