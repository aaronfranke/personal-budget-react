import React from "react";
import Chart from "chart.js";
import axios from "axios";

function createChart(dataSource) {
	var context = document.getElementById("myChart").getContext("2d");
	// tslint:disable: no-unused-expression
	new Chart(context, {
		type: "pie",
		data: dataSource
	});
}

function getBudget() {
	axios.get("http://localhost:3001/budget")
		.then(function (res) {
			// Empty template data structure.
			var dataSource = {
				datasets: [{
					data: [],
					backgroundColor: [
						"#324cdd",
						"#ff6384",
						"#36a2eb",
						"#ff0500",
						"#ffcd56",
						"#fd6b19",
						"#83c57a",
						"#96113a",
					]
				}],
				labels: []
			};
			// Populate the data structure with received values.
			for (var i = 0; i < res.data.myBudget.length; i++) {
				dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
				dataSource.labels[i] = res.data.myBudget[i].title;
			}
			createChart(dataSource);
		});
}

function HomePage() {
	return (
		<main className="center" id="main">
			<div className="page-area">
				<article id="stay-on-track" className="text-box">
					<h1><a href="#stay-on-track">Stay on track</a></h1>
					<p>
						Do you know where you are spending your money? If you really stop to track it down,
						you would get surprised! Proper budget management depends on real data... and this
						app will help you with that!
				</p>
				</article>

				<article id="alerts" className="text-box">
					<h1><a href="#alerts">Alerts</a></h1>
					<p>
						What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
				</p>
				</article>

				<article id="results" className="text-box">
					<h1><a href="#results">Results</a></h1>
					<p>
						People who stick to a financial plan, budgeting every expense, get out of debt faster!
						Also, they to live happier lives... since they expend without guilt or fear...
						because they know it is all good and accounted for.
				</p>
				</article>

				<article id="free" className="text-box">
					<h1><a href="#free">Free</a></h1>
					<p>
						This app is free!!! And you are the only one holding your data!
				</p>
				</article>

				<article id="stay-on-track2" className="text-box">
					<h1><a href="#stay-on-track2">Stay on track</a></h1>
					<p>
						Do you know where you are spending your money? If you really stop to track it down,
						you would get surprised! Proper budget management depends on real data... and this
						app will help you with that!
				</p>
				</article>

				<article id="alerts2" className="text-box">
					<h1><a href="#alerts2">Alerts</a></h1>
					<p>
						What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
				</p>
				</article>

				<article id="results2" className="text-box">
					<h1><a href="#results2">Results</a></h1>
					<p>
						People who stick to a financial plan, budgeting every expense, get out of debt faster!
						Also, they to live happier lives... since they expend without guilt or fear...
						because they know it is all good and accounted for.
				</p>
				</article>

				<article id="free2" className="text-box">
					<h1><a href="#free2">Chart</a></h1>
					<p>
						<canvas id="myChart" width="400" height="400"></canvas>
					</p>
				</article>

			</div>

		</main>
	);
}

getBudget();

export default HomePage;
