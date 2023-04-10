import cx from 'classnames';
import styles from '../styles/Login.module.css'


const Verify = () =>{
   

     
  return (
    
  
    <>
     <img src='group.jpg' width={1300} height={300}></img>
        
     <center><main className={cx(styles["form-signin"],"text-center","mt-5")}>
       
       
        <form>
          <img src='printi.png' height={40} width={100}></img><br></br>
          <br></br>
          <center><b>Otp sent sucessfully!</b></center>
     <br></br>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="number"  maxLength={6}/>
            <label htmlFor="floatingInput"> Email Otp</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="number"  maxLength={6}/>
            <label htmlFor="floatingPassword">Mobile Otp</label>
          </div>

         <div className='button'>
          
          <button className="w-100 btn btn-lg btn-primary" type="submit">Verify</button>
          </div>
        </form>
       
      </main>
      </center>
      

    </>

  )
}
export default  Verify;