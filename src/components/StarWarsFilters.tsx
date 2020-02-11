import React, { Component } from 'react';
import { FormControl, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { connect } from 'react-redux';
import { AppState } from '../store/state';
import { searchActionCreator, AppActions } from '../store/actions';
import { bindActionCreators, Dispatch } from 'redux';

const mapStateToProps = (store: AppState) => {
  return {
    filters: store.filters
  };
};
const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => bindActionCreators({ searchActionCreator, dispatch }, dispatch);
type FiltersProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (
  class StarWarsFilters extends Component<FiltersProps> {
    changedFilter(e: React.ChangeEvent<HTMLInputElement>, key: string) {
      this.props.dispatch({
        type: "FILTERS_CHANGED",
        filters: {
          ...this.props.filters,
          [key]: !this.props.filters[key],
        }
      });
      this.props.searchActionCreator();
    }

    render() {
      return(
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="peoples"
              control={<Switch checked={this.props.filters.people} color="primary" onChange={(e) => this.changedFilter(e, "people")} />}
              label="Peoples"
              labelPlacement="top"
            />
            <FormControlLabel
              value="films"
              control={<Switch checked={this.props.filters.film} color="primary" onChange={(e) => this.changedFilter(e, "film")} />}
              label="Films"
              labelPlacement="top"
            />
            <FormControlLabel
              value="planets"
              control={<Switch checked={this.props.filters.planet} color="primary" onChange={(e) => this.changedFilter(e, "planet")} />}
              label="Planets"
              labelPlacement="top"
            />
            <FormControlLabel
              value="species"
              control={<Switch checked={this.props.filters.species} color="primary" onChange={(e) => this.changedFilter(e, "species")} />}
              label="Species"
              labelPlacement="top"
            />
            <FormControlLabel
              value="starships"
              control={<Switch checked={this.props.filters.starship} color="primary" onChange={(e) => this.changedFilter(e, "starship")} />}
              label="Starships"
              labelPlacement="top"
            />
            <FormControlLabel
              value="vehicles"
              control={<Switch checked={this.props.filters.vehicle} color="primary" onChange={(e) => this.changedFilter(e, "vehicle")} />}
              label="Vehicles"
              labelPlacement="top"
            />
          </FormGroup>
        </FormControl>
      );
    }
  }
);