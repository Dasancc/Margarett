import'./NavBar.css';

const NavBar = () => {
	return(
		<div className="NavBar">		
			<nav>
				<h1>Petunias</h1>
				<ul>
					<li><a  className="sinsubrayado" href="#">Inicio</a></li>
					<li> <a className="sinsubrayado" href="#">Promociones</a>
						<ul>
							<li><a className="sinsubrayado" href="#"> Mayorista</a></li>
							<li><a className="sinsubrayado" href="#">Minorista</a></li>
						</ul>
					</li>
					<li><a className="sinsubrayado" href="#">Menú</a>
						<ul>
							<li><a className="sinsubrayado" href="#">Cumpleaños</a></li>
							<li><a className="sinsubrayado" href="#">Desayunos</a></li>
                        	<li><a className="sinsubrayado" href="#">Pasteleria</a></li>
                        	<li><a className="sinsubrayado" href="#">Salados</a></li>
						</ul>	
					</li>
					<li><a class="sinsubrayado" href="registrate/registrate.html"> Registrate</a></li>
				</ul>
			</nav>
		</div>
	)
}
export default NavBar;