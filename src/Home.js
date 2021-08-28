import Login from "./Login";


export default function Home(props) {


    return(
        <div className="home">
            <h1 className="home-title">Fotos</h1>
           <Login/>
            <div className="access">
                <button className="client">Client</button>
                <button className="freelance">Freelancer</button>  
                <p style={{color:'white'}} className="login">Already Registered? <a style={{color:'orange'}} onClick={props.modal} >Login</a></p>         
            </div>
        </div>
    )
    
}