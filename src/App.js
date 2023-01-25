// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) =>
				this.setState(
					() => {
						return { monsters: users };
					},
					() => {
						console.log(this.state);
					}
				)
			);
	}

	render() {
		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={(event) => {
						console.log({ startingArray: this.state.monsters });
						const filteredMonsters = this.state.monsters.filter(
							(monster) => {
								return monster.name.includes(
									event.target.value
								);
							}
						);

						this.setState(
							() => {
								return {
									monsters: filteredMonsters,
								};
							},
							() => {
								console.log({
									endingArray: this.state.monsters,
								});
							}
						);
					}}
				/>
				{this.state.monsters.map((monster) => {
					return (
						<div key={monster.name}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
