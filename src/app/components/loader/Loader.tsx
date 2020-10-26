import React from "react";
import { IRootState } from '../../models/root.state';
import { connect } from "react-redux";


class Loader extends React.Component<{ isLoading: boolean } | any> {

    public render = (): JSX.Element => {
        return this.props.isLoading ? (
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        ) : <></>;
    }
}

const mapStateToProps = (state: IRootState): { isLoading: boolean } => {
    return { isLoading: state.todoReducer.isLoading };
}

export default connect(mapStateToProps)(Loader);