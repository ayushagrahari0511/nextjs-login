import cx from 'classnames';
import styles from '../styles/Login.module.css'
import { useRouter } from 'next/router';



function Signin() {
    const router = useRouter()
  return (
  
    <>
        
     <center> <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <img src='pri.jpg'></img>
        <form>
          <img src='printi.png' height={40} width={100}></img><br></br>
          <br></br>
       <center><b>Welcome to Printila Admin App!</b></center><br></br>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

         <div className='button'>
          
          <button className="w-100 btn btn-lg btn-primary" type="submit"  onClick={() => router.push('/page2')}><a href="http://localhost:3001/page2"style={{textDecoration:'none',color:'white'}}>Login</a></button>
          </div>
        </form>
      </main>
      </center>

    </>

  )
}

export default Signin