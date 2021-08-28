import TextField from '@material-ui/core/TextField';

export default function SignIn() {
    return(
        <div className="signin-page">
             <div className="filter"></div>
            <div style={{filter:"blur(0px)"}} className="modal">
        <TextField
        style={{width:'18rem'}}
          required
          id="outlined-required"
          label="Email"
          variant="outlined"
        />
         <TextField
         style={{width:'18rem'}}
          required
          id="outlined-required"
          label="Password"
          variant="outlined"
        />
        <button className="signIn">LogIn</button>
            </div>
        </div>
    )
}