import React from 'react';
import { TextField, CircularProgress } from '@material-ui/core';
import { Dispatch, bindActionCreators } from 'redux';
import { SearchAction, searchActionCreator } from '../store/actions';
import { connect } from 'react-redux';
import StarWarsItem from './StarWarsItem';
import { AppState } from '../store/state';

const mapStateToProps = (store: AppState) => {
  return {
    searchResult: store.searchResult,
    searching: store.searching,
    searchError: store.searchError
  };
};
const mapDispatchToProps = (dispatch: Dispatch<SearchAction>) => bindActionCreators({ searchActionCreator }, dispatch);
type SearchProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (
  class StarWarsList extends React.Component<SearchProps> {
    searchEntry = "";

    componentDidMount() {
      this.search();
    }

    search() {
      this.props.searchActionCreator(this.searchEntry);
    }

    searchChanged(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      this.searchEntry = e.currentTarget.value;
    }

    checkForSubmition(e: React.KeyboardEvent<HTMLDivElement>) {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.search();
      }
    }

    render() {
      return (
        <div>
          <h1>
            star wars SWAPI search
          </h1>
          <form onSubmit={() => this.search()}>
            <TextField id="search" type="text" placeholder="search" onChange={(e) => this.searchChanged(e)} onKeyPress={(e) => this.checkForSubmition(e)}/>
          </form>
          <Loading searching={this.props.searching}/>
          <ul>
            {this.props.searchResult.map((result, index) => <StarWarsItem item={result} />)}
          </ul>
        </div>
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