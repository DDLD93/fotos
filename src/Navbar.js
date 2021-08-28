
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';

export default function Navbar() {


    return(
    <nav>
          <div style={{position:'relative'}} className="burger-parent">
            <div></div>
            <div></div>
            <div></div>
        </div>
        
        <ul>
            <li>Home</li>
            <li>site-map</li>
            <li>About</li>
        </ul>
        <div style={{position:'relative'}} className="title">
            <h2 className="fotos">fotos</h2>
        </div>
        <NotificationsNoneSharpIcon style={{position:'relative'}} fontSize='large' color='secondary'/>
      
    </nav>

    )
    
}