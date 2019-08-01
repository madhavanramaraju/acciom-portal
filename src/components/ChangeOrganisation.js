import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import { showOrgChangePage } from '../actions/appActions';

class ChangeOrganisation extends React.Component {
	
	handleShowOrg  = (isShow) => {
		this.props.showOrgChangePage(isShow);
	};

	render() {
		console.log("ManageConnection==>", this.props);
		return (
			<Modal id="orgChangeModal" show={this.props.isOrgChangePageVisible} 
				onHide={(event) => { this.handleShowOrg(false);}} container={this}
				aria-labelledby="contained-modal-title">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title">
						Change Organisation
					</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<form onSubmit={this.login}> 
						<FormGroup controlId="organisation">
							<Col sm={6}><ControlLabel>Select the organisation to be changed</ControlLabel></Col>
							<Col sm={6}>
								<FormControl componentClass="select" placeholder="select">
									<option value="select">select</option>
									<option value="other">...</option>
								</FormControl>
							</Col>
						</FormGroup >
						<FormGroup controlId="submit" className="submitBtn">
							<Button type="submit" bsStyle="primary">Sign-In</Button>
						</FormGroup>
					</form>
				</Modal.Body>
			</Modal>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isOrgChangePageVisible: state.appData.isOrgChangePageVisible
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		showOrgChangePage: (data) => dispatch(showOrgChangePage(data))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeOrganisation);