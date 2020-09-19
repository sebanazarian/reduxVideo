import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {

  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0 // validacion si user tiene elementos

  const handleLogout = () => {
    props.logoutRequest({}); //envio objeto vacio
  }

  const headerClass = classNames('header',{
    isLogin,
    isRegister,
  })

  return (
    <header className={headerClass}>

      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} />
            :
            <img src={userIcon} alt="" />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><a href="/">{user.name}</a></li>
            : null
          }
          {hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
            :
            <>
              <li>
                <Link to="/login">
                  Iniciar sesion
              </Link>
              </li>
            </>
          }
        </ul>
      </div>
    </header>
  );
}


Header.propTypes = {
  user: PropTypes.object,
}

//  mapear nuestras propiedades del estado
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
}
//  se encarga de las actiones que tenemos que disparar o //
//  que vamos a enviar a nuestro doc //
// cuando traemos un actions tenemos que importarlo y utilizar mapDispatchToProps
const mapDispatchToProps = {
  logoutRequest,
}

//connect  se enarga de conectar los props que estamos trayendo los dispach q vamos a //
//utilizar dentro del componentes

export default connect(mapStateToProps, mapDispatchToProps)(Header);
