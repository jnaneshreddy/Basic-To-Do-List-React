
import './App.css';
import Data from './data';

const clickeve = (e) =>{
  console.log(e)
}

function App() {

  return(
    <button className="button " onClick={clickeve}>click Me </button>

    
    // <main className='container'>
    //   <ul className='comments-container'>
    //     {

    //       Data.map((props) => {
    //         const {name,email,body} = props
    //         return <li className="comment">
    //           <div className="comment-header">
    //             <h3 className="email">{email}</h3>
    //             <h5 className="name">{name}</h5>
                
    //           </div>
    //           <p className="message">{body}</p>
    //         </li>;
    //       })
    //     }
        // {/* <li className='comment'>
        //   <div className="comment-header">
        //   <h3 className="email">Email@email.com</h3>
        //   <h>some random name</h>
        //   </div>
        //   <p className="message">laboriosam20</p>
        // </li> */}
      
  //     </ul>
  //   </main>
  )
}

export default App;
