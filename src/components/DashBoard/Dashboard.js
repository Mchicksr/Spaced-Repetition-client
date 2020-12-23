import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import WordList from "../../components/WordList/WordList";
import LanguageService from '../../services/Language-api-service';
import UserContext from "../../contexts/UserContext";

export default class Dashboard extends Component {
    static contextType = UserContext;
	componentDidMount() {
		LanguageService.getLanguage().then(this.context.setLanguage);
	}
	// componentWillUnmount() {
	// 	this.context.clearWords();
	// }

	render() {
	
		return (
		
		
			<section className="dashboard">
                <h1>hey</h1>
				{/* <div className={"start"}> */}
					{/* <Link to={"/learn"} className={"practice-link"}>
						<button>{"Start practicing"}</button>
					</Link> */}
				{/* </div> */}
				{/* <h2 className="language"> Practicing {this.context.language.name}</h2> */}
				{/* <h2 className="total_correct">
					Total correct answers: {this.context.language.total_score}
				</h2> */}
				{/* <h3 className={"wordlist-header"}>{"Words to practice"}</h3> */}
				{/* <ul className={"wordlist"}> */}
					{/* <WordList /> */}
				{/* </ul> */}
			</section>
		);
	}
}