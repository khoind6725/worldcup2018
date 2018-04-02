import React, { Component } from 'react';
import ListMatch from './components/ListMatch';
import ControlFilter from './components/ControlFilter';

class App extends Component {

	render() {
		return (
			<div className="container">
				<table className="table table-bordered table-hover">
					<thead>
						<tr>
							<th className="col-lg-1">Trận</th>
							<th className="col-lg-1">Thời gian</th>
							<th className="col-lg-1">Bảng</th>
							<th className="col-lg-2">Sân</th>
							<th className="col-lg-3">Đội</th>
							<th className="col-lg-1">Kết quả</th>
							<th className="col-lg-3">Đội</th>
						</tr>
					</thead>
					<tbody>
						<ControlFilter />
						<ListMatch />
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
