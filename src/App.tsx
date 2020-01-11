import React from 'react';
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import './App.css';
import swagger from './swagger.json';

class App extends React.Component {
  private elementID: string = 'swagger-ui';

  public componentDidMount(): void {
    this.swagger();
  }

  public componentDidUpdate(): void {
    this.swagger();
  }

  public render(): JSX.Element {
    return (
      <div className='App'>
        <div id={this.elementID} />
      </div>
    );
  }

  private swagger = (): void => {
    SwaggerUI({
      docExpansion: 'list',
      domNode: document.getElementById(this.elementID),
      spec: swagger,
    });
  }
}

export default App;
