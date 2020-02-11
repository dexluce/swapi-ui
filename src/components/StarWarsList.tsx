import React from 'react';
import { TextField, CircularProgress, Grid, List } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Dispatch, bindActionCreators } from 'redux';
import { searchActionCreator, AppActions } from '../store/actions';
import { connect } from 'react-redux';
import StarWarsItem from './StarWarsItem';
import { AppState } from '../store/state';
import StarWarsFilters from './StarWarsFilters';

const mapStateToProps = (store: AppState) => {
  return {
    searchResult: store.searchResult,
    searching: store.searching,
    searchError: store.searchError,
    search: store.search
  };
};
const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => bindActionCreators({ searchActionCreator, dispatch }, dispatch);
type SearchProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (
  class StarWarsList extends React.Component<SearchProps> {
    componentDidMount() {
      this.props.searchActionCreator();
    }

    searchChanged(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      this.props.dispatch({
        type: "SEARCH_CHANGED",
        search: e.currentTarget.value
      });
    }

    checkForSubmition(e: React.KeyboardEvent<HTMLDivElement>) {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.props.searchActionCreator();
      }
    }

    render() {
      return (
        <Grid container style={{textAlign: "center"}}>
          <Grid item xs={12}>
            <Error shouldDisplay={this.props.searchError}/>
            <h1>star wars SWAPI search</h1>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="search"
              type="text"
              placeholder="search"
              onChange={(e) => this.searchChanged(e)}
              onKeyPress={(e) => this.checkForSubmition(e)} />
          </Grid>
          <Grid item xs={12}>
            <StarWarsFilters />
          </Grid>
          <Grid item xs={12}>
            <Loading searching={this.props.searching}/>
          </Grid>
          <Grid item xs={12}>
            <List>
              {this.props.searchResult.map((result, index) => <StarWarsItem key={index} item={result} />)}
            </List>
          </Grid>
        </Grid>
      );
    }
  }
)
class Loading extends React.Component<{searching: boolean}> {
  render() {
    if (this.props.searching) {
      return <CircularProgress/>
    }
    return null;
  }
}
class Error extends React.Component<{shouldDisplay: boolean}> {
  render() {
    if (this.props.shouldDisplay) {
      return <Alert severity="error">Something went wrong, please reload the website and retry</Alert>
    }
    return null;
  }
}