import './App.css';
import HotelHeader from './components/HotelHeader';
import BookingsContainer from './containers/BookingsContainer'

function App() {
  return (
    <div className="main-content">
      <HotelHeader />
      <BookingsContainer />
    </div>
  );
}

export default App;
