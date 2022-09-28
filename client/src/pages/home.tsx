import * as React from 'react';
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
      <div className='containerDiv'>
        <div className='formDiv' >
          <form action='/api' method="post" className="flex-column formulaire" >
            <div>
              <label htmlFor="id">ID</label>
              <input type="text" name="id" className="form-control"/>
            </div>
            <div>
              <label htmlFor="date">DATE</label>
              <input type="date" name="date" className="form-control"/>
            </div>
            <div>
              <label htmlFor="urlRelais">URLRELAIS</label>
              <input type="url" name="urlRelais" className="form-control"/>
            </div>
            <div>
              <label htmlFor="message">MESSAGE</label>
              <textarea typeof='text' name="message" className="form-control" ></textarea>
            </div>
            <div className='submitButton'>
              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default Home;