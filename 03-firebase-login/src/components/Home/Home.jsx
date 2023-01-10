import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import styles from "./Home.module.css"

function salir() {
  return auth.signOut()
  navigate("/")
}
export function Home(props) {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div>
          <h1>
            <div className={styles.footer}>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
          </h1>
          <br />
          <h1>
            <div className={styles.footer}>
              <Link to="/signup">
                <button>Registrar</button>
              </Link>
            </div>
          </h1>
        </div>

        <h2 className={styles.bienvenida}>
          {props.name ? `Bienvenido - ${props.name}` : "Inicie sesión"}
        </h2>
        <div className={styles.footer}>
          <button onClick={salir}>Salir</button>
        </div>
      </div>
    </div>
  )
}
