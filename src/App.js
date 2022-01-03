
import './App.css';
import Button from './Button'




function App() {
  return (
    <div className="App">
      
      <section className="pricing py-5">
          <div className="container">
          <div className="row">
          <div class="col-lg-4"><Button type={"Free"} price={0}/></div>
          <div class="col-lg-4"> <Button type={"PLUS"} price={9}/></div>
          <div class="col-lg-4"><Button type={"PRO"} price={49} /></div> 
        </div>
        </div>
     </section>
     <Button/>
     
    </div>
  );
}

export default App;
